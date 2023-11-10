import React, { useState, useContext } from "react";

import { Tabs, Tab, Typography, Box, Button, TextField } from "@mui/material";
import { ShareContext } from "../../splitingBill/components/shareBankAndPromptPayContext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import BankAccBtn from "../../../modules/components/bankAccBtn";
import PromptPayBtn from "../../../modules/components/promptpayBtn";

function BankAccDetailsTab() {
  const [value, setValue] = useState(0);
  const {
    isBankAcc,
    isPromptPay,
    setIsBankAcc,
    setIsPromptPay,
    handleChangeBankAcc,
    handleChangeIsProptPay,
    userPayment,
    handlePromptpayChange,
    handleChangeSelectedPromptpay,
  } = useContext(ShareContext);

  const isButtonDisabled = !(userPayment.promptpayName && userPayment.promptpayNumber);
  const buttonColor = isButtonDisabled ? '#838383' : '#FFB53B';
  const textColor = isButtonDisabled ? '#fff' : '#000';
  

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "stretch",
            borderColor: "divider",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            backgroundColor: "#ffffff",
            "& .MuiTabs-flexContainer": {
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
              alignItems: "center",
            },
            width: "100%",
          }}
        >
          <Tabs
            value={value}
            sx={{ padding: "0 30px" }}
            TabIndicatorProps={{
              sx: {
                background: "#FFB53B",
              },
            }}
            centered={true}
          >
            <Tab
              label="Create Bank Account"
              sx={{
                flex: 1,
                width: "50%",
                color: "#000 !important",
              }}
            />
          </Tabs>
        </Box>
        <Box>
          <Box>
            <Box sx={{ padding: "30px 24px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <BankAccBtn
                  isBankAcc={isBankAcc}
                  handleChangeBankAcc={handleChangeBankAcc}
                />
                <Box ml={1} />
                <PromptPayBtn
                  isPromptPay={isPromptPay}
                  handleChangeIsProptPay={handleChangeIsProptPay}
                />
              </Box>
              <Box>

              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BankAccDetailsTab;
