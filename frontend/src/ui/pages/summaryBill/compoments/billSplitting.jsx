import React from "react";
import useStyle from '../style/billSplittingStyle'
import { Avatar, Box, Typography } from "@mui/material";

function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    } 
    return color;
  }

function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split('')[0][0]}`,
    };
}

function EqualSpitting() {
    const classes = useStyle();
    return(
        <Box className={classes.cover}>
            <Box className={classes.container}>
                <Box className={classes.billContainer}>
                    <Box className={classes.rowOne}>
                        <Box className={classes.friendContainer}>
                            <Avatar {...stringAvatar('Oat Sarayut')}/>
                            <Typography variant="h5" style={{marginLeft:"8px"}}>Oat Sarayut</Typography>
                        </Box>
                        <Typography variant="h5">225 ฿</Typography>
                    </Box>
                    <Box className={classes.rowTwo}>
                        <Typography style={{fontSize: "14px"}}>Kao Pad kraprao</Typography>
                        <Typography style={{fontSize: "14px"}}>33.33 ฿</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default EqualSpitting;