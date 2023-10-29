import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"


import {
  Box,
  Typography,
  Button,
  Card,
} from "@mui/material";

function HistoryBill() {
  return (
    <Card
      sx={{
        width: "160px",
        height: "92px",
        padding: '10px 12px',
        backgroundColor: 'rgba(255, 255, 255, 0.70)',
        position: 'relative',
        marginBottom: '12px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: 'auto',
          position: 'relative',
          }}
        >
        <Typography sx={{ fontWeight: 'bold' }}>Bill name</Typography>
        <Button
          sx={{
            backgroundColor: '#fff',
            minWidth: '0px',
            position: 'absolute',
            right: 0,
            boxShadow: 2,
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>
      <Box>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>฿ 200</Typography>
      </Box>
      <Typography sx={{ fontSize: '8px' }}>
        Created on 10 Feb 2022
      </Typography>
    </Card>
  )
}

export default HistoryBill;
