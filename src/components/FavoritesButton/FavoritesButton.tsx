import { Typography, IconButton, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import FavoriteIconOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { addToFavorites, deleteFromFavorites, selectFavorites } from '../../redux/features/favorites/favoritesSlice';

const FavouritesButton = ({ productId }: { productId: number }) => {
  const [icon, setIcon] = useState(0);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);

  useEffect(() => {
    if (favorites.includes(productId)) {
      setIcon(1);
    }
  }, []);

  function onButtonClicked() {
    if (icon === 0) {
      setIcon(1);
      dispatch(addToFavorites(productId));
    } else {
      setIcon(0);
      dispatch(deleteFromFavorites(productId));
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
