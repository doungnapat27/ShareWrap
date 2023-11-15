import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Typography, Paper, TextField, Switch } from "@mui/material";
import useStyles from '../style/summaryBillTabStyle';
import SummaryBillBottom from "../compoments/summaryBillBottom";
import SummaryBillAddFriend from "../compoments/summeryBillAddFriend";
import BillSpitting from "./equalBillSplitting";

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
}

const label = { inputProps: { 'aria-label': 'Switch Equal Splitting' } };

function SummaryBillTab() {
    const [value, setValue] = useState(0);
    const [billTitle, setBillTitle] = useState('');
    const [totalCost, setTotalCost] = useState(0);
    const [isEqualSplitting, setIsEqualSplitting] = useState(false);
    const [originalItems, setOriginalItems] = useState([]);
    const classes = useStyles()

    const handleSwitchChange = (event) => {
        setIsEqualSplitting(event.target.checked);
        if (event.target.checked) {
            applyEqualSplitting();
        }else {
            revertToNormalSplitting();
        }
    };

    useEffect(() => {
        const billDetails = JSON.parse(localStorage.getItem('billDetails'));
        if (billDetails) {
            if (billDetails.title) {
              setBillTitle(billDetails.title);
            }
            if (billDetails.totalCost) {
              setTotalCost(billDetails.totalCost); 
            }
          }
        if (billDetails && billDetails.items) {
            setOriginalItems(billDetails.items); // Store the original items when component mounts
            // ... other initializations
        }
    }, []);

    const applyEqualSplitting = () => {
        const billDetails = JSON.parse(localStorage.getItem('billDetails')) || { items: [] };
        const selectedFriends = JSON.parse(localStorage.getItem('selectedFriendsId')) || [];
      
        if (selectedFriends.length === 0) return;
      
        const equalSplitItems = billDetails.items.map(item => {
          const friendsSplit = selectedFriends.map(friend => friend); 
      
          return {
            ...item,
            friends: friendsSplit, 
          };
        });
      
        const updatedBillDetails = {
          ...billDetails,
          items: equalSplitItems
        };
      
        localStorage.setItem('billDetails', JSON.stringify(updatedBillDetails));
      };

    const revertToNormalSplitting = () => {
        
        const billDetails = JSON.parse(localStorage.getItem('billDetails')) || {};
        billDetails.items = originalItems; 
        localStorage.setItem('billDetails', JSON.stringify(billDetails));
        
    };

    

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
                    <Box className={classes.menuContainer}>
                        <Paper className={classes.topicContainer}>
                            <Typography variant="h4">
                                {billTitle || "Default Bill Name"}
                            </Typography>
                            <Typography variant="h4">
                                ฿ {totalCost.toLocaleString()} 
                            </Typography>
                        </Paper>
                        <Box className={classes.selectFriend}>
                            <Typography variant="h4">Select Friends in list</Typography>
                        </Box>
                        <Box className={classes.equalContainer}>
                            <Typography variant="h5">Equal Splitting</Typography>
                            <Switch 
                            {...label}
                            checked={isEqualSplitting}
                            onChange={handleSwitchChange}
                            />
                        </Box>
                        <Box className={classes.splittingBillContainer}>
                        {isEqualSplitting ? (
                            <BillSpitting />  
                            ) : (
                            <SummaryBillAddFriend /> 
                        )}
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.bottomBar}>
                    <SummaryBillBottom/>
                </Box>
            </Box>
        </Box>
    )
}
export default SummaryBillTab;
