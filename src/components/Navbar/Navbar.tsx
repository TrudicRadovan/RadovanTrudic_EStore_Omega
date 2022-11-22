import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/FavoriteOutlined';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import './Navbar.css';
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickProfile = () => {
    navigate('/user');
  };

  return (
    <nav className="navbar">
      <h1>EStore Omega</h1>
      <div className="links">
        <Link to="/">
          <IconButton>
            <HomeIcon sx={{ color: 'white', fontSize: 'xx-large' }} />
          </IconButton>
        </Link>
        <Link to="/favourites">
          <IconButton>
            <FavoriteIcon sx={{ color: 'white', fontSize: 'xx-large' }} />
          </IconButton>
        </Link>
        <Link to="/cart">
          <IconButton>
            <ShoppingCartIcon sx={{ color: 'white', fontSize: 'xx-large' }} />
          </IconButton>
        </Link>
        <Link to="/chat">
          <IconButton>
            <ChatIcon sx={{ color: 'white', fontSize: 'xx-large' }} />
          </IconButton>
        </Link>
        <IconButton
          onClick={handleClick}
          size="medium"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <AccountCircleIcon sx={{ color: 'white', fontSize: 'xx-large' }} />
        </IconButton>
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
          <MenuItem onClick={handleClickProfile}>
            <Avatar /> Profile
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
