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
        <Box className={classes.nameContent}>
          <Typography sx={{ 
            fontWeight: "bold" }}>
            {topic}
          </Typography>
          <Typography mt={1} sx={{ fontSize: "12px", color: "#AA6A00" }}>
           {helperText}
          </Typography>
        </Box>
        <Box className={classes.imgBox}>
          <Box component="img" src={BillOutline} className={classes.img1}/>
          <Box component="img" src={Pencil} className={classes.img2}/>
        </Box>
        {/* <Button className={classes.nextButton}>
        <ArrowForwardIosIcon />
      </Button> */}
      </Box>
      <Button className={classes.nextButton}>
        <ArrowForwardIosIcon />
      </Button>
    </Card>
  );
}

export default BillOption;
