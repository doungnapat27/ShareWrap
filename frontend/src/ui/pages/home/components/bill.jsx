import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import useStyles from "../../../pages/home/style/penddingBillsStyle";

function Bill({ bills }) {
  const classes = useStyles();

  return (
    <Box>
      {bills.map((bill, index) => (
        <Paper className={classes.cover} key={`${index}`}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4">{bill.name}</Typography>
            <Box sx={{ padding: "6px" }}>
              {!bill.isPaid && (
                <Typography variant="h5" className={classes.pendingText}>
                  Not Recieved
                </Typography>
              )}
            </Box>
          </Box>
          <Typography variant="h3">฿ {bill.total.toFixed(2)}</Typography>
          <Typography className={classes.smallTextFrist}>
            Created on {bill.createdDate}
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#838383", marginBottom: "10px" }}
          >
            Transaction ID: {bill.id}
          </Typography>
          <Button fullWidth className={classes.payButton}
          href={'/pending-bill/'+bill.id}>
            <Typography variant="h5">See payment details</Typography>
          </Button>
        </Paper>
      ))}
    </Box>
  );
}

export default Bill;
