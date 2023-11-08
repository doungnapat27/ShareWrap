import React from "react";
import { Button } from "@mui/material";
import useStyles from "../style/bankAccBtnStyle";

function BankAccBtn({ isBankAcc, handleChangeBackAss }) {
  const classes = useStyles({ isBankAcc });
  return (
    <Button
      fullWidth
      variant="contained"
      className={classes.positionBankAccButton}
      onClick={handleChangeBackAss}
    >
      Bank account
    </Button>
  );
}

export default BankAccBtn;
