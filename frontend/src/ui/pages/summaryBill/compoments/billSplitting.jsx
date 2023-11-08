import React, { useState, useEffect } from "react";
import useStyle from '../style/billSplittingStyle'
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

function EqualSpitting() {
    const [items, setItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [selectedFriends, setSelectedFriends] = useState([]);
    const classes = useStyle();

    useEffect(() => {
      const billDetails = JSON.parse(localStorage.getItem('billDetails'));
      const savedSelectedFriends = localStorage.getItem('selectedFriends');
      if (billDetails) {
          setItems(billDetails.items);
          setTotalCost(billDetails.totalCost);
      }
      if (savedSelectedFriends) {
        setSelectedFriends(JSON.parse(savedSelectedFriends));
      }
    }, []);

    const equalAmount = selectedFriends.length > 0 ? (totalCost / selectedFriends.length).toFixed(2) : 0;
    return(
        <Box className={classes.cover}>
          {selectedFriends.map((friend, index) => (
            <Box className={classes.container}>
                <Box className={classes.billContainer}>
                    <Box className={classes.rowOne}>
                        <Box className={classes.friendContainer}>
                            <Box key={index} className={classes.nameUser}>
                              <Avatar {...stringAvatar(friend)}/>
                              <Typography variant="h5" style={{marginLeft:"8px"}}>{(friend)}</Typography>  
                            </Box>
                            <Typography variant="h5">{equalAmount} ฿</Typography>
                        </Box>
                    </Box>
                    {items.map((item, index) => (
                      <Box className={classes.rowTwo}>
                          <Typography style={{fontSize: "14px"}}>{item.name}</Typography>
                          <Typography style={{fontSize: "14px"}}>{(item.cost / selectedFriends.length).toFixed(2)} ฿</Typography>
                      </Box>
                    ))}
                </Box>
            </Box>
          ))}
        </Box>
    )
}

export default EqualSpitting;


