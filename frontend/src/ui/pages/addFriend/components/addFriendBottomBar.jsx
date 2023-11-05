import React from "react"; 
import useStyles from "../style/addFriendBottomBarStyle";
import {Box, Button, Typography} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function AddFriendBottomBar() {
    const classes = useStyles()
    return (
        <Box className={classes.cover}>
            <Box className={classes.container}>
                <Box className={classes.boxContainer}>
                    <Box className={classes.boxHeader}>
                        <Typography variant="h5">Selected Friends</Typography>
                    </Box>
                    <Box className={classes.boxFriend}>
                
                    </Box>
                    <Button
                    fullWidth={true}
                    className={classes.positionBotton}
                    endIcon={<ArrowForwardIcon/>}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default AddFriendBottomBar;