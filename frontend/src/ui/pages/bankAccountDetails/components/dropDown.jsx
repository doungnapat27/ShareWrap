import React, { useState, useContext } from "react";

import { Box, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { ShareContext } from "../../splitingBill/components/shareBankAndPromptPayContext";

function DropDown({ bankList }) {
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

  return (
    <Box
      mt={4}
      sx={{ minWidth: 120, borderRadius: '10px' }}
    >
      <FormControl
        fullWidth
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.70)",
          borderRadius: "10px",
        }}
      >
        <InputLabel>Select Bank Name</InputLabel>
        <Select
          value={userPayment.bankName || ""}
          label="Bank"
          onChange={(e) => handlePromptpayChange("bankName", e.target.value)}
        >
          {bankList.map((bank, index) => (
            <MenuItem key={index} value={bank.name}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={bank.logoUrl}
                  alt={`${bank.name} Logo`}
                  style={{ width: "20px", marginRight: "8px" }}
                />
                {bank.name}
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default DropDown;
