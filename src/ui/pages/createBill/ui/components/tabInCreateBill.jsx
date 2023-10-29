import React, { useState } from "react";
import PropTypes from "prop-types";
import TabPanel from "../../../../../common/tabPanel";
import BillOption from "./billOption/billOption";
import HistoryBill from "./historyBill/historyBill";

import {
  Typography,
  Box,
  Grid,
  Button,
  Tabs,
  Tab
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
  const historyBillItems = [1, 2, 3, 4, 5, 6, 7] // mock up histoeyBill list
  const [showAllBills, setShowAllBill] = useState(false)

  const handleShowAllBill = () => {
    setShowAllBill((prevHistoryBill) => !prevHistoryBill)
  }

  const displaytBillHistory = showAllBills ? historyBillItems : historyBillItems.slice(0, 2)

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
          <BillOption
            topic="Manual Bill splitting"
            helperText="Share different expense with friends"
            logoUrl="../../../../assets/mdiPencilmanualBillSplitting.svg"
          />
          <BillOption
            topic="Equal Bill splitting"
            helperText="Share same amoung expense with friends"
          />
          <BillOption
            topic="Bill splitting Camera"
            helperText="Photoshoot bill with camera to the system"
          />
        </Box>
        <Box mt={4} mb={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography>Redo history bill</Typography>
          <Button
            onClick={handleShowAllBill}
            sx={{
              color: '#838383',
              textTransform: 'none',
              }}
            >
              {showAllBills ? 'See less' : 'See all' }
          </Button>
        </Box>
        <Grid
          container
          sx={{
            justifyContent: "space-between",
          }}
        >
          {displaytBillHistory.map((_, index) => (
            <Grid item key={`historyBill number ${index}`} xs={6} md={6}>
              <HistoryBill />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
}

export default TabInCreateBill;
