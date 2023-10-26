import React, { useState } from "react";
import PropTypes from "prop-types";
import TabPanel from "../../../../../common/tabPanel";

import {
  Typography,
  Box,
  Grid,
  Button,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";

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

function TabInCreateBill() {
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          backgroundColor: "#fff",
            // display: 'flex'
        }}
      >
        <Tabs
          value={value}
          sx={{ padding: "0 30px" }}
          TabIndicatorProps={{
            sx: { background: "#FFB53B" },
          }}
        >
          <Tab
            label="Create Bill"
            sx={{ flex: 1, width: "50%" }}
            {...a11yProps(0)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "700",
              fontSize: "20px",
            }}
          >
            Create bill TT
          </Typography>
          <Box mt={2}></Box>
        </Box>
      </TabPanel>
    </Box>
  );
}

export default TabInCreateBill;
