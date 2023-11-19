import React, { useState, useContext, useEffect } from "react";
import { ShareContext } from "../../splitingBill/components/shareBankAndPromptPayContext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { Tabs, Tab, Typography, Box, Button, TextField } from "@mui/material";

function EditPromptpayTab() {
  const [value, setValue] = useState(0);
  const {
    isBankAcc,
    isPromptPay,
    setIsBankAcc,
    setIsPromptPay,
    userPayment,
    handlePromptpayChange,
    handleUpdatePromptpay,
    snackbarOpen,
    snackbarMessage,
    snackbarSeverity,
    setSnackbarOpen,
  } = useContext(ShareContext);

  useEffect(() => {
    if (isBankAcc) {
      setIsBankAcc(false);
      setIsPromptPay(true);
    } else {
      setIsPromptPay(true);
    }
  });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const isButtonDisabled = !(
    userPayment.promptpayName && userPayment.promptpayNumber
  );
  const buttonColor = isButtonDisabled ? "#838383" : "#FFB53B";
  const textColor = isButtonDisabled ? "#fff" : "#000";

  console.log(userPayment);
  console.log("isBank and isPrompt", isBankAcc, isPromptPay);
  console.log("PromptpayName", userPayment.promptpayName);
  console.log("PromptPayId", userPayment.promptpayId);

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
              label="Edit PromptPay"
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  fullWidth
                  variant='contained'
                  href="/edit-bank-account"
                  sx={{
                    backgroundColor: isBankAcc ? "#FFB53B" : "rgba(131, 131, 131, 0.50)",
                    minWidth: "165px",
                    color: "black",
                    "&:hover": {
                      backgroundColor: isBankAcc ? "#FFB53B" : "rgba(131, 131, 131, 0.50)",
                    },
                  }}
                 >
                  Bank account
                </Button>
                <Box ml={1} />
                <Button
                  fullWidth
                  variant='contained'
                  // onClick={handleChangeIsProptPay}
                  sx={{
                    backgroundColor: isPromptPay ? "#FFB53B" : "rgba(131, 131, 131, 0.50)",
                    minWidth: "165px",
                    color: "black",
                    "&:hover": {
                      backgroundColor: isPromptPay ? "#FFB53B" : "rgba(131, 131, 131, 0.50)",
                    },
                  }}
                >
                  Promptpay
                </Button>
              </Box>
              <Box mt={3}>
                <Typography>PromptPay name</Typography>
                <Box mt={1}>
                  <TextField
                    fullWidth
                    placeholder="Ex) Srisamorn Sanuksud"
                    onChange={(e) =>
                      handlePromptpayChange("promptpayName", e.target.value)
                    }
                    sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
                    type="text"
                    value={userPayment.promptpayName}
                  />
                </Box>
                <Typography mt={2}>PromptPay ID</Typography>
                <Box mt={1}>
                  <TextField
                    fullWidth
                    placeholder="Ex) 0123456789"
                    onChange={(e) =>
                      handlePromptpayChange("promptpayNumber", e.target.value)
                    }
                    sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
                    type="number"
                    value={userPayment.promptpayNumber}
                  />
                </Box>
              </Box>
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
                onClick={handleUpdatePromptpay}
              >
                <Typography>Confirm edit</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
}

export default EditPromptpayTab;
