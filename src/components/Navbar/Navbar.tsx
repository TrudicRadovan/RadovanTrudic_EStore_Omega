import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/FavoriteOutlined';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
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
        <Link to="/user">
          <IconButton>
            <AccountCircleIcon sx={{ color: 'white', fontSize: 'xx-large' }} />
          </IconButton>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
