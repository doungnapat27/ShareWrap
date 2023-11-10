import React, { useState, useContext, useEffect } from "react";

import BankAccBtn from "../../../modules/components/bankAccBtn";
import PromptPayBtn from "../../../modules/components/promptpayBtn";

import { ShareContext } from "../../splitingBill/components/shareBankAndPromptPayContext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Tabs, Tab, Typography, Box, Button, TextField } from "@mui/material";

function PromptPayDetailsTab() {
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

  useEffect(() => {
    if(isBankAcc) {
      setIsBankAcc(false)
      setIsPromptPay(true)
    } else {
      setIsPromptPay(true)
    }
  })

  const isButtonDisabled = !(userPayment.promptpayName && userPayment.promptpayNumber);
  const buttonColor = isButtonDisabled ? '#838383' : '#FFB53B';
  const textColor = isButtonDisabled ? '#fff' : '#000';

  console.log(userPayment)
  console.log('isBank and isPrompt'  ,isBankAcc, isPromptPay)
  console.log('handleChangeSelectedPromptpay', userPayment.selectedPromptPay)
  console.log('PromptpayName', userPayment.promptpayName)

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
              label="Create PromptPay"
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
              <Box mt={3}>
                <Typography>PromptPay name</Typography>
                <Box mt={1}>
                  <TextField
                    fullWidth
                    placeholder="Ex) Srisamorn Sanuksud"
                    onChange={(e) => handlePromptpayChange('promptpayName', e.target.value)}
                    sx={{ backgroundColor: '#fff', borderRadius: '10px' }}
                    type='text'
                  />
                </Box>
                <Typography mt={2}>PromptPay ID</Typography>
                <Box mt={1}>
                  <TextField
                    fullWidth
                    placeholder="Ex) 0123456789"
                    onChange={(e) => handlePromptpayChange('promptpayNumber', e.target.value)}
                    sx={{ backgroundColor: '#fff', borderRadius: '10px' }}
                    type='number'
                  />
                </Box>
              </Box>
              <Button
                fullWidth
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                disabled={isButtonDisabled}
                href='/splitting-bill'
                sx={{
                  padding: "12px 20px",
                  marginTop: "40px",
                  backgroundColor: buttonColor,
                  color: textColor,
                  borderRadius: '10px'
                }}
                onClick={handleChangeSelectedPromptpay}
              >
                <Typography>Create PromptPay</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PromptPayDetailsTab;
