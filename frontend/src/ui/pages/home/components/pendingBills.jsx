import { Paper, Box, Typography, Button } from "@mui/material";
import React from "react";
import useStyles from "../../../pages/home/style/penddingBillsStyle";

function PendingBills({ userBills }) {
  const classes = useStyles();
  const uid = JSON.parse(localStorage.getItem("auth_user")).id;
  const storedShowImage = JSON.parse(localStorage.getItem("showImage"));
  console.log("storedShowImage", storedShowImage);

  return (
    <Box>
      {userBills.map((userBill, index) => (
        <Paper className={classes.cover} key={`${index}:${Date.now()}`}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4">{userBill.billName}</Typography>
            <Box sx={{ padding: "6px" }}>
              <Typography variant="h5" className={classes.pendingText}>
                Waiting for approval
              </Typography>
            </Box>
          </Box>
          <Typography variant="h3">
            ฿ {userBill.shareTotal.toFixed(2)}
          </Typography>
          <Typography className={classes.smallTextFrist}>
            Created by {userBill.billOwnerName} on {userBill.billCreatedDate}
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#838383", marginBottom: "10px" }}
          >
            Transaction ID: {userBill.id}
          </Typography>
          {userBill.paid ? (
                      <Button href="/view-receipt" fullWidth className={classes.payButton}>
                      <Typography variant="h5">See payment details</Typography>
                    </Button>
          ):(  
          <Button
            href={"/" + uid + "/upload-receipt/" + userBill.id}
            fullWidth
            className={classes.payButton}
          >
            <Typography variant="h5">Pay</Typography>
          </Button>
          )}
          </Paper>
    ))}
    </Box>
  );
}

export default PendingBills;
