import React from "react";
import useStyles from "../style/pendingBillTabStyle";
import {
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import { stringAvatar } from "../../../../helpers/avatar_helper";

function PendingBillNotPaid({ userBill }) {
  const classes = useStyles();
  return (
    console.log(userBill),
    <Box className={classes.paid}>
    <Box className={classes.name}>
      <Avatar
        {...stringAvatar(userBill.userId)}
        sx={{ mr: 1, width: 24, height: 24, ...stringAvatar(userBill.userId).sx }}
      />
      <Typography variant="h5" style={{ marginLeft: "4px" }}>
        {userBill.userId}
      </Typography>
    </Box>
    <Box className={classes.price}>
      <Typography variant="h5" style={{height: "42px", display:"flex", alignItems:"center"}}>{userBill.shareTotal.toFixed(2)} ฿</Typography>
    </Box>
  </Box>
  );
}

export default PendingBillNotPaid;
