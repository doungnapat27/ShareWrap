import React, { useState, useEffect } from "react";
import useStyles from "../style/searchFriendsTabStyle";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Button,
  Stack,
  TextField,
  InputAdornment,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { request } from "../../../../helpers/axios_helper";
import { stringAvatar } from "../../../../helpers/avatar_helper";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CircularProgress from "@mui/material/CircularProgress";
import SearchFriendList from "./searchFriendsList";
import SearchAddFriendBottomBar from "./searchFriendsBottom";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const filter = createFilterOptions();

function SearchFriendsTab() {
  const [value, setValue] = useState(0);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [friends, setFriends] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [selectedFriendsId, setSelectedFriendsId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [autoValue, setAutoValue] = useState(null);
  const [open, toggleOpen] = useState(false);
  const handleClose = () => {
    setDialogValue({
      id: "",
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    id: "",
  });

  const uid = JSON.parse(localStorage.getItem("auth_user")).id;
  const classes = useStyles();

  const fetchFriends = async () => {
    setIsLoading(true);
    try {
      const response = await request("GET", "/" + uid + "/friends");
      setFriends(response.data);
    } catch (error) {
      console.error("Error fetching friends:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToSelected = (friendId) => {
    setSelectedFriendsId((prevSelected) => {
      const updatedSelected = new Set(prevSelected);
      if (updatedSelected.has(friendId)) {
        updatedSelected.delete(friendId);
      } else {
        updatedSelected.add(friendId);
      }
      localStorage.setItem(
        "selectedFriendsId",
        JSON.stringify([...updatedSelected])
      );
      return [...updatedSelected];
    });
  };

  const handleAddFriend = async (event) => {
    event.preventDefault();
    console.log("adding friend...");
    setIsLoading(true);
    try {
      setAutoValue({ id: dialogValue.id });
      if (uid === dialogValue.id) {
        setSnackbarOpen(true);
        setSnackbarMessage("You cannot add yourself!");
        setSnackbarSeverity("error");
        return;
      } else if (friends.find((friend) => friend.id === dialogValue.id)) {
        setSnackbarOpen(true);
        setSnackbarMessage("This user is already your friend!");
        setSnackbarSeverity("error");
        return;
      }
      const response = await request(
        "POST",
        "/" + uid + "/add/friend/" + dialogValue.id
      );

      fetchFriends();
      setSnackbarOpen(true);
      setSnackbarMessage("Friend added successfully!");
      setSnackbarSeverity("success");
      handleClose();
    } catch (error) {
      setSnackbarOpen(true);
      setSnackbarSeverity("error");
      if (error.response.status === 404) {
        setSnackbarMessage("Friend not found!");
      } else {
        setSnackbarMessage("Error adding friend!:", error.response.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  // useEffect to call the fetch function when the component mounts
  useEffect(() => {
    fetchFriends();
  }, []);
  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.tabContainer}>
          <Tabs
            value={value}
            TabIndicatorProps={{
              sx: { background: "#FFB53B" },
            }}
            centered={true}
          >
            <Tab
              className={classes.centerTab}
              label="Search Friends"
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
      </Box>
      <Box className={classes.cover}>
        <Box className={classes.searchQuery}>
          <Stack spacing={2} sx={{ marginTop: "30px" }}>
            <Autocomplete
              value={autoValue}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);
                if (params.inputValue !== "") {
                  filtered.push({
                    inputValue: params.inputValue,
                    username: `Add "${params.inputValue}"`,
                    id: `Add "${params.inputValue}"`,
                  });
                }
                return filtered;
              }}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  // timeout to avoid instant validation of the dialog's form.
                  toggleOpen(true);
                  setDialogValue({
                    id: newValue,
                  });
                } else if (newValue && newValue.inputValue) {
                  toggleOpen(true);
                  setDialogValue({
                    id: newValue.inputValue,
                  });
                } else {
                  setAutoValue(newValue);
                }
              }}
              id="free-solo-dialog-demo"
              options={friends}
              getOptionLabel={(option) => {
                // e.g. value selected with enter, right from the input
                if (typeof option === "string") {
                  return option;
                }
                if (option && option.inputValue) {
                  return option.inputValue;
                }
                return option && option.id ? option.id : "";
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              renderOption={(props, option) => {
                const isAlreadyFriend = friends.some(
                  (friend) => friend.id === option.id
                );
                return (
                  <li {...props} className={classes.searchResults}>
                    <Box className={classes.listFriend}>
                      {isAlreadyFriend && (
                        <Box className={classes.listName}>
                          <Avatar {...stringAvatar(option.id)} />
                          <span style={{ marginLeft: "10px" }}>
                            {option.id}
                          </span>
                        </Box>
                      )}
                      {!isAlreadyFriend && (
                        <Box className={classes.listName}>
                          <span style={{ marginLeft: "10px" }}>
                            {option.id}
                          </span>
                        </Box>
                      )}
                      {!isAlreadyFriend && (
                        <Button className={classes.addFriendButton}>
                          <PersonAddIcon />
                        </Button>
                      )}
                    </Box>
                  </li>
                );
              }}
              freeSolo
              className={classes.searchBoxContainer}
              renderInput={(params) => (
                <TextField
                  className={classes.paperSearchBox}
                  {...params}
                  placeholder="Search for friend"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ p: "10px" }}
                        aria-label="Search"
                      >
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <Dialog open={open} onClose={handleClose}>
              <form onSubmit={handleAddFriend}>
                <DialogTitle variant="h4">Add a new friend</DialogTitle>
                <DialogContent>
                  <DialogContentText>This is your friend ?</DialogContentText>
                  <TextField
                    className={classes.dialogTextfield}
                    InputProps={{
                      readOnly: true,
                    }}
                    // autoFocus
                    margin="dense"
                    id="name"
                    value={dialogValue.id}
                    onChange={(event) =>
                      setDialogValue({
                        ...dialogValue,
                        placeholder: event.target.value,
                      })
                    }
                    placeholder="Friend ID"
                    type="text"
                    variant="outlined"
                  />
                </DialogContent>
                <DialogActions className={classes.dialogAction}>
                  <Button className={classes.buttonAdd} type="submit">
                    {isLoading ? (
                      <CircularProgress size={24} style={{ color: "white" }} />
                    ) : (
                      "Yes"
                    )}
                  </Button>
                  <Button
                    className={classes.buttonCancel}
                    onClick={handleClose}
                  >
                    No
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          </Stack>
          <Box className={classes.selectFriend}>
            <Typography variant="h5">Friends ({friends.length})</Typography>
          </Box>
          <Box className={classes.friendList}>
            {isLoading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  marginTop: "24px",
                }}
              >
                <CircularProgress size={48} style={{ color: "#FFB53B" }} />
              </Box>
            ) : (
              <SearchFriendList
                friends={friends}
                selectedFriends={selectedFriends}
                setSelectedFriends={setSelectedFriends}
                setSelectedFriendsId={setSelectedFriendsId}
                selectedFriendsId={selectedFriendsId}
              />
            )}
          </Box>
        </Box>
        <Box className={classes.bottomBar}>
          <SearchAddFriendBottomBar />
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
}

export default SearchFriendsTab;
