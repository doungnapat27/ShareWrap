import React, { useState, useEffect } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Drawer,
  Checkbox,
  ListItemIcon,
} from "@mui/material";
import useStyle from "../style/summeryBillAddFriendstyle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Uncheck from "@mui/icons-material/Circle";
import Check from "@mui/icons-material/CheckCircle";
import { stringAvatar } from "../../../../helpers/avatar_helper";

function SummaryBillAddFriend() {
  const [items, setItems] = useState([]);
  const classes = useStyle();
  const [currentItemId, setCurrentItemId] = useState(null);
  const [allFriends, setAllFriends] = useState([]);
  const [friendsToAdd, setFriendsToAdd] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const billDetails = JSON.parse(localStorage.getItem("billDetails")) || {
      items: [],
    };
    const fetchedFriends =
      JSON.parse(localStorage.getItem("selectedFriendsId")) || [];

    // Assigning friends from local storage if they exist
    const itemsWithFriends = billDetails.items.map((item) => ({
      ...item,
      friends: item.friends || [],
    }));

    setItems(itemsWithFriends);
    setAllFriends(fetchedFriends);
  }, []);

  const handleToggleSelectAll = () => {
    if (selectAll) {
      setFriendsToAdd([]);
    } else {
      setFriendsToAdd(allFriends.map((friend) => friend));
    }
    setSelectAll(!selectAll);
  };

  const handleOpenDrawer = (itemId) => {
    setCurrentItemId(itemId);
    const currentItem = items.find((item) => item.id === itemId);
    if (currentItem && currentItem.friends) {
      setFriendsToAdd(currentItem.friends);
      setSelectAll(currentItem.friends.length === allFriends.length);
    } else {
      setFriendsToAdd([]);
      setSelectAll(false);
    }
    setDrawerOpen(true);
  };

  const handleSelectFriend = (event, friendName) => {
    event.stopPropagation(); // Prevents the drawer from closing
    setFriendsToAdd((prev) => {
      const isFriendSelected = prev.includes(friendName);
      let newFriends;
      if (isFriendSelected) {
        newFriends = prev.filter((name) => name !== friendName);
      } else {
        newFriends = [...prev, friendName];
      }
      if (newFriends.length === allFriends.length) {
        setSelectAll(true);
      } else {
        setSelectAll(false);
      }

      return newFriends;
    });
  };

  const handleCloseDrawer = () => {
    const newItems = items.map((item) => {
      if (item.id === currentItemId) {
        return { ...item, friends: friendsToAdd };
      }
      return item;
    });
    setItems(newItems);
    setDrawerOpen(false);
    const billDetails = JSON.parse(localStorage.getItem("billDetails")) || {};
    billDetails.items = newItems;
    localStorage.setItem("billDetails", JSON.stringify(billDetails));
  };

  return (
    <Box className={classes.cover}>
      {items.map((item, index) => (
        <Box className={classes.container}>
          <Box key={item.id} className={classes.foodContainer}>
            <Box className={classes.foodInfo}>
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="h5">
                ฿ {item.cost.toLocaleString()}
              </Typography>
            </Box>
            <Box className={classes.friendInfo}>
              <AvatarGroup max={6}>
                {item.friends &&
                  item.friends.map((friend, index) => (
                    <Box key={index} className={classes.avatarBox}>
                      <Avatar {...stringAvatar(friend)} />
                      <Typography variant="h6" className={classes.avatarName}>
                        {friend.split("-")[0]}
                      </Typography>
                    </Box>
                  ))}
              </AvatarGroup>
              <Box
                className={classes.iconAddFriend}
                onClick={() => handleOpenDrawer(item.id)}
              >
                <PersonAddAlt1Icon />
              </Box>
              <Drawer
                anchor="bottom"
                open={drawerOpen}
                sx={{
                  "& .MuiDrawer-paper": {
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                  },
                }}
              >
                <Box
                  sx={{ width: "auto" }}
                  role="presentation"
                  onClick={(event) => event.stopPropagation()}
                  onKeyDown={handleCloseDrawer}
                >
                  <Box className={classes.cover}>
                    <Box className={classes.container}>
                      <Box className={classes.boxContainer}>
                        <Typography variant="h4" sx={{ p: 2 }}>
                          Add friends to this item
                        </Typography>
                        <List className={classes.listuser}>
                          <ListItem button onClick={handleToggleSelectAll}>
                            <ListItemAvatar>
                              <Avatar sx={{ backgroundColor: "#FFB53B" }}>
                                All
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={`Select All (${allFriends.length})`}
                            />
                            <Checkbox
                              edge="end"
                              checked={selectAll}
                              tabIndex={-1}
                              disableRipple
                              icon={<Uncheck />}
                              checkedIcon={<Check />}
                              sx={{
                                color: "#D9D9D9",
                                "&.Mui-checked": {
                                  color: "#FFB53B",
                                },
                              }}
                            />
                          </ListItem>
                          {allFriends.map((friend, index) => (
                            <ListItem
                              key={index}
                              button
                              onClick={(event) =>
                                handleSelectFriend(event, friend)
                              }
                            >
                              <ListItemAvatar>
                                <Avatar {...stringAvatar(friend)} />
                              </ListItemAvatar>
                              <ListItemText primary={friend.split("-")[0]} />
                              <Checkbox
                                edge="end"
                                checked={friendsToAdd.includes(friend)}
                                tabIndex={-1}
                                disableRipple
                                icon={<Uncheck />}
                                checkedIcon={<Check />}
                                sx={{
                                  color: "#D9D9D9",
                                  "&.Mui-checked": {
                                    color: "#FFB53B",
                                  },
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={classes.cover}>
                    <Box className={classes.container}>
                      <Box className={classes.boxContainer}>
                        <Button
                          fullWidth={true}
                          className={classes.positionButton}
                          onClick={handleCloseDrawer}
                        >
                          SELECT FRIENDS
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Drawer>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default SummaryBillAddFriend;
