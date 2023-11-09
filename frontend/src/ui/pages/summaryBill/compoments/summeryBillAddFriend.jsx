import React, { useState, useEffect } from "react";
import { Avatar, AvatarGroup, Box, Typography, Dialog, DialogTitle,List,ListItem,ListItemAvatar,ListItemText } from "@mui/material";
import useStyle from "../style/summeryBillAddFriendstyle"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

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

function SummaryBillAddFriend() {
    const [items, setItems] = useState([]);
    const classes = useStyle();
    const [currentItemId, setCurrentItemId] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [allFriends, setAllFriends] = useState([]);
    const [friendsToAdd, setFriendsToAdd] = useState([]);

    useEffect(() => {
      const billDetails = JSON.parse(localStorage.getItem('billDetails')) || { items: [] };
      const fetchedFriends = JSON.parse(localStorage.getItem('selectedFriends')) || [];
      
      // Assigning friends from local storage if they exist
      const itemsWithFriends = billDetails.items.map(item => ({
          ...item,
          friends: item.friends || [],
      }));
  
      setItems(itemsWithFriends);
      setAllFriends(fetchedFriends);
  }, []);
  
    const handleSelectFriend = (friendName) => {
      const newItems = items.map(item => {
          if (item.id === currentItemId) {
              const itemFriends = item.friends || [];
              const isSelected = itemFriends.includes(friendName);
              const newFriends = isSelected
                  ? itemFriends.filter(name => name !== friendName)
                  : [...itemFriends, friendName];
              return { ...item, friends: newFriends };
          }
          return item;
      });
  
      setItems(newItems); // Update state
  
      // Update local storage
      const billDetails = JSON.parse(localStorage.getItem('billDetails')) || {};
      billDetails.items = newItems; // Update the items with new friends list
      localStorage.setItem('billDetails', JSON.stringify(billDetails)); // Save back to local storage
  };

    const handleOpenDialog = (itemId) => {
        setCurrentItemId(itemId);
        setDialogOpen(true);
    };
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };
    const getFirstName = (fullName) => {
        return fullName.split(' ')[0]; 
      }

    return (
        <Box className={classes.cover}>
            {items.map((item, index) => (
                <Box className={classes.container}>
                    <Box key={item.id} className={classes.foodContainer}>
                        <Box className={classes.foodInfo}>
                            <Typography variant="h5">
                                {item.name}
                            </Typography>
                            <Typography variant="h5">
                                ฿ {item.cost.toLocaleString()}
                            </Typography>
                        </Box>
                        <Box className={classes.friendInfo}>
                        <AvatarGroup max={6}>
                            {item.friends && item.friends.map((friend, index) => (
                                <Box key={index} className={classes.avatarBox}>
                                    <Avatar {...stringAvatar(friend)} />
                                    <Typography variant="h6" className={classes.avatarName}>
                                        {getFirstName(friend)}
                                    </Typography>
                                </Box>
                            ))}
                        </AvatarGroup>
                            <Box className={classes.iconAddFriend} onClick={() => handleOpenDialog(item.id)}>
                                <PersonAddAlt1Icon />
                            </Box>
                            <Dialog onClose={handleCloseDialog} open={dialogOpen}>
                            <DialogTitle variant="h4">Add friends to this item</DialogTitle>
                            <List>
                                {allFriends.map((friend, index) => (
                                    <ListItem 
                                        key={index} 
                                        button 
                                        onClick={() => handleSelectFriend(friend)}
                                    >
                                        <ListItemAvatar>
                                            <Avatar {...stringAvatar(friend)} />
                                        </ListItemAvatar>
                                        <ListItemText primary={friend} />
                                    </ListItem>
                                ))}
                            </List>
                        </Dialog>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default SummaryBillAddFriend;
