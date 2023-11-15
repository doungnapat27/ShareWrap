import React, { useContext } from "react";

import CreateIcon from '@mui/icons-material/Create';
import CircleIcon from '@mui/icons-material/Circle';
import useStyles from '../style/selectedPaymentStyle'
import { ShareContext } from "./shareBankAndPromptPayContext";
import { Link } from 'react-router-dom'

import { Box, Typography } from "@mui/material";

function SelectedBank() {
  const {
    userPayment,
  } = useContext(ShareContext);


  const classes = useStyles()
  return (
    <Box className={classes.boxAccount}>
      <Box sx={{ display: "flex" }}>
        <CircleIcon sx={{ fontSize: "40px" }} />
        <Box ml={1}>
          <Typography variant="h5">{userPayment.bankAccount}</Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography variant="h6">{userPayment.bankName}, </Typography>
            <Typography sx={{ marginLeft: '4px' }} variant="h6">{userPayment.bankAccNumber}</Typography>
          </Box>
        </Box>
      </Box>
      <Link to='/edit-bank-account'>
        <CreateIcon />
      </Link>
    </Box>
  );
}

export default SelectedBank;
