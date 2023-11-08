import React, { useState, useEffect } from "react";


import CircleIcon from "@mui/icons-material/Circle";
import CreateIcon from "@mui/icons-material/Create";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import useStyles from "../style/bottomBarStyle";

import { Box, Typography, Button } from "@mui/material";

function BottomBar({ itemList, onSaveBill }) {
  const [isBankAcc, setIsBankAcc] = useState(true);
  const [isPromptPay, setIsPromptPay] = useState(false);

  const handleSaveToLocalStorage = () => {
    const billDetails = {
      title: itemList.title,
      items: itemList.items,
      totalCost: itemList.totalCost,
    };

    localStorage.setItem('billDetails', JSON.stringify(billDetails));

    setTimeout(() => {
      window.location.href = "/add-Friend";; 
    }, 1000);
    // or
    alert('Bill details saved successfully!');
  };

  const handleChangeIsProptPay = (e) => {
    e.preventDefault();
    setIsPromptPay(true);
    setIsBankAcc(false);
  };

  const handleChangeBackAss = (e) => {
    e.preventDefault();
    setIsBankAcc(true);
    setIsPromptPay(false);
  };

  const classes = useStyles({ isBankAcc, isPromptPay });
  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.boxContainer}>
          <Box className={classes.boxHeader}>
            <Typography variant="h4">Total</Typography>
            <Typography variant="h4">{itemList?.totalCost} ฿</Typography>
          </Box>
          <Box className={classes.positionTwoPaymentButton}>
            <Button
              variant="contained"
              onClick={handleChangeBackAss}
              className={classes.positionBankAccButton}
            >
              Banck account
            </Button>
            <Button
              variant="contained"
              onClick={handleChangeIsProptPay}
              className={classes.positionProptPayButton}
            >
              PromtPay
            </Button>
          </Box>
          {isBankAcc ? (
            <Button className={classes.addBacnkAccButton}>
              <Typography color="#000" variant="h5">
                Add bank account details
              </Typography>
              <AddCircleIcon sx={{ color: "#545454" }} />
            </Button>
          ) : (
            <Button className={classes.addPromptPayButton}>
              <Typography color="#000" variant="h5">
                Add PromptPay details
              </Typography>
              <AddCircleIcon sx={{ color: "#545454" }} />
            </Button>
          )}
          <Button
            fullWidth
            className={classes.positionBotton}
            endIcon={<ArrowForwardIcon />}
            onClick={handleSaveToLocalStorage}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default BottomBar;
