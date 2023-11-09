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
    const [friends, setFriends] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState();
    const uid = JSON.parse(localStorage.getItem('auth_user')).id;

    const fetchFriends = async () => {
      try {
        console.log('fetching friends...');
        const response = await request('GET','/'+uid+'/friends');
        console.log(response.data);
        setFriends(response.data); // Assume the response has the friends array
      } catch (error) {
        console.error('Error fetching friends:', error);
        // Handle error, maybe set some error state to show in the UI
      }
    };

    // Function to handle the search input change and perform the search
    const handleSearchInputChange = async (event) => {
      console.log('Try searching...')
      setSearchInput(event.target.value);
      if (event.target.value.trim() !== '') {
          try {
            const response = await request('GET','/search/users/'+event.target.value);
            console.log(response.data);
            setSearchResult(response.data);
          } catch (error) {
              console.error('Error searching for users:', error);
              setSearchResult([]); // Clear results on error
          }
      } else {
          setSearchResult([]); // Clear results when input is cleared
      }
  };
  

    // Function to handle the add friend action
    const handleAddFriend = async (userId) => {
      try {
          // await request.post('/addFriend', { userId }); // Replace with your actual API endpoint
          // Re-fetch the friends list to update the UI
          fetchFriends();
      } catch (error) {
          console.error('Error adding friend:', error);
          // Handle error
      }
  };

    // useEffect to call the fetch function when the component mounts
    useEffect(() => {
      console.log(uid)
      fetchFriends();
    }, []); // Empty dependency array means this effect runs once on mount


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
