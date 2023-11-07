import React, { useState, useEffect } from "react";

import CircleIcon from "@mui/icons-material/Circle";
import CreateIcon from "@mui/icons-material/Create";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import useStyles from "../style/bottomBarStyle";

import { Box, Typography, Button } from "@mui/material";

function BottomBar({ itemList }) {
  const [isBankAcc, setIsBankAcc] = useState(true);
  const [isPromptPay, setIsPromptPay] = useState(false);

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
            // <Box className={classes.boxAccount}>
            //     <Box sx={{ display: "flex" }}>
            //       <CircleIcon sx={{ fontSize: "40px" }} />
            //       <Box ml={1}>
            //         <Typography variant="h5">Account Name</Typography>
            //         <Typography variant="h6">Bank Name, Account Number</Typography>
            //       </Box>
            //     </Box>
            //   <CreateIcon />
            // </Box>
            // code above will later use as component
            <Button className={classes.addPromptPayButton}>
              <Typography color="#000" variant="h5">
                Add PromptPay details
              </Typography>
              <AddCircleIcon sx={{ color: "#545454" }} />
            </Button>
            // <Box className={classes.boxAccount}>
            //   <Box sx={{ display: "flex" }}>
            //     <CircleIcon sx={{ fontSize: "40px" }} />
            //     <Box ml={1}>
            //       <Typography variant="h5">Account Name</Typography>
            //       <Typography variant="h6">Phone number</Typography>
            //     </Box>
            //   </Box>
            //   <CreateIcon />
            // </Box>
            // code above will later use as component
          )}
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
