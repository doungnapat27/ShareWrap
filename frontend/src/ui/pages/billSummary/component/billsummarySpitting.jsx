import React, { useState, useEffect } from "react";
import useStyle from '../style/billsummarySpittingStyle'
import { Avatar, Box, Typography } from "@mui/material";

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

function BillSummarySpitting() {
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const classes = useStyle();
  
  // const calculateShare = (items, selectedFriends) => {
  //   const friendShares = selectedFriends.map(friend => ({
  //     name: friend,
  //     totalShare: 0,
  //     items: []
  //   }));
    
  //   items.forEach(item => {
  //     const sharePerFriend = item.cost / selectedFriends.length;
  //     friendShares.forEach(friendShare => {
  //       const isFriendSelectedForItem = item.friends.some(f => f.name === friendShare.name);
  //       if (isFriendSelectedForItem) {
  //         friendShare.items.push({
  //           name: item.name,
  //           share: sharePerFriend
  //         });
  //         friendShare.totalShare += sharePerFriend;
  //       }
  //     });
  //   });
    
  //   return friendShares;
  // };

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
        //  console.log(`${friendShare.name} is included for item ${item.name}, share: ${sharePerFriend}`);
        }
      });
    });
  
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
  // console.log(friendShares);

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