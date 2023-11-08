import React from "react";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import useStyle from "../style/summeryBillAddFriendstyle"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

function SummaryBillAddFriend() {
    const classes = useStyle();
    return (
        <Box className={classes.cover}>
            <Box className={classes.container}>
                <Box className={classes.foodContainer}>
                    <Box className={classes.foodInfo}>
                        <Typography variant="h5">
                            Kao Pad kraprao
                        </Typography>
                        <Typography variant="h5">
                            ฿ 200
                        </Typography>
                    </Box>
                    <Box className={classes.friendInfo}>
                        <AvatarGroup>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                        </AvatarGroup>
                        <Box className={classes.iconAddFriend}>
                            <PersonAddAlt1Icon/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SummaryBillAddFriend;