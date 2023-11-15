import React, { useState, useEffect } from 'react'
import useStyles from '../style/addFriendTabStyle'
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Button,
  Stack,
  TextField,
  InputAdornment,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
} from '@mui/material'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import MuiAlert from '@mui/material/Alert';
import SearchIcon from '@mui/icons-material/Search'
import AddFriendBottomBar from './addFriendBottomBar'
import FriendList from './friendList'
import { request } from '../../../../helpers/axios_helper'
import AddIcon from "@mui/icons-material/Add";
import { stringAvatar } from '../../../../helpers/avatar_helper'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const filter = createFilterOptions()

function AddFriendTab() {
  const userData = JSON.parse(localStorage.getItem('auth_user'));
  const username = userData ? userData.username : 'User';
  const id = userData ? userData.id : '';
  const [value, setValue] = useState(0)
  const [selectedFriends, setSelectedFriends] = useState([username])
  const [friends, setFriends] = useState([])
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState('success')
  const [selectedFriendsId, setSelectedFriendsId] = useState([id])

  const [autoValue, setAutoValue] = useState(null)
  const [open, toggleOpen] = useState(false)

  

  const handleClose = () => {
    setDialogValue({
      id: '',
    })
    toggleOpen(false)
  }

  const [dialogValue, setDialogValue] = React.useState({
    id: '',
  })

  const uid = JSON.parse(localStorage.getItem('auth_user')).id
  const classes = useStyles()

  const fetchFriends = async () => {
    try {
      console.log('fetching friends...')
      const response = await request('GET', '/' + uid + '/friends')
      setFriends(response.data)
    } catch (error) {
      console.error('Error fetching friends:', error)
    }
  }

  const handleAddFriend = async event => {
    event.preventDefault()
    console.log('adding friend...')
    try {
      setAutoValue({ id: dialogValue.id })
      if (uid === dialogValue.id) {
        setSnackbarOpen(true)
        setSnackbarMessage('You cannot add yourself!')
        setSnackbarSeverity('error')
        return
      } else if (friends.find(friend => friend.id === dialogValue.id)) {
        setSnackbarOpen(true)
        setSnackbarMessage('This user is already your friend!')
        setSnackbarSeverity('error')
        return
      }
      const response = await request(
        'POST',
        '/'+uid+'/add/friend/' + dialogValue.id
      )

      fetchFriends()
      setSnackbarOpen(true)
      setSnackbarMessage('Friend added successfully!')
      setSnackbarSeverity('success')
      handleClose()

    } catch (error) {
      setSnackbarOpen(true)
      setSnackbarSeverity('error')
      console.log(error.status)
      if (error.response.status === 404) {
        setSnackbarMessage('Friend not found!')
      }
      else{
        setSnackbarMessage('Error adding friend!:', error.response.message)
      }
    }
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setSnackbarOpen(false);
};

  // useEffect to call the fetch function when the component mounts
  useEffect(() => {
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
          <Stack spacing={2} sx={{ width: 300, marginTop: '30px' }}>
            <Autocomplete
              value={autoValue}
              filterOptions={(options, params) => {
                const filtered = filter(options, params)

                if (params.inputValue !== '') {
                  filtered.push({
                    inputValue: params.inputValue,
                    username: `Add "${params.inputValue}"`,
                  })
                }

                return filtered
              }}
              onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                  // timeout to avoid instant validation of the dialog's form.
                  setTimeout(() => {
                    toggleOpen(true)
                    setDialogValue({
                      id: newValue,
                    })
                  })
                } else if (newValue && newValue.inputValue) {
                  toggleOpen(true)
                  setDialogValue({
                    id: newValue.inputValue,
                  })
                } else {
                  setAutoValue(newValue)
                }
              }}
              id='free-solo-dialog-demo'
              options={friends}
              getOptionLabel={option => {
                // e.g. value selected with enter, right from the input
                if (typeof option === 'string') {
                  return option
                }
                if (option && option.inputValue) {
                  return option.inputValue
                }
                return option && option.username ? option.username : ''
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
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
                    <span style={{ marginLeft: '10px' }}>
                      {option.username}
                    </span>
                  </Box>
                </li>
              )}
              sx={{ width: 300 }}
              freeSolo
              renderInput={params => (
                <TextField
                  {...params}
                  placeholder='Search for friend'
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment
                        position='start'
                        sx={{ p: '10px' }}
                        aria-label='Search'
                      >
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <Dialog open={open} onClose={handleClose}>
              <form onSubmit={handleAddFriend}>
                <DialogTitle variant='h4'>Add a new friend</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Did you miss any freind in our list? Please, add them!
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    value={dialogValue.id}
                    onChange={event =>
                      setDialogValue({
                        ...dialogValue,
                        id: event.target.value,
                      })
                    }
                    label='id'
                    type='text'
                    variant='standard'
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type='submit'>Add</Button>
                </DialogActions>
              </form>
            </Dialog>
          </Stack>
          <Box className={classes.selectFriend}>
            <Typography variant='h5'>Select Friends</Typography>
          </Box>
          <Box className={classes.friendList}>
            <FriendList
              friends={friends}
              selectedFriends={selectedFriends}
              setSelectedFriends={setSelectedFriends}
              setSelectedFriendsId={setSelectedFriendsId}
              selectedFriendsId={selectedFriendsId}
            />
          </Box>
        </Box>
        <Box className={classes.bottomBar}>
          <AddFriendBottomBar selectedFriends={selectedFriends} selectedFriendsId={selectedFriendsId}/>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant='filled'
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
}

export default AddFriendTab
