import React, { useState } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BankAccBtn from "../../../modules/components/bankAccBtn"
import PromptPayBtn from "../../../modules/components/promptpayBtn";

import useStyles from "../style/bottomBarStyle";

import { Box, Typography, Button } from "@mui/material";

function BottomBar({ itemList }) {
  const [isBankAcc, setIsBankAcc] = useState(true);
  const [isPromptPay, setIsPromptPay] = useState(false);

  const classes = useStyles({ isBankAcc, isPromptPay });

  const handleChangeIsProptPay = (e) => {
    setIsPromptPay(true);
    setIsBankAcc(false);
  };

  const handleChangeBackAss = (e) => {
    setIsBankAcc(true);
    setIsPromptPay(false);
  };

  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.boxContainer}>
          <Box className={classes.boxHeader}>
            <Typography variant="h4">Total</Typography>
            <Typography variant="h4">{itemList?.totalCost} ฿</Typography>
          </Box>
          <Box className={classes.positionTwoPaymentButton}>
            <BankAccBtn
              isBankAcc={isBankAcc}
              handleChangeBackAss={handleChangeBackAss}
            />
            <Box mr={1} />
            <PromptPayBtn
              isPromptPay={isPromptPay} handleChangeIsProptPay={handleChangeIsProptPay}
            />
          </Box>
          {isBankAcc ? (
            <Button
              className={classes.addBacnkAccButton}
              href="/payment-details"
            >
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
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default BottomBar;
