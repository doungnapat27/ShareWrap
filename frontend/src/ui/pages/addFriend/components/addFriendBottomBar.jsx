import React from "react"; 
import useStyles from "../style/addFriendBottomBarStyle";
import {Box, Button, Typography, Avatar, AvatarGroup} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    } 
    return color;
  }

function stringAvatar(username) {
    return {
      sx: {
        bgcolor: stringToColor(username),
      },
      children: `${username.split('')[0][0]}`,
    };
}

function AddFriendBottomBar({selectedFriends}) {
    const classes = useStyles()
    const handleSaveSelectedFriends = () => {
      localStorage.setItem('selectedFriends', JSON.stringify(selectedFriends));

      alert('Selected friends saved successfully!');
      setTimeout(() => {
        window.location.href = "/summary-bill";; 
      }, 1000);
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
                        {selectedFriends.map((friend) => (
                        <Avatar key={friend} {...stringAvatar(friend)} />
                        ))}
                      </AvatarGroup>
                    </Box>
                    <Button
                    fullWidth={true}
                    className={classes.positionButton}
                    endIcon={<ArrowForwardIcon/>}
                    onClick={handleSaveSelectedFriends}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default AddFriendBottomBar;
