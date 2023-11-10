import React from "react";
import { Button } from "@mui/material";
import useStyles from "../style/bankAccBtnStyle";

function BankAccBtn({ isBankAcc, handleChangeBankAcc, navigateToPromptpay }) {
  const classes = useStyles({ isBankAcc });
  const hrefValue = navigateToPromptpay ? '/promptpay-details' : '/bank-account-details'
  return (
    <Button
      fullWidth
      variant="contained"
      className={classes.positionBankAccButton}
      onClick={handleChangeBankAcc}
      href={hrefValue}
    >
      Bank account
    </Button>
  );
}

export default BankAccBtn;
