import React, { useState, useEffect }  from "react";
import useStyles from '../style/addFriendTabStyle';
import { Box, Tabs, Tab, Paper, IconButton, InputBase, Typography, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import AddFriendBottomBar from "./addFriendBottomBar";
import FriendList from "./friendList";
import { request} from '../../../../helpers/axios_helper';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
}

function AddFriendTab() {
    const [value, setValue] = useState(0);
    const [selectedFriends, setSelectedFriends] = useState([]);
    const classes = useStyles();
    const friends = [];
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
                    // onSubmit={handleSearch} // You can remove this if you're not using a submit button
                  >
                    <IconButton sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search"
                      inputProps={{ 'aria-label': 'search users' }}
                      value={searchInput}
                      onChange={handleSearchInputChange}
                    />

                    {/* Please help me fix the CSS of the searchbar's frop down here TT */}
                    {searchResult && searchResult.username && ( 
                        <Box className={classes.dropdown}>
                          <Box className={classes.dropdownItem}>
                            {searchResult.username}
                            {/* Optionally, display the 'Add Friend' button conditionally */}
                            {!searchResult.isFriend && (
                              <IconButton onClick={() => handleAddFriend(searchResult.id)}>
                                <AddIcon /> Add Friend
                              </IconButton>
                            )}
                          </Box>
                        </Box>
                      )}
                      </Paper>
                    </Box>
                    <Box className={classes.selectFriend}>
                        <Typography variant="h5">Select Friends</Typography>
                    </Box>
                    <Box className={classes.friendList}>
                        <FriendList
                            friends={friends}
                            selectedFriends={selectedFriends}
                            setSelectedFriends={setSelectedFriends}
                        /> 
                    </Box>          
                </Box>
                <Box className={classes.bottomBar}>
                    <AddFriendBottomBar selectedFriends={selectedFriends} />
                </Box>
            </Box>
        </Box>
    );
}

export default AddFriendTab;
