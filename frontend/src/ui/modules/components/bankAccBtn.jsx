import React from "react";
import { Button } from "@mui/material";
import useStyles from "../style/bankAccBtnStyle";

function BankAccBtn({ isBankAcc, handleChangeBankAcc }) {
  const classes = useStyles({ isBankAcc });
  return (
    <Button
      fullWidth
      variant="contained"
      className={classes.positionBankAccButton}
      onClick={handleChangeBankAcc}
    >
      Bank account
    </Button>
  );
}

export default BankAccBtn;
