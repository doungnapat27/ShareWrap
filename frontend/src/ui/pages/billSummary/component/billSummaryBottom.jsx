import React, { useState, useEffect } from "react";
import useStyle from "../style/billSummaryBottomStyle";
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

function BillSummaryBottom() {
    const classes = useStyle();
    const handToCreateBill =() =>{
      localStorage.removeItem('billDetails');
      localStorage.removeItem('selectedFriends');
      setTimeout(() => {
          window.location.href = "/home";; 
      }, 1000);
  };

    return (
        <Box className={classes.cover}>
            <Box className={classes.container}>
                <Box className={classes.boxContainer}>
                    <Button
                    fullWidth={true}
                    className={classes.positionButton}
                    endIcon={<ArrowForwardIcon/>}
                    onClick={handToCreateBill}
                    >
                        Create Bill
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}   

export default BillSummaryBottom;