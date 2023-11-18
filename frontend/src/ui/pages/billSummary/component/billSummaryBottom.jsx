import React, { useState, useEffect } from "react";
import useStyle from "../style/billSummaryBottomStyle";
import { Box, Button, Typography, Avatar, AvatarGroup } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { request } from "../../../../helpers/axios_helper";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

function BillSummaryBottom() {
  const classes = useStyle();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [isLoading, setIsLoading] = useState(false);

  const uid = JSON.parse(localStorage.getItem("auth_user")).id;
  const paymentType = JSON.parse(
    localStorage.getItem("billDetails")
  ).paymentType;

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleCreateBill = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("creating bill...");
    try {
      const userBillsRaws = JSON.parse(localStorage.getItem("billsummary"));
      const userBills = userBillsRaws.map((userBill) => {
        return {
          userId: userBill.name,
          shareTotal: userBill.totalShare,
          items: userBill.items,
        };
      });

      const response = await request("POST", "/bills", {
        name: JSON.parse(localStorage.getItem("billDetails")).title,
        userId: uid,
        userBills: userBills,
        paymentType: paymentType,
      });

      setSnackbarMessage("Bill created successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);


      localStorage.removeItem("billDetails");
      localStorage.removeItem("selectedFriendsId");
      window.location.href = "/home";
    } catch (error) {
      console.log(error.message);
      setSnackbarMessage("Error creating bill!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.boxContainer}>
          <Button
            fullWidth={true}
            className={classes.positionButton}
            endIcon={!isLoading && <ArrowForwardIcon />}
            onClick={handleCreateBill}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} style={{ color: "#FFB53B" }} />
            ) : (
              "Create Bill"
            )}
          </Button>
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

export default BillSummaryBottom;
