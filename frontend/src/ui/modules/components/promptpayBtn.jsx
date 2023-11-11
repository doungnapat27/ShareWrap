import React from "react";
import { Button } from "@mui/material";
import useStyles from "../style/propmtpayBtnStyle";

function PromptPayBtn({ isPromptPay, handleChangeIsProptPay,
hrefValue }) {
  const classes = useStyles({ isPromptPay });
  return (
    <Button
      fullWidth
      variant="contained"
      className={classes.positionProptPayButton}
      onClick={handleChangeIsProptPay}
      href={hrefValue ? '/promptpay-details' : undefined}
    >
      PromptPay
    </Button>
  );
}

export default PromptPayBtn;
