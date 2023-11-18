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
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CreateIcon from "@mui/icons-material/Create";

import PaidBill from "./pendingBillTabPaid";
import NotPaidBill from "./pendingBillTabNotPaid";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function PendingBill() {
  const [value, setValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(true);
  const classes = useStyles();

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
                Bill Name
                <Typography variant="h4">฿ 100000</Typography>
              </Typography>
              <Box className={classes.statusContainer}>
                <Typography variant="h5">Received all</Typography>
              </Box>
            </Paper>
            <Box className={classes.cover}>
              <Box className={classes.billContainer}>
                <Box className={classes.accountDetail}>
                  <Box className={classes.boxAccount}>
                    <Box sx={{ display: "flex" }}>
                      <CircleIcon sx={{ fontSize: "40px" }} />
                      <Box ml={1}>
                        <Typography variant="h5">Account Name</Typography>
                        <Typography variant="h6">
                          Bank name, Account Number
                        </Typography>
                      </Box>
                    </Box>
                    <Button>
                      <CreateIcon style={{ color: "black" }} />
                    </Button>
                  </Box>
                </Box>
                <Box className={classes.paidContainer}>
                  <Typography variant="h4">Friends who already paid</Typography>
                  <Box className={classes.statusBill}>
                    <Box className={classes.alreadyPaidContainer}>
                      <PaidBill />
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.paidContainer}>
                  <Typography variant="h4">Friends who didn’t pay</Typography>
                  <Box className={classes.statusBill}>
                    <Box className={classes.didNotPayContainer}>
                      <NotPaidBill />
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
                  <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>
                    <Typography variant="h5">Are you sure to cancel this bill?</Typography>
                  </DialogTitle>
                  <DialogActions className={classes.dialogActions}>
                    <Button variant="outlined" onClick={handleCloseDialog} className={classes.noButton}>
                      <Typography variant="h5">No, don’t cancel this bill</Typography>
                    </Button>
                    <Button
                      onClick={handleCloseDialog}
                      autoFocus
                      className={classes.yesButton}
                    >
                      <Typography variant="h5" style={{ textDecoration: 'underline' }}>Yes, cancel this bill</Typography>
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PendingBill;
