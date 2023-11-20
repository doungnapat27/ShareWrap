import React, { useState } from "react";
import useStyles from "../../addFriend/style/addFriendBottomBarStyle";
import { Box, Button, Typography, Avatar, AvatarGroup } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircularProgress from "@mui/material/CircularProgress";

function SearchAddFriendBottomBar() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveSelectedFriends = () => {
    setIsLoading(true);
    window.location.href = "/home/:id";
  };

  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.boxContainer}>
          <Button
            fullWidth={true}
            className={classes.positionButton}
            endIcon={!isLoading && <ArrowForwardIcon />}
            onClick={handleSaveSelectedFriends}
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? (
              <CircularProgress
                size={24}
                style={{ color: "rgba(152, 30, 37, 0.80)" }}
              />
            ) : (
              "Go to homepage"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchAddFriendBottomBar;
