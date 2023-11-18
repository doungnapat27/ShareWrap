import React from "react";
import useStyle from "../style/summaryBillBottomStyle";
import { Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function SummaryBillBottom() {
  const classes = useStyle();
  const handToBillSummary = () => {
    window.location.href = "/bill-summary";
  };

  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.boxContainer}>
          <Button
            fullWidth={true}
            className={classes.positionButton}
            endIcon={<ArrowForwardIcon />}
            onClick={handToBillSummary}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SummaryBillBottom;
