import { Button, ButtonBase, Grid, IconButton, Rating, styled, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FavoriteIconOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIconOutlined from '@mui/icons-material/ShoppingCartOutlined';
import getData from '../../services/getData';
import './ProductDetails.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function handleClick(item: any) {
  alert('Name : ' + item.title);
}

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, loading, error } = getData('https://dummyjson.com/products/' + id);
  const navigate = useNavigate();
  const [icon, setIcon] = useState(0);

  function onButtonClicked() {
    if (icon === 0) {
      setIcon(1);
    } else {
      setIcon(0);
    }
  }

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {product && (
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="flex-start">
          <Grid item lg={6} container direction="column" justifyContent="center" alignItems="flex-start">
            <Grid item container direction="row" justifyContent="flex-start" alignItems="center">
              <Grid item>
                <ImageSlider productImages={product.images} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} container direction="column" justifyContent="center" alignItems="flex-start">
            <Grid item container direction="row" justifyContent="flex-end" alignItems="center">
              <Grid item>
                <Typography variant="button">
                  <IconButton color={icon === 1 ? 'primary' : 'default'} onClick={() => onButtonClicked()}>
                    {icon === 1 ? (
                      <Tooltip title="Remove from favourites">
                        <FavoriteIcon />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Add to favourites">
                        <FavoriteIconOutlined />
                      </Tooltip>
                    )}
                  </IconButton>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item>
                <Typography gutterBottom variant="h4" component="div" flexGrow="1" textAlign="center">
                  {product.title}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5">
                {product.price} €
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                ID: {product.id}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6">
                Category: {product.category}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6">
                Brand: {product.brand}
              </Typography>
            </Grid>
            <Grid item container direction="row" justifyContent="flex-start" alignItems="center">
              <Grid item>
                <Typography gutterBottom variant="h6">
                  Rating:
                </Typography>
              </Grid>
              <Grid item>
                <Rating name="simple-controlled" value={product.rating} />
              </Grid>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6">
                Description: {product.description}
              </Typography>
            </Grid>
            <Grid item paddingBottom={2}>
              <Button
                variant="contained"
                startIcon={<ShoppingCartIconOutlined />}
                sx={{ color: 'white', background: '#00bbff' }}
              >
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ProductDetails;
function onButtonClicked(id: string | undefined) {
  throw new Error('Function not implemented.');
}
