import React, { useState, useEffect } from "react";
import useStyle from "../style/billSummaryBottomStyle";
import {Box, Button, Typography, Avatar, AvatarGroup} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { stringAvatar } from '../../../../helpers/avatar_helper'



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