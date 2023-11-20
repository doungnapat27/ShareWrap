import React, {useState} from "react";
import useStyles from "../style/addFriendBottomBarStyle";
import { Box, Button, Typography, Avatar, AvatarGroup } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { stringAvatar } from "../../../../helpers/avatar_helper";
import CircularProgress from "@mui/material/CircularProgress";

function AddFriendBottomBar({ selectedFriends, selectedFriendsId }) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveSelectedFriends = () => {
    setIsLoading(true);
    localStorage.setItem(
      "selectedFriendsId",
      JSON.stringify(selectedFriendsId)
    );
      window.location.href = "/summary-bill";
      // setTimeout(() => {
      //   setIsLoading(false);
      //   window.location.href = "/summary-bill";
      // }, 1000);
  };

  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.boxContainer}>
          <Box className={classes.boxHeader}>
            <Typography variant="h5">Selected Friends</Typography>
          </Box>
          <Box className={classes.boxFriend}>
            <AvatarGroup max={9}>
              {selectedFriendsId.map((friend) => (
                <Avatar key={friend} {...stringAvatar(friend)} />
              ))}
            </AvatarGroup>
          </Box>
          <Button
            fullWidth={true}
            className={classes.positionButton}
            endIcon={!isLoading && <ArrowForwardIcon />}
            onClick={handleSaveSelectedFriends}
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? (
              <CircularProgress size={24} style={{ color: "rgba(152, 30, 37, 0.80)" }} />
            ) : (
              "Next"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddFriendBottomBar;
