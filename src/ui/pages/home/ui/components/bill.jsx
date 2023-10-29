import React from "react";

import { Box, Typography, Paper, Button, Card, Grid } from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Bill() {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "10px",
        marginBottom: "16px",
        backgroundColor: 'rgba(255, 181, 59, 0.50)'
        }}
      >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        <Box>
          <Typography sx={{ fontFamily: 'Inter' }}>Bill name</Typography>
          <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
            ฿ 200
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              alignItems: "center",
              textAlign: "center",
              marginRight: "16px",
            }}
          >
            <Typography>Created by</Typography>
            <AccountCircle
              sx={{
                fontSize: "36px",
              }}
            />
          </Box>
          <Box sx={{ alignSelf: "center" }}>
            <Button
              variant="contained"
              sx={{
                height: "48px",
                backgroundColor: '#FFB53B',
                "&:hover": {
                  backgroundColor: "#FFB53B",
                },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: "40px", color: '#000' }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default Bill;
