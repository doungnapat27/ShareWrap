import React, { useState }  from "react";
import useStyles from '../style/addFriendTabStyle';
import { Box, Tabs, Tab, Paper, IconButton, InputBase, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddFriendBottomBar from "./addFriendBottomBar";
import FriendList from "./friendList";

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
}

function AddFriendTab() {
    const [value, setValue] = useState(0);
    const classes = useStyles()
    return(
        <Box className={classes.cover}>
            <Box className={classes.container}>
                <Box className={classes.tabContainer}>
                    <Tabs
                        value={value}
                        TabIndicatorProps={{
                            sx: { background: "#FFB53B" },
                        }}
                        centered={true}
                        >
                        <Tab
                            className={classes.centerTab}
                            label="Bill splitting"
                            {...a11yProps(0)}
                        />
                    </Tabs>
                </Box>
                <Box className={classes.cover}>
                    <Box className={classes.searchBoxContainer}>
                        <Paper
                            component="form"
                            className={classes.paperSearchBox}
                        >
                            <IconButton sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon/>
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search"
                                inputProps={{'aria-label': 'search friend'}}
                            />
                        </Paper>    
                    </Box>
                    <Box className={classes.selectFriend}>
                        <Typography variant="h5">Select Friends</Typography>
                    </Box>
                    <Box className={classes.friendList}>
                        <FriendList/>
                    </Box>
                    
                </Box>
                <Box className={classes.bottomBar}>
                    <AddFriendBottomBar/>
                </Box>
            </Box>
        </Box>
    );
}

export default AddFriendTab;