import React from "react";
import { Button, Typography, Paper, Box } from "@mui/material";

function BillStatus() {
  return (
    <Paper
      sx={{
        padding: "12px 32px",
        backgroundColor: "#FFB53B",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4">Eiei</Typography>
        <Box sx={{ padding: "6px" }}>
          <Typography
            variant="h5"
            sx={{
              backgroundColor: "white",
              padding: "5px 17px",
              borderRadius: "5px",
            }}
          >
            Pending
          </Typography>
        </Box>
      </Box>
      <Typography variant="h3">฿ 300</Typography>
    </Paper>
  );
}

export default BillStatus;
