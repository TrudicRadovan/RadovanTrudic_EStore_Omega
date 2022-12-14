/* eslint-disable */
import './Favourites.css';
import { Counter } from '../../redux/features/counter/Counter';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { selectCount } from '../../redux/features/counter/counterSlice';
import { Box, Button, Popover } from '@mui/material';
import React from 'react';
import ChatRoom from '../ChatRoom/ChatRoom';
import Chat from '../../components/Chat/Chat';

const Favourites = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  //<Counter></Counter>
  return (
    <div className="favourites">
      <h1>Favourites</h1>

      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box>
          <Chat></Chat>
        </Box>
      </Popover>
    </div>
  );
};

export default Favourites;
