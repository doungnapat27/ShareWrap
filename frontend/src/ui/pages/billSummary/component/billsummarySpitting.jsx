import React, { useState, useEffect } from "react";
import useStyle from '../style/billsummarySpittingStyle'
import { Avatar, Box, Typography } from "@mui/material";
import { stringAvatar } from "../../../../helpers/avatar_helper";


function BillSummarySpitting() {
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const classes = useStyle();
  
  const calculateShare = (items, selectedFriends) => {
    const friendShares = selectedFriends.map(friend => ({
      name: friend,
      totalShare: 0,
      items: []
    }));
    
    items.forEach(item => {
      const sharePerFriend = item.cost / item.friends.length;
      friendShares.forEach(friendShare => {
        const isFriendIncluded = item.friends.includes(friendShare.name);
        if (isFriendIncluded) {
          friendShare.items.push({
            name: item.name,
            share: sharePerFriend
            
          });
          friendShare.totalShare += sharePerFriend;
        }
      });
    });
    localStorage.setItem('billsummary', JSON.stringify(friendShares));
    return friendShares;
  };
  
  useEffect(() => {
    const billDetails = JSON.parse(localStorage.getItem('billDetails'));
    const savedSelectedFriends = JSON.parse(localStorage.getItem('selectedFriends'));
    if (billDetails) {
      setItems(billDetails.items);
      setTotalCost(billDetails.totalCost);
    }
    if (savedSelectedFriends) {
      setSelectedFriends(savedSelectedFriends);
    }
  }, []);

  const friendShares = calculateShare(items, selectedFriends);
  

  return (
      <Box className={classes.cover}>
      {friendShares.map((friendShare, index) => (
        <Box className={classes.container} key={index}>
          <Box className={classes.billContainer}>
            <Box className={classes.rowOne}>
              <Box className={classes.friendContainer}>
                <Box key={index} className={classes.nameUser}>
                  <Avatar {...stringAvatar(friendShare.name)} />
                  <Typography variant="h5" style={{ marginLeft: "8px" }}>
                    {friendShare.name}
                  </Typography>
                </Box>
                <Typography variant="h5">
                  {friendShare.totalShare.toFixed(2)} ฿
                </Typography>
              </Box>
            </Box>
            {friendShare.items.map((item, itemIndex) => (
              <Box className={classes.rowTwo} key={itemIndex}>
                <Typography style={{ fontSize: "14px" }}>{item.name}</Typography>
                <Typography style={{ fontSize: "14px" }}>
                  {item.share.toFixed(2)} ฿
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default BillSummarySpitting;
