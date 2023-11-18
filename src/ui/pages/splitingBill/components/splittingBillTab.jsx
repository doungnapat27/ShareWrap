import React, { useState, useEffect } from "react";

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
import { Form } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function SplitingBillTab() {
  const [value, setValue] = useState(0);
  const classes = useStyles()
  
  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      name: '',
      cost: '',
    }
    setItemList((prevItem) => ({
      ...prevItem,
      items: [...prevItem?.items, newItem]
    }))
  }
  
  const [itemList, setItemList] = useState({
    title: '',
    totalCost: 0,
    items: [
      {
        id: Date.now(),
        name: '',
        cost: ''
      }
    ]
  })

  const handleDeleteItem = (itemId, itemList) => {
    setItemList((prevItem) => {
      if(itemList?.length === 1) {
        return prevItem
      } else {
        const updatedItems = prevItem?.items?.filter(item => item?.id !== itemId);
        const totalCost = updatedItems?.reduce((accumulator ,itemCost) => accumulator + parseFloat(itemCost.cost || 0), 0)

        return {
          ...prevItem,
          items: updatedItems,
          totalCost,
        };
      }
    });
  }

  const handleTitleChange = (newTitle) => {
    setItemList((prev) => {
      return {
        ...prev,
        title: newTitle
      }
    })
  }  

  const handleItemChange = (itemName, itemId) => {
    setItemList((prev) => {
      const newItemName = prev.items.map(item => {
        if(item.id === itemId) {
          return {
            ...item,
            name: itemName
          }
        }
        return item
      })
      return {
        ...prev,
        items: newItemName
      }
    })
  }

  const handleTotalCostChange = (itemId, newCost) => {
    setItemList((prevItem) => {
      const updatedItem = prevItem?.items?.map((item) => {
        if(itemId === item?.id) {
          const cost = newCost === '' ? '' : parseFloat(newCost)
          return {
            ...item,
            cost: cost
          }
        }
        return item
      })

      const totalCost = updatedItem?.reduce((accumulator ,itemCost) => accumulator + parseFloat(itemCost.cost || 0), 0)

      return {
        ...prevItem,
        items: updatedItem,
        totalCost,
      }
    })
  }


  useEffect(() => {
    const savedBillDetails = localStorage.getItem('billDetails');
    if (savedBillDetails) {
      const billDetails = JSON.parse(savedBillDetails);
      setItemList(billDetails);
      
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('billDetails', JSON.stringify(itemList));
  }, [itemList]);

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
                      placeholder="Put your bill name here"
                      variant="standard"
                      type="text"
                      name='title'
                      value={itemList.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                    />
                  </Paper>
                  </Box>
                  <ItemList
                    itemList={itemList}
                    handleDeleteItem={handleDeleteItem}
                    handleTotalCostChange={handleTotalCostChange}
                    handleItemChange={handleItemChange}
                  />
                <ButtonAddItem
                  itemList={itemList}
                  handleAddItem={handleAddItem}
                />

              </Box>
            </Box>
          </Box>
        <Box className={classes.bottomBar}>
          <BottomBar itemList={itemList}/>
        </Box>
      </Box>
    </Box>
  );
}
const MemoSplitingBillTab = React.memo(SplitingBillTab);

export default MemoSplitingBillTab;
