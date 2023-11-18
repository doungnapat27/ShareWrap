import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Typography, Paper } from "@mui/material";
import useStyle from "../style/billSummaryTabStyle";
import BillSummaryBottom from "./billSummaryBottom";
import BillSummarySpitting from "./billsummarySpitting";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BillSummaryTab() {
  const [value, setValue] = useState(0);
  const [billTitle, setBillTitle] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const classes = useStyle();

  useEffect(() => {
    const billDetails = JSON.parse(localStorage.getItem("billDetails"));
    if (billDetails) {
      if (billDetails.title) {
        setBillTitle(billDetails.title);
      }
      if (billDetails.totalCost) {
        setTotalCost(billDetails.totalCost);
      }
    }
  }, []);

  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.tabContainer}>
          <Tabs
            value={value}
            TabIndicatorProps={{
              sx: { background: "#FFB53B" },
            }}
            centered={true}
          >
            <Tab
              className={classes.centerTab}
              label="Summary Bill"
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
        <Box className={classes.cover}>
          <Box className={classes.menuContainer}>
            <Paper className={classes.topicContainer}>
              <Typography variant="h4">
                {billTitle || "Default Bill Name"}
              </Typography>
              <Typography variant="h4">
                ฿ {totalCost.toLocaleString()}
              </Typography>
            </Paper>
            <Box className={classes.splittingBillContainer}>
              <BillSummarySpitting />
            </Box>
          </Box>
        </Box>
        <Box className={classes.bottomBar}>
          <BillSummaryBottom />
        </Box>
      </Box>
    </Box>
  );
}

export default BillSummaryTab;
