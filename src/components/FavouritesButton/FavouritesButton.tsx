import { Typography, IconButton, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import FavoriteIconOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import React from 'react';

const FavouritesButton = () => {
  const [icon, setIcon] = useState(0);

  function onButtonClicked() {
    if (icon === 0) {
      setIcon(1);
    } else {
      setIcon(0);
    }
  }

  return (
    <div className="favourites-button">
      <Typography variant="button">
        <IconButton color={icon === 1 ? 'primary' : 'default'} onClick={() => onButtonClicked()}>
          {icon === 1 ? (
            <FavoriteIcon />
          ) : (
            <Tooltip title="Add to favourites">
              <FavoriteIconOutlined />
            </Tooltip>
          )}
        </IconButton>
      </Typography>
    </div>
  );
};

export default FavouritesButton;
