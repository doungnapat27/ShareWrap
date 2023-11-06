import { Avatar, Box, Checkbox, Icon, Typography } from "@mui/material";
import React from "react";
import useStyles from "../style/friendListStyle";
import Uncheck from '@mui/icons-material/Circle';
import Check from '@mui/icons-material/CheckCircle';

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

const label = { inputProps: { 'aria-label': 'Checkbox Friend' } };

function FriendList({ friends, selectedFriends, setSelectedFriends }) {

    const handleToggle = (friend) => {
        const currentIndex = selectedFriends.indexOf(friend.name);
        const newChecked = [...selectedFriends];

        if (currentIndex === -1) {
            newChecked.push(friend.name);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setSelectedFriends(newChecked);
    };

    const classes = useStyles()
    return(
        <Box className={classes.cover}>
            {friends.map((friend) =>(
                <Box className={classes.container}>
                    <Box className={classes.friendContainer}>
                        <Box className={classes.nameContainer}>
                            <Avatar {...stringAvatar(friend.name)} />
                            <Typography variant="h4" style={{marginLeft:'1rem'}}>
                                {friend.name}
                            </Typography>
                        </Box>
                        <Box className={classes.checkBox}>
                            <Checkbox {...label} 
                            icon={<Uncheck/>} 
                            checkedIcon={<Check/>}
                            onChange={() => handleToggle(friend)} 
                            checked={selectedFriends.indexOf(friend.name) !== -1}
                            sx={{
                                color: '#D9D9D9',
                                '&.Mui-checked': {
                                color: '#FFB53B',
                                },
                            }}
                            />
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default FriendList;