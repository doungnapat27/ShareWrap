import React, { useState, useEffect } from "react";
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
    const [selectedFriends, setSelectedFriends] = useState([]);
    const classes = useStyle();

    useEffect(() => {
      const savedSelectedFriends = localStorage.getItem('selectedFriends');
      if (savedSelectedFriends) {
          setSelectedFriends(JSON.parse(savedSelectedFriends));
      }
    }, []);

    const getFirstName = (fullName) => {
      return fullName.split(' ')[0]; 
    }
    return (
        <Box className={classes.cover}>
            <Box className={classes.container}>
                <Box className={classes.boxContainer}>
                    <Box className={classes.boxHeader}>
                        <Typography variant="h5">Non-selected Friends</Typography>
                    </Box>
                    <Box className={classes.boxFriend}>
                      <AvatarGroup max={9}>
                            {selectedFriends.map((friend, index) => (
                                // <Avatar key={index} {...stringAvatar(friend)} /> 
                                <Box key={index} className={classes.avatarBox}>
                                <Avatar {...stringAvatar(friend)} />
                                <Typography variant="h6" className={classes.avatarName}>
                                    {getFirstName(friend)}
                                </Typography>
                              </Box>
                            ))}
                      </AvatarGroup>
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