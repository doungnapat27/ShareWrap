import React from "react";
import useStyles from "../style/pendingBillTabStyle";
import {
  Box,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { stringAvatar } from "../../../../helpers/avatar_helper";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function PendingBillPaid({ bills}) {
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
        <Typography variant="h5">300 ฿</Typography>
        <Button><ArrowForwardIosIcon style={{color: "white", backgroundColor: "#02C616",width: '30px', borderRadius: "6px", height: "30px"}}/></Button>
      </Box>
    </Box>
  );
}

export default PendingBillPaid;
