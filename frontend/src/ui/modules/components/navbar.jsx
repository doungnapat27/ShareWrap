import React from "react";
import LogoHomepage from "../../assets/logoHomepage.svg"
import useStyles  from '../style/navbarStyle';
import {AppBar,Box,Toolbar,IconButton,Typography,} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { setAuthHeader, setUser } from '../../../helpers/axios_helper';
import { stringAvatar } from '../../../helpers/avatar_helper'


function Navbar() {
  const handleLogout = () => {
    localStorage.clear();

    window.location.href = "/";
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoClick = () => {
    window.location.href = "/home"; 
    localStorage.removeItem('billDetails');
    localStorage.removeItem('selectedFriendsId');
    localStorage.removeItem('billsummary');
  };
  const classes = useStyles();
  const userData = JSON.parse(localStorage.getItem('auth_user'));
  const username = userData ? userData.id : 'User';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} className={classes.appBarStyle}>
        <Toolbar>
          <img src={LogoHomepage} alt="Logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}/>
          <Typography variant="h5" component="div" className={classes.title}>
            ShareWrap
          </Typography>
          <Tooltip title="Account settings">
          <Avatar 
            onClick={handleClick}
            {...stringAvatar(username)}
            sx={{ ml: 2 ,width: 24, height: 24, ...stringAvatar(username).sx}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          />
        </Tooltip>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar {...stringAvatar(username)} /> {username}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Navbar;
