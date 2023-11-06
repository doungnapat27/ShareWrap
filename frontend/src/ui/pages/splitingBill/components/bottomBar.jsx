import React, { useState, useEffect } from "react";

import CircleIcon from "@mui/icons-material/Circle";
import CreateIcon from "@mui/icons-material/Create";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import useStyles from '../style/bottomBarStyle'

import { Box, Typography, Button } from "@mui/material";

function BottomBar({ itemList }) {
  const [isBankAcc, setIsBankAcc] = useState(true);
  const [isPromptPay, setIsPromptPay] = useState(false);

  const handleChangeIsProptPay = () => {
    setIsPromptPay(true);
    setIsBankAcc(false);
  };

  const handleChangeBackAss = () => {
    setIsBankAcc(true);
    setIsPromptPay(false);
  };

  const classes = useStyles()
  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.boxContainer}>
          <Box className={classes.boxHeader}>
            <Typography variant="h4">Total</Typography>
            <Typography variant="h4">{itemList?.totalCost} ฿</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              marginTop: '20px',
              justifyContent: 'space-between'
            }}
          >
            <Button
              onClick={handleChangeBackAss}
              sx={{
                backgroundColor: '#FFB53B',
                minWidth: '165px',
                color: 'black'
              }}
            >
              Banck account
            </Button>
            <Button
            onClick={handleChangeIsProptPay}
              sx={{
                backgroundColor: '#FFB53B',
                minWidth: '150px',
                color: 'black',
              }}
            >
              PromtPay
            </Button>
          </Box>
          {isBankAcc ? (
            <Box className={classes.boxAccount}>
                <Box sx={{ display: "flex" }}>
                  <CircleIcon sx={{ fontSize: "40px" }} />
                  <Box ml={1}>
                    <Typography variant="h5">Account Name</Typography>
                    <Typography variant="h6">Bank Name, Account Number</Typography>
                  </Box>
                </Box>
              <CreateIcon />
            </Box>
          ): (
            <Box className={classes.boxAccount}>
                <Box sx={{ display: "flex" }}>
                  <CircleIcon sx={{ fontSize: "40px" }} />
                  <Box ml={1}>
                    <Typography variant="h5">Account Name</Typography>
                    <Typography variant="h6">Phone number</Typography>
                  </Box>
                </Box>
              <CreateIcon />
            </Box>
          ) }
          <Button
            fullWidth
            className={classes.positionBotton}
            endIcon={<ArrowForwardIcon />}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default BottomBar;
