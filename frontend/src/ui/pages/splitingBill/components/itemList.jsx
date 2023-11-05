import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";

import UseStyles from '../style/itemListStyle'

import {
  TextField,
  Paper,
  IconButton,
  Box,
} from "@mui/material";

function ItemList({ itemList, handleDeleteItem }) {
  const classes = UseStyles()
  return (
    <Box>
      {itemList?.items.map((item, index) => (
        <Paper
          key={`item:${item.id}`}
          className={classes.paperContainer}
        >
          <IconButton
            className={classes.positionButton}
            onClick={() => handleDeleteItem(item.id, itemList.items)}
          >
            <CancelIcon />
          </IconButton>
          <TextField
            fullWidth
            className={classes.positoinTypo}
            placeholder="Item name"
            variant="standard"
          />
          <TextField className={classes.setWidthTextField} placeholder="Cost" variant="standard" />
        </Paper>
      ))}
    </Box>
  );
}

export default ItemList;
