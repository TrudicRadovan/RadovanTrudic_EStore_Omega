import { Button, Grid, Rating, styled, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIconOutlined from '@mui/icons-material/ShoppingCartOutlined';
import getData from '../../hooks/useGetData';
import './ProductDetails.css';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import FavoritesButton from '../../components/FavoritesButton/FavoritesButton';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, loading, error } = getData(id as string);
  const navigate = useNavigate();

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
                <FavoritesButton productId={product.id} />
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
