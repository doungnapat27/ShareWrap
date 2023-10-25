import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, TabList, Typography, Box } from "@mui/material";

import CreateBill from "./createBill";
import Bill from "./bill";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: "30px 32px" }}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          backgroundColor: "#fff",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ padding: "0 30px" }}
          TabIndicatorProps={{
            sx: { background: "#FFB53B" },
          }}
        >
          <Tab
            label="Homepage"
            sx={{ flex: 1, width: "50%" }}
            {...a11yProps(0)}
          />
          <Tab
            label="History"
            sx={{ flex: 1, width: "50%" }}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box>
          <CreateBill />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "700",
              fontSize: "20px",
            }}
          >
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
  );
}

export default HomeTab;
