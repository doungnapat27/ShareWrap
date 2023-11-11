import React, { useState, useContext } from "react";

import {
  Tabs,
  Tab,
  Typography,
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

import { ShareContext } from "../../splitingBill/components/shareBankAndPromptPayContext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import BankAccBtn from "../../../modules/components/bankAccBtn";
import PromptPayBtn from "../../../modules/components/promptpayBtn";
import logoKrungthai from "../../../assets/krungthai.png";
import logoKasikorn from "../../../assets/kasikorn.png";
import DropDown from "../../bankAccountDetails/components/dropDown";

function EditBankTab() {
  const [value, setValue] = useState(0);

  const {
    isBankAcc,
    isPromptPay,
    handleChangeBankAcc,
    handleChangeIsProptPay,
    userPayment,
    handlePromptpayChange,
    handleChangeSelectedBankAccount
  } = useContext(ShareContext);

  const bankList = [
    { name: "ธนาคารกรุงไทย", logoUrl: logoKrungthai },
    { name: "ธนาคารกสิกรไทย", logoUrl: logoKasikorn },
  ];

  const isButtonDisabled = !(
    userPayment.bankAccount && userPayment.bankAccNumber && userPayment.bankName
  );
  const buttonColor = isButtonDisabled ? "#838383" : "#FFB53B";
  const textColor = isButtonDisabled ? "#fff" : "#000";

  console.log("userPayment in bank page: ", userPayment);

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
              label="Edit Bank Account"
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
              <Box>
                <DropDown bankList={bankList} />
                <Box>
                  <Typography>Bank account name</Typography>
                  <TextField
                    fullWidth
                    placeholder="Ex) Srisamorn Sanuksud"
                    onChange={(e) =>
                      handlePromptpayChange("bankAccount", e.target.value)
                    }
                    value={userPayment.bankAccount}
                    sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
                    type="text"
                  />
                  <Typography>Bank account number</Typography>
                  <TextField
                    fullWidth
                    placeholder="Ex) 01234567890"
                    onChange={(e) =>
                      handlePromptpayChange("bankAccNumber", e.target.value)
                    }
                    value={userPayment.bankAccNumber}
                    sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
                    type="number"
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    disabled={isButtonDisabled}
                    href="/splitting-bill"
                    sx={{
                      padding: "12px 20px",
                      marginTop: "40px",
                      backgroundColor: buttonColor,
                      color: textColor,
                      borderRadius: "10px",
                    }}
                    onClick={handleChangeSelectedBankAccount}
                  >
                    <Typography>Confirm edit</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EditBankTab;
