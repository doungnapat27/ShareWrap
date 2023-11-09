import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, TabList, Typography, Box, Button, Link } from "@mui/material";
import useStyles from "../style/hometabStyle";
import BillStatus from "./billStatus";

import CreateBill from "./createBillButton";
import Bill from "./bill";
import PendingBills from "./pendingBills";

import TabPanel from "../../../../common/tabPanel";

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
  const billItems = [1] // mock up data
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleCreateBill = () => {
    setTimeout(() => {
      window.location.href = "/splitting-bill";; 
    }, 1000);
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
                background: "#FFB53B",
              },
            }}
            centered={true}
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
                <CreateBill 
                  onClick = {handleCreateBill}
                />
                <Typography variant='h4'>
                  Pending bills
                </Typography>
                {billItems.length > 0 ? (
                  <Box mt={2}>
                    {billItems.map((key, index) => (
                      <Box key={`bill-${key}`}>
                        <Bill />
                        <PendingBills />
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Box sx={{ textAlign: 'center', marginTop: '22px' }}>
                    <Box>
                      <Typography variant="h5" sx={{ color: '#838383', marginBottom: '11px' }}>
                        No pending bill.
                      </Typography>
                    </Box>
                    <Link href="#" variant="h4" sx={{ color: '#981E25' }}>
                      Create bill
                    </Link>
                  </Box>
                )}
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
