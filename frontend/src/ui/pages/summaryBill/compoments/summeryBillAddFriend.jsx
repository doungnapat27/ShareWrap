import React, { useState, useEffect } from "react";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import useStyle from "../style/summeryBillAddFriendstyle"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

function SummaryBillAddFriend() {
    const [items, setItems] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        const billDetails = JSON.parse(localStorage.getItem('billDetails'));
        if (billDetails && billDetails.items) {
            setItems(billDetails.items);
        }
    }, []);
    return (
        <Box className={classes.cover}>
            {items.map((item, index) => (
                <Box className={classes.container}>
                    <Box className={classes.foodContainer}>
                        <Box className={classes.foodInfo}>
                            <Typography variant="h5">
                                {item.name}
                            </Typography>
                            <Typography variant="h5">
                                ฿ {item.cost.toLocaleString()}
                            </Typography>
                        </Box>
                        <Box className={classes.friendInfo}>
                            <AvatarGroup>
                                {/* <Avatar>H</Avatar>
                                <Avatar>H</Avatar>
                                <Avatar>H</Avatar>
                                <Avatar>H</Avatar>
                                <Avatar>H</Avatar>
                                <Avatar>H</Avatar>
                                <Avatar>H</Avatar>
                                <Avatar>H</Avatar> */}
                            </AvatarGroup>
                            <Box className={classes.iconAddFriend}>
                                <PersonAddAlt1Icon/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default SummaryBillAddFriend;