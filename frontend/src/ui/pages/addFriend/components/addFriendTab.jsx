
import React, { useState, useEffect } from 'react'
import useStyles from '../style/addFriendTabStyle'
import {
  Box,
  Tabs,
  Tab,
  Paper,
  IconButton,
  InputBase,
  Typography,
  Button,
  Autocomplete,
  Stack,
  TextField,
  InputAdornment,
  Avatar,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AddFriendBottomBar from './addFriendBottomBar'
import FriendList from './friendList'
import { request } from '../../../../helpers/axios_helper'
import AddIcon from "@mui/icons-material/Add";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

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

function stringAvatar(username) {
  return {
    sx: {
      bgcolor: stringToColor(username),
    },
    children: `${username.split('')[0][0]}`,
  };
}

function AddFriendTab() {
  const [value, setValue] = useState(0)
  const [selectedFriends, setSelectedFriends] = useState([])
  const [friends, setFriends] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState(null)
  const uid = JSON.parse(localStorage.getItem('auth_user')).id
  const classes = useStyles()

  const [searchOptionList, setSearchOptionList] = useState([]);

  const fetchFriends = async () => {
    try {
      console.log('fetching friends...')
      const response = await request('GET', '/' + uid + '/friends')
      setFriends(response.data) // Assume the response has the friends array
      const friendsData = response.data;
      
      if(searchResult !== null){
        const combined =[...friendsData, searchResult];
        const combinedData = combined.map((friend) => {
          const isFriend = searchResult && friend.id !== searchResult.id;
          return { ...friend, areFriends: isFriend };
        });

        setSearchOptionList(combinedData);

      }
      else{
        const optionData = friendsData.map((friend) => {
          return { ...friend, areFriends: true };
        });

        setSearchOptionList(optionData);
      }

    } catch (error) {
      console.error('Error fetching friends:', error)
    }
  }

  // Function to handle the search input change
  const handleSearchInputChange = async event => {
    setSearchInput(event.target.value)
    try {
      console.log('finding user...')
      const response = await request(
        'GET',
        '/search/users/' + event.target.value
      )
      console.log(response.data)
      setSearchResult(response.data)
      
      fetchFriends()

    } catch (error) {
      console.error(error)
    }
  }

  // Function to handle the add friend action
  const handleAddFriend = async userId => {
    // try {
    //   // await request.post('/addFriend', { userId }); // Replace with your actual API endpoint
    //   // Re-fetch the friends list to update the UI
    //   fetchFriends()
    // } catch (error) {
    //   console.error('Error adding friend:', error)
    // }
  }

  // useEffect to call the fetch function when the component mounts
  useEffect(() => {
    console.log(uid)
    fetchFriends()
  }, []) 

  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.tabContainer}>
          <Tabs
            value={value}
            TabIndicatorProps={{
              sx: { background: '#FFB53B' },
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

      </Box>
      <Box className={classes.cover}>
        <Box className={classes.searchQuery}>
          <Stack spacing={2} sx={{ width: 300, marginTop: '30px'}}>
            <Autocomplete sx={{backgroundColor: '#fff', borderRadius: '5px'}}
              disableClearable
              options={searchOptionList}
              autoHighlight
              getOptionLabel={(option) => option.id}
              renderOption={(props, option) => (
                <li {...props}>
                  <Box
                      sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar {...stringAvatar(option.username)} />
                    <span style={{ marginLeft: '10px'}}>{option.id}</span>
                    {!option.areFriends && (
                      <Button
                        className={classes.addButton}
                        onClick={() => handleAddFriend(option.id)}
                      >
                        Add
                      </Button>
    
                    )}
                  </Box>
                </li>
              )}
              renderInput={ (params) => (
                  <TextField 
                  {...params}
                  label='Search friend'
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position='start' sx={{ p: '10px' }} aria-label='Search'>
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    type: 'search',
                  }}
                />
              )}
              onInputChange={handleSearchInputChange}
            />
          </Stack>
          <Box className={classes.selectFriend}>
            <Typography variant='h5'>Select Friends</Typography>
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

export default AddFriendTab
