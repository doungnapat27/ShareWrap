import React, { useState, useEffect } from "react";
import useStyles from "../style/addFriendTabStyle";
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
  Paper,
  IconButton,
  InputBase,
} from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import MuiAlert from "@mui/material/Alert";
import SearchIcon from "@mui/icons-material/Search";
import AddFriendBottomBar from "./addFriendBottomBar";
import FriendList from "./friendList";
import { request } from "../../../../helpers/axios_helper";
import { stringAvatar } from "../../../../helpers/avatar_helper";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const filter = createFilterOptions();

function AddFriendTab() {
  const [value, setValue] = useState(0);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [friends, setFriends] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [selectedFriendsId, setSelectedFriendsId] = useState([]);

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
    try {
      console.log("fetching friends...");
      const response = await request("GET", "/" + uid + "/friends");
      setFriends(response.data);
    } catch (error) {
      console.error("Error fetching friends:", error);
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
      console.log(error.status);
      if (error.response.status === 404) {
        setSnackbarMessage("Friend not found!");
      } else {
        setSnackbarMessage("Error adding friend!:", error.response.message);
      }
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
              label="Bill splitting"
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
      </Box>
      {/* search box  */}
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
                  setTimeout(() => {
                    toggleOpen(true);
                    setDialogValue({
                      id: newValue,
                    });
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
                const isAlreadyFriend = friends.some(friend => friend.id === option.id);
                return (
                  <li {...props} className={classes.searchResults}>
                    <Box className={classes.listFriend}>
                      {isAlreadyFriend && (
                          <Box className={classes.listName}>
                            <Avatar {...stringAvatar(option.id)} />
                            <span style={{ marginLeft: "10px" }}>{option.id}</span>
                          </Box>
                      )}
                      {isAlreadyFriend && (
                        <Button
                          className={classes.addButton}
                          onClick={() => handleAddToSelected(option.id)}
                        >
                          {selectedFriendsId.includes(option.id) ? "Remove" : "Add"}
                        </Button>
                      )}
                      {!isAlreadyFriend && (
                          <Box className={classes.listName}>
                          <span style={{ marginLeft: "10px" }}>{option.id}</span>
                          </Box>
                      )}
                      {!isAlreadyFriend && (
                        <Button
                          className={classes.addFriendButton}
                        >
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
                  <DialogContentText>
                    This is your friend ?
                  </DialogContentText>
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
                  <Button className={classes.buttonAdd}type="submit">Yes</Button>
                  <Button className={classes.buttonCancel} onClick={handleClose}>No</Button>
                </DialogActions>
              </form>
            </Dialog>
          </Stack>
          {/* search box */}
          <Box className={classes.selectFriend}>
            <Typography variant="h5">
              Select Friends ({friends.length})
            </Typography>
          </Box>
          <Box className={classes.friendList}>
            <FriendList
              friends={friends}
              selectedFriends={selectedFriends}
              setSelectedFriends={setSelectedFriends}
              setSelectedFriendsId={setSelectedFriendsId}
              selectedFriendsId={selectedFriendsId}
            />
          </Box>
        </Box>
        <Box className={classes.bottomBar}>
          <AddFriendBottomBar
            selectedFriends={selectedFriends}
            selectedFriendsId={selectedFriendsId}
          />
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
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

export default AddFriendTab;
