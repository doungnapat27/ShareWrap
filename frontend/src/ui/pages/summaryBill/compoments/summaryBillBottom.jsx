import React from "react";
import useStyle from "../style/summaryBillBottomStyle";
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

function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split('')[0][0]}`,
    };
}


function SummaryBillBottom() {
    const classes = useStyle();
    return (
        <Box className={classes.cover}>
            <Box className={classes.container}>
                <Box className={classes.boxContainer}>
                    <Box className={classes.boxHeader}>
                        <Typography variant="h5">Non-selected Friends</Typography>
                    </Box>
                    <Box className={classes.boxFriend}>
                      {/* <AvatarGroup max={9}>
                        {selectedFriends.map((friend) => (
                        <Avatar key={friend} {...stringAvatar(friend)} />
                        ))}
                      </AvatarGroup> */}
                    </Box>
                    <Button
                    fullWidth={true}
                    className={classes.positionButton}
                    endIcon={<ArrowForwardIcon/>}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default SummaryBillBottom;