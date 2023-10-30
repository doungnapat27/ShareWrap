import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, TabList, Typography, Box } from "@mui/material";
import useStyles from "./hometabStyle";

import CreateBill from "../createBill";
import Bill from "../bill";

import TabPanel from "../../../../../../common/tabPanel";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function HomeTab() {
  const [value, setValue] = useState(0);
  const classes = useStyles()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.tabContainer}>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabsStyle}
            sx={{ padding: "0 30px" }}
            TabIndicatorProps={{
              sx: { 
                background: "#FFB53B" ,        
              },
            }}
          >
            <Tab
              label="Homepage"
              className={classes.centerTab}
              {...a11yProps(0)}
            />
            <Tab
              label="History"
              className={classes.centerTab}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <Box className={classes.cover}>
          <Box className={classes.containerInfo}>
            <TabPanel value={value} index={0}>
              <Box>
                <CreateBill />
                <Typography className={classes.typoStyle}>
                  Pending bills
                </Typography>
                <Box mt={2}>
                  <Bill />
                  <Bill />
                  <Bill />
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item two
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeTab;
