import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";

import UseStyles from '../style/itemListStyle'

import {
  TextField,
  Paper,
  IconButton,
} from "@mui/material";

function ItemList() {
  const classes = UseStyles()
  return (
    <Paper className={classes.paperContainer}>
      <IconButton className={classes.positionButton}>
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
  );
}

export default ItemList;
