import React, { useState } from "react";
import useStyle from "../style/summaryBillBottomStyle";
import { Box, Button, CircularProgress } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function SummaryBillBottom() {
  const classes = useStyle();
  const [isLoading, setIsLoading] = useState(false);
  const handToBillSummary = () => {
    setIsLoading(true);
    window.location.href = "/bill-summary";

    // setTimeout(() => {
    //   window.location.href = "/bill-summary";
    //   setIsLoading(false);
    // }, 1000);
  };

  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.boxContainer}>
          <Button
            fullWidth={true}
            className={classes.positionButton}
            endIcon={!isLoading && <ArrowForwardIcon />}
            onClick={handToBillSummary}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} style={{ color: "rgba(152, 30, 37, 0.80)" }} />
            ) : (
              "Next"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SummaryBillBottom;
