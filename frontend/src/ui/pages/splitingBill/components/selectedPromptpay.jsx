import React, { useContext } from "react";
import CreateIcon from "@mui/icons-material/Create";
import CircleIcon from "@mui/icons-material/Circle";
import useStyles from "../style/selectedPaymentStyle";
import { ShareContext } from "./shareBankAndPromptPayContext";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function SelectedPromptpay() {
  const { userPayment } = useContext(ShareContext);
  const classes = useStyles();
  return (
    <Box className={classes.boxAccount}>
      <Box sx={{ display: "flex" }}>
        <CircleIcon sx={{ fontSize: "40px" }} />
        <Box ml={1}>
          <Typography variant="h5">{userPayment.promptpayName}</Typography>
          <Typography variant="h6">{userPayment.promptpayNumber}</Typography>
        </Box>
      </Box>
      <Link to="/edit-promptpay">
        <CreateIcon />
      </Link>
    </Box>
  );
}

export default SelectedPromptpay;
