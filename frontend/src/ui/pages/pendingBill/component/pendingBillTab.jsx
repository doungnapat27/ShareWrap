import React, { useState } from "react";
import useStyles from "../style/pendingBillTabStyle";
import {
  Box,
  Tab,
  Tabs,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import PaidBill from "./pendingBillTabPaid";
import NotPaidBill from "./pendingBillTabNotPaid";
import { request } from "../../../../helpers/axios_helper";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function PendingBill(props) {
  const [value, setValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const classes = useStyles();
  const bill = props.bill;
  const userBills = props.bill.userBills;
  const paidBills = userBills.filter((userBill) => userBill.paid);
  const unpaidBills = userBills.filter((userBill) => !userBill.paid);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDeleteBill = async (event) => {
    setIsDeleting(true);
    try {
      //snack bar success later
      await request("DELETE", "/bills/" + bill.id);
      setSnackbarMessage("Bill successfully canceled!");
      setSnackbarSeverity("success");
      window.location.href = "/home";
    } catch (error) {
      //snackbar error later
      setSnackbarMessage("Error canceling bill.");
      setSnackbarSeverity("error");
      console.log(error);
    }
    setSnackbarOpen(true);
    setIsDeleting(false);
    handleCloseDialog();
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const allUserBillsPaid = () => {
    if (bill && userBills) {
      return userBills.every((userBill) => userBill.paid);
    }
    return false;
  };

  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.tabContainer}>
          <Tabs
            value={value}
            TabIndicatorProps={{
              sx: { background: "#FFB53B" },
            }}
            centered={true}
          >
            <Tab
              className={classes.centerTab}
              label="Pending Bill"
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
        <Box className={classes.cover}>
          <Box className={classes.menuContainer}>
            <Paper className={classes.topicContainer}>
              <Typography variant="h5">
                {bill.name}
                <Typography variant="h4">
                  {parseFloat(bill.total).toFixed(2)}
                </Typography>
              </Typography>
              <Box
                className={
                  allUserBillsPaid()
                    ? classes.statusContainer
                    : classes.statusContainerNotRecieved
                }
              >
                <Typography variant="h5">
                  {allUserBillsPaid() ? "Received All" : "Not Recieved"}
                </Typography>
              </Box>
            </Paper>
            <Box className={classes.cover}>
              <Box className={classes.billContainer}>
                <Box className={classes.paidContainer}>
                  <Typography variant="h4">Friends who already paid</Typography>
                  <Box className={classes.statusBill}>
                    <Box className={classes.alreadyPaidContainer}>
                      {paidBills.length === 0 && (
                        <Typography variant="h5">No one paid yet</Typography>
                      )}
                      {paidBills.map((paidBill) => (
                        <PaidBill userBill={paidBill} />
                      ))}
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.paidContainer}>
                  <Typography variant="h4">Friends who didn’t pay</Typography>
                  <Box className={classes.statusBill}>
                    <Box className={classes.didNotPayContainer}>
                      {unpaidBills.length === 0 && (
                        <Typography variant="h5">Everyone paid</Typography>
                      )}
                      {unpaidBills.map((unpaidBill) => (
                        <NotPaidBill userBill={unpaidBill} />
                      ))}
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.buttonContainer}>
                  <Button
                    variant="contained"
                    className={classes.cancelButton}
                    onClick={handleOpenDialog}
                  >
                    Cancel this bill
                  </Button>
                </Box>
                <Dialog
                  open={openDialog}
                  onClose={handleCloseDialog}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle
                    id="alert-dialog-title"
                    className={classes.dialogTitle}
                  >
                    <Typography variant="h5">
                      Are you sure to cancel this bill?
                    </Typography>
                  </DialogTitle>
                  <DialogActions className={classes.dialogActions}>
                    <Button
                      variant="outlined"
                      onClick={handleCloseDialog}
                      className={classes.noButton}
                    >
                      <Typography variant="h5">
                        No, don’t cancel this bill
                      </Typography>
                    </Button>
                    <Button
                      onClick={handleDeleteBill}
                      autoFocus
                      className={classes.yesButton}
                      disabled={isDeleting} // Disable the button while deleting
                    >
                      {isDeleting ? (
                        <CircularProgress size={24} style={{ color: "#FFF" }} />
                      ) : (
                        <Typography
                          variant="h5"
                          style={{ textDecoration: "underline" }}
                        >
                          Yes, cancel this bill
                        </Typography>
                      )}
                    </Button>
                  </DialogActions>
                </Dialog>
                <Snackbar
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  open={snackbarOpen}
                  autoHideDuration={6000}
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
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PendingBill;
