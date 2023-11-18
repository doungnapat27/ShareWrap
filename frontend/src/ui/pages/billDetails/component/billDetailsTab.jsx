import React, { useState } from "react";
import useStyles from "../style/billDetailsTabStyle";
import { Box, Tabs, Tab, Paper, Typography, Button } from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BillDetailTab(params) {
  const [value, setValue] = useState(0);
  const classes = useStyles();

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
              label="Bill Details"
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
        <Box className={classes.cover}>
          <Box className={classes.menuContainer}>
            <Paper className={classes.topicContainer}>
              <Typography variant="h5">
                Bill Name
                <Typography variant="h4">฿ 100000</Typography>
              </Typography>
              <Box className={classes.userDetailContainer}>
                <Typography variant="h6">Paid by ...Friend Name1</Typography>
                <Typography variant="h6">On DD/MM/YY/ HH:MM</Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BillDetailTab;
