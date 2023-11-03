import React, { useState } from "react";

import ItemList from "./itemList";
import ButtonAddItem from "./buttonAddItem";
import BottomBar from "./bottomBar";

import useStyles from "../style/splittingBillTabStyle";

import {
  Tabs,
  Tab,
  Box,
  TextField,
  Paper,
} from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function SplitingBillTab() {
  const [value, setValue] = useState(0);
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box sx={{ flex: 1 }}>
        <Box className={classes.tabContainer}>
          <Tabs
            value={value}
            TabIndicatorProps={{
              sx: { background: "#FFB53B" },
            }}
          >
            <Tab
              sx={{ flex: 1, color: "black" }}
              label="Bill splitting"
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
        <Box sx={{ padding: "24px 30px" }}>
          <Box>
            <Paper className={classes.paperContainer}>
              <TextField
                fullWidth
                label="Pul your bill name here"
                variant="standard"
              />
            </Paper>
          </Box>
          <ItemList />
          <ButtonAddItem />
        </Box>
      </Box>
      <BottomBar />
    </Box>
  );
}
const MemoSplitingBillTab = React.memo(SplitingBillTab);

export default MemoSplitingBillTab;
