import React from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import useStyles from '../style/buttonAddItemStyle'

import { Button, Typography } from "@mui/material";


function ButtonAddItem({ handleAddItem }) {
  const classes = useStyles()
  return (
    <Button
      fullWidth
      variant="contained"
      className={classes.styleButton}
      onClick={handleAddItem}
    >
      <AddCircleIcon className={classes.styleAddCIrcleIcon} />
      <Typography variant="h5" color="#000">
        List of your shared stuff
      </Typography>
    </Button>
  );
}

export default ButtonAddItem;
