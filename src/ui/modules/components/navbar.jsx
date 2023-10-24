import React from "react";
import Logo from "../../assets/logo.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "#fff", paddingTop: '8px' }}>
        <Toolbar>
          <img src={Logo} alt="Logo" />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#000",
              textShadow: "2px 4px 7px rgba(0, 0, 0, 0.25)",
              fontWeight: 400,
              fontSize: "16px",
              letterSpacing: "-0.56px",
              fontFamily: "Arial Rounded MT",
            }}
          >
            ShareWrap
          </Typography>
          <NotificationsNoneIcon
            sx={{
              color: "#000",
              fontSize: 35,
            }}
          />
          <IconButton>
            <AccountCircle sx={{ fontSize: 35 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
