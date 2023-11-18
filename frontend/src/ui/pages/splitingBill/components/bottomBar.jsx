import React, { useContext, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BankAccBtn from "../../../modules/components/bankAccBtn";
import PromptPayBtn from "../../../modules/components/promptpayBtn";
import SelectedBank from "./selectedBank";
import SelectedPromptpay from "./selectedPromptpay";
import { ShareContext } from "./shareBankAndPromptPayContext";
import useStyles from "../style/bottomBarStyle";
import { Box, Typography, Button } from "@mui/material";

function BottomBar({ itemList, onSaveBill }) {
  const {
    isBankAcc,
    isPromptPay,
    handleChangeBankAcc,
    handleChangeIsProptPay,
    userPayment,
    fetchPromptpay,
    fetchBankAccount,
  } = useContext(ShareContext);

  const classes = useStyles({ isBankAcc, isPromptPay });

  const paymentType = isBankAcc ? "B" : "P";

  const handleSaveToLocalStorage = () => {
    const userData = JSON.parse(localStorage.getItem("auth_user"));
    const id = userData ? userData.id : "";
    const billDetails = {
      title: itemList.title,
      items: itemList.items,
      totalCost: itemList.totalCost,
      paymentType: paymentType,
    };
    localStorage.setItem("billDetails", JSON.stringify(billDetails));
    localStorage.setItem("selectedFriendsId", JSON.stringify([id]));
    window.location.href = "/add-Friend";

  };

  useEffect(() => {
    fetchPromptpay();
    fetchBankAccount();

    const storedPayment = JSON.parse(localStorage.getItem("userPayment"));

    if (storedPayment && storedPayment.selectedPaymentMethod === "bank") {
      handleChangeBankAcc();
      console.log("Payment Method:", storedPayment.selectedPaymentMethod);
    } else if (
      storedPayment &&
      storedPayment.selectedPaymentMethod === "promptpay"
    ) {
      handleChangeIsProptPay();
      console.log("Payment Method:", storedPayment.selectedPaymentMethod);
    }
  }, []);

  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.boxContainer}>
          <Box className={classes.boxHeader}>
            <Typography variant="h4">Total</Typography>
            <Typography variant="h4">
              {itemList?.totalCost.toLocaleString()} ฿
            </Typography>
          </Box>
          <Box className={classes.positionTwoPaymentButton}>
            <BankAccBtn
              isBankAcc={isBankAcc}
              handleChangeBankAcc={handleChangeBankAcc}
            />
            <Box mr={1} />
            <PromptPayBtn
              isPromptPay={isPromptPay}
              handleChangeIsProptPay={handleChangeIsProptPay}
            />
          </Box>
          {isBankAcc && !isPromptPay && userPayment.selectedBankAccount ? (
            <SelectedBank />
          ) : isBankAcc ? (
            <Button
              className={classes.addBacnkAccButton}
              href="/bank-account-details"
            >
              <Typography color="#000" variant="h5">
                Add bank account details
              </Typography>
              <AddCircleIcon sx={{ color: "#545454" }} />
            </Button>
          ) : null}

          {!isBankAcc && isPromptPay && userPayment.selectedPromptPay ? (
            <SelectedPromptpay />
          ) : isPromptPay ? (
            <Button
              className={classes.addPromptPayButton}
              href="/promptpay-details"
            >
              <Typography color="#000" variant="h5">
                Add PromptPay details
              </Typography>
              <AddCircleIcon sx={{ color: "#545454" }} />
            </Button>
          ) : null}
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
