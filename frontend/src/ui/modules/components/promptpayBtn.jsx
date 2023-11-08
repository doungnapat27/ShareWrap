import React from "react";
import { Button } from "@mui/material";
import useStyles from "../style/propmtpayBtnStyle";

function PromptPayBtn({ isPromptPay, handleChangeIsProptPay }) {
  const classes = useStyles({ isPromptPay });
  return (
    <Button
      fullWidth
      variant="contained"
      className={classes.positionProptPayButton}
      onClick={handleChangeIsProptPay}
    >
      PromptPay
    </Button>
  );
}

export default PromptPayBtn;
