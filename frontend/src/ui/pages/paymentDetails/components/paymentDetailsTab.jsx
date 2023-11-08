import React, { useState } from "react";

import BankAccBtn from "../../../modules/components/bankAccBtn";
import PromptPayBtn from "../../../modules/components/promptpayBtn";

import {
  Tabs,
  Tab,
  Typography,
  Box,
  Button,
} from "@mui/material";

function PaymentDetailsTab() {
  const [value, setValue] = useState(0);
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
              label="Create bank account"
              sx={{
                flex: 1,
                width: "50%",
                color: '#000 !important',
              }}
            />
          </Tabs>
        </Box>
        <Box>
          <Box>
            <Box sx={{ padding: '30px 24px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <BankAccBtn />
                <PromptPayBtn />
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

export default PaymentDetailsTab;
