import React from "react";
import useStyles from "../style/pendingBillTabStyle";
import {
  Box,
  Tab,
  Tabs,
  Paper,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { stringAvatar } from "../../../../helpers/avatar_helper";

function PendingBillNotPaid() {
  const classes = useStyles();
  return (
    <Box className={classes.paid}>
    <Box className={classes.name}>
      <Avatar
        {...stringAvatar("Username1")}
        sx={{ mr: 1, width: 24, height: 24, ...stringAvatar("Username1").sx }}
      />
      <Typography variant="h5" style={{ marginLeft: "4px" }}>
        Friend 1
      </Typography>
    </Box>
    <Box className={classes.price}>
      <Typography variant="h5" style={{height: "42px", display:"flex", alignItems:"center"}}>300 ฿</Typography>
    </Box>
  </Box>
  );
}

export default PendingBillNotPaid;
