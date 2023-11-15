import React from "react"; 
import useStyles from "../style/addFriendBottomBarStyle";
import {Box, Button, Typography, Avatar, AvatarGroup} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { stringAvatar } from '../../../../helpers/avatar_helper'

function AddFriendBottomBar({selectedFriends, selectedFriendsId}) {
    const classes = useStyles()
    const handleSaveSelectedFriends = () => {
      // localStorage.setItem('selectedFriends', JSON.stringify(selectedFriends));
      localStorage.setItem('selectedFriendsId', JSON.stringify(selectedFriendsId));

      // alert('Selected friends saved successfully!');
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
