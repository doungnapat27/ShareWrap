import React, { useState, useEffect } from "react";
import useStyle from "../style/summaryBillBottomStyle";
import {Box, Button, Typography, Avatar, AvatarGroup} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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


function SummaryBillBottom() {
    const [selectedFriends, setSelectedFriends] = useState([]);
    const classes = useStyle();

    useEffect(() => {
      const savedSelectedFriends = localStorage.getItem('selectedFriends');
      if (savedSelectedFriends) {
          setSelectedFriends(JSON.parse(savedSelectedFriends));
      }
    }, []);

    // const handleSaveToLocalStorage = () => {
    //   const itemList = JSON.parse(localStorage.getItem('itemList'));
    //   const updatedItemList = {
    //     items: itemList.items.map(item => ({
    //       ...item,
    //       people: ["Person A", "Person B"] // Add an array of people associated with the item
    //     })),
    //     totalCost: itemList.totalCost
    //   };
      
    //   localStorage.setItem('updatedItemlist', JSON.stringify(updatedItemList));

    //   setTimeout(() => {
    //     // window.location.href = "/add-Friend";; 
    //   }, 1000);
    //   // or
    //   alert('Bill details saved successfully!');
    // }

  
    const getFirstName = (fullName) => {
      return fullName.split(' ')[0]; 
    }
    return (
        <Box className={classes.cover}>
            <Box className={classes.container}>
                <Box className={classes.boxContainer}>
                    <Button
                    fullWidth={true}
                    className={classes.positionButton}
                    endIcon={<ArrowForwardIcon/>}
                    // onClick={this.handleSaveToLocalStorage}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default SummaryBillBottom;
