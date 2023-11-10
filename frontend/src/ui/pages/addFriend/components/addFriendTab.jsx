import React, { useState }  from "react";
import useStyles from '../style/addFriendTabStyle';
import { Box, Tabs, Tab, Paper, IconButton, InputBase, Typography, List, ListItem, Button } from '@mui/material';
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
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const classes = useStyles()
  const friends = [
      {name: 'Oat Sarayut'},
      {name: 'Aom Doungnapat'},
      {name: 'Oil Bunradar'},
      {name: 'Ming Rujiphart'},
      {name: 'Mark Wasapon'},
      {name: 'Eff Thitirat'},
      {name: 'Chat GPT'},
      {name: 'Oily Haha'},
      {name: 'Effy Haha'},
      {name: 'Mingy Haha'},
      {name: 'Oaty Haha'},
      {name: 'Aomy Haha'},
      {name: 'Marky Haha'},
  ];

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    if (value) {
      const filtered = friends.filter(friend =>
        friend.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  };

  const handleAddFriend = (friendName) => {

    // if (!selectedFriends.includes(friendName)) {
    //   setSelectedFriends([...selectedFriends, friendName]);
    // }
  };

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
                    <Box className={classes.searchQuery}>
                      <Box className={classes.searchBoxContainer}>
                          <Paper component="form" className={classes.paperSearchBox}>
                            <IconButton sx={{ p: '10px' }} aria-label="search">
                              <SearchIcon/>
                            </IconButton>
                            <InputBase
                              sx={{ ml: 1, flex: 1 }}
                              placeholder="Search"
                              inputProps={{ 'aria-label': 'search friend' }}
                              value={searchQuery}
                              onChange={handleSearchChange}
                            />
                          </Paper>
                      </Box>
                      {filteredResults.length > 0 && (
                            <List className={classes.searchResults}>
                            {filteredResults.map((result, index) => (
                              <ListItem key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ marginLeft: '40px' }}>{result.name}</span>
                                <Button 
                                  className={classes.addButton}
                                  onClick={() => handleAddFriend(result.name)}
                                  // variant="outlined"
                                >
                                  Add
                                </Button>
                              </ListItem>
                            ))}
                          </List>
                      )}
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