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
                label="Bill splitting"
                {...a11yProps(0)}
              />
            </Tabs>
          </Box>
          <Box className={classes.cover}>
            <Box className={classes.containerInfo}>
              <Box sx={{ padding: "16px 30px" }}>
                <Box>
                  <Paper className={classes.paperContainer}>
                    <TextField
                      fullWidth
                      placeholder="Pull your bill name here"
                      variant="standard"
                    />
                  </Paper>
                </Box>
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ButtonAddItem />
              </Box>
            </Box>
          </Box>
        <Box className={classes.bottomBar}>
          <BottomBar/>
        </Box>
      </Box>
    </Box>
  );
}
const MemoSplitingBillTab = React.memo(SplitingBillTab);

export default MemoSplitingBillTab;
