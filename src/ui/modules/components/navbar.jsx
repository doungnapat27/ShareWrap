import React from "react";
import LogoHomepage from "../../assets/logoHomepage.svg"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircle from "@mui/icons-material/AccountCircle";
import useStyles  from './navbarStyle.jsx';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography
} from "@mui/material";

function Navbar() {

  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} className={classes.appBarStyle}>
        <Toolbar>
          <img src={LogoHomepage} alt="Logo" />
          <Typography variant="h5" component="div" className={classes.title}>
            ShareWrap
          </Typography>
          <NotificationsNoneIcon className={classes.notificationIcon} />
          <IconButton>
            <AccountCircle className={classes.accountCircle} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
