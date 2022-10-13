import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ShoppingCartIconOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import FavoriteIconOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import IconButton from '@mui/material/IconButton';
import './ItemList.css';
import { ItemListPropsType } from '../../types/ItemListPropsType';
import { useNavigate } from 'react-router-dom';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ItemList({ products }: ItemListPropsType) {
  const navigate = useNavigate();

  function handleClick(item: any) {
    navigate(`/details/${item.id}`);
  }

  return (
    <Paper
      sx={{
        paddingTop: 7,
        paddingBottom: 7,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
      }}
    >
      <Grid container spacing={3} direction="row" justifyContent="center" alignItems="flex-start">
        {products.map(product => (
          <Grid item lg={3} container key={product.id}>
            <Paper
              sx={{
                margin: 'auto',
                maxWidth: 200,
                flexGrow: 1,
                backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
              }}
            >
              <Grid
                item
                lg={12}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
                maxHeight="400px"
              >
                <Grid item container direction="row" justifyContent="flex-end" alignItems="center">
                  <Grid item>
                    <Typography variant="button">
                      <IconButton>
                        <FavoriteIconOutlined />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }} onClick={() => handleClick(product)}>
                    <Img src={product.thumbnail} />
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="body1" component="div" flexGrow="1" textAlign="center">
                    {product.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="body2">
                    Price • {product.price} €
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="text.secondary">
                    ID: {product.id}
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
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
