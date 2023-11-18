import React, { useState } from "react";
import useStyles from "../../addFriend/style/addFriendTabStyle";
import { Box, Tab, Tabs, Paper, Typography } from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function PendingBill() {
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
              label="Pending Bill"
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
        <Box className={classes.cover}>
            <Box className={classes.menuContainer}>
                <Paper className={classes.topicContainer}>
                    <Typography variant="h4">
                        Bill Name
                    </Typography>
                    <Typography variant="h4">
                        ฿ 100000
                    </Typography>
                </Paper>
            </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PendingBill;
