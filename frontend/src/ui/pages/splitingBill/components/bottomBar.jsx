import React from "react";

import CircleIcon from "@mui/icons-material/Circle";
import CreateIcon from "@mui/icons-material/Create";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import useStyles from '../style/bottomBarStyle'

import { Box, Typography, Button } from "@mui/material";

function BottomBar() {
  const classes = useStyles()
  return (
    <Box className={classes.boxContainer}>
      <Box className={classes.boxHeader}>
        <Typography variant="h4">Total</Typography>
        <Typography variant="h4">100.00 ฿</Typography>
      </Box>
      <Box className={classes.boxAccount}
      >
        <Box sx={{ display: "flex" }}>
          <CircleIcon sx={{ fontSize: "40px" }} />
          <Box ml={1}>
            <Typography variant="h5">Account Name</Typography>
            <Typography variant="h6">Bank Name, Account Number</Typography>
          </Box>
        </Box>
        <CreateIcon />
      </Box>
      <Button
        fullWidth
        className={classes.positionBotton}
        endIcon={<ArrowForwardIcon />}
      >
        Next
      </Button>
    </Box>
  );
}

export default BottomBar;
