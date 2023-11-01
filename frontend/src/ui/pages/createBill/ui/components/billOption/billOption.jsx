import React from "react"

import BillOutline from '../../../../../assets/solarBillOutlinemanualBillSplitting.svg'
import Pencil from '../../../../../assets/mdiPencilmanualBillSplitting.svg'

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import useStyles from "./billOptionStyle"

import {
  Box,
  Typography,
  Button,
  Card
} from "@mui/material";

function BillOption(props) {
  const {
    topic,
    helperText,
    logoUrl
  } = props
  const classes = useStyles()

  return (
    <Card elevation={1} className={classes.cardContainer}>
      <Box className={classes.boxContent}>
        <Box>
          <Typography variant='h5'>
            {topic}
          </Typography>
          <Typography  variant='h6' sx={{ color: "#AA6A00" }}>
           {helperText}
          </Typography>
        </Box>
        <Box className={classes.imgBox}>
          <Box component="img" src={BillOutline} />
          <Box component="img" src={Pencil}/>
        </Box>
      </Box>
      <Button className={classes.nextButton}>
        <ArrowForwardIosIcon />
      </Button>
    </Card>
  );
}

export default BillOption;
