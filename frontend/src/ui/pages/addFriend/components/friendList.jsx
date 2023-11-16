import { Avatar, Box, Checkbox, Icon, Typography } from "@mui/material";
import React from "react";
import useStyles from "../style/friendListStyle";
import Uncheck from '@mui/icons-material/Circle';
import Check from '@mui/icons-material/CheckCircle';
import { stringAvatar } from "../../../../helpers/avatar_helper";

const label = { inputProps: { 'aria-label': 'Checkbox Friend' } };

function FriendList({ friends, selectedFriends, setSelectedFriends, setSelectedFriendsId, selectedFriendsId}) {

    const handleToggle = (friend) => {
        const currentIndex = selectedFriends.indexOf(friend.username);
        const currentIndexId = selectedFriendsId.indexOf(friend.id);
        const newChecked = [...selectedFriends];
        const newCheckedId = [...selectedFriendsId];

        if (currentIndex === -1) {
            newChecked.push(friend.username);
            newCheckedId.push(friend.id);
        } else {
            newChecked.splice(currentIndex, 1);
            newCheckedId.splice(currentIndexId, 1);
        }

        setSelectedFriends(newChecked);
        setSelectedFriendsId(newCheckedId);
    };

    const classes = useStyles()
    return(
        <Box className={classes.cover}>
            {friends.map((friend) =>(
                <Box className={classes.container}>
                    <Box className={classes.friendContainer}>
                        <Box className={classes.nameContainer}>
                            <Avatar {...stringAvatar(friend.id)} />
                            <Typography variant="h4" style={{marginLeft:'1rem'}}>
                                {friend.id}
                            </Typography>
                        </Box>
                        <Box className={classes.checkBox}>
                            <Checkbox {...label} 
                            icon={<Uncheck/>} 
                            checkedIcon={<Check/>}
                            onChange={() => handleToggle(friend)} 
                            checked={selectedFriends.indexOf(friend.username) !== -1}
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
