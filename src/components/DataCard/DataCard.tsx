import './DataCard.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ShoppingCartIconOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import { DataCardPropsType } from '../../types/DataCardPropsType';
import { useNavigate } from 'react-router-dom';
import FavouritesButton from '../FavouritesButton/FavouritesButton';
import UserContext from '../../contexts/UserContext';
import addShoppingCart from '../../services/shoppingCartSevice/addShoppingCart';
import ProductDTO from '../../dto/ProductDTO';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function DataCard({ product }: DataCardPropsType) {
  const navigate = useNavigate();
  const { setState, state } = React.useContext<{ setState: any; state: any }>(UserContext);

  function handleClickShowProduct(item: any) {
    navigate(`/details/${item.id}`);
  }

  function handleClickAddToCart(product: ProductDTO) {
    if (state == null) {
      navigate(`/login`);
      alert('You need to be logged in to continue shopping.');
    } else {
      addShoppingCart(state.id, product);
    }
  }

  return (
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
            <FavouritesButton />
          </Grid>
        </Grid>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }} onClick={() => handleClickShowProduct(product)}>
            <Img src={product.thumbnail} />
          </ButtonBase>
        </Grid>
        <Grid item>
          <Typography
            sx={{ maxWidth: '170px', height: '50px' }}
            gutterBottom
            variant="body1"
            component="div"
            flexGrow="1"
            textAlign="center"
            overflow="hidden"
          >
            {product.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="body1">
            <strong>{product.price} €</strong>
          </Typography>
        </Grid>
        <Grid item paddingBottom={2}>
          <Button
            variant="contained"
            startIcon={<ShoppingCartIconOutlined />}
            sx={{ color: 'white', background: '#00bbff' }}
            onClick={() => handleClickAddToCart(product)}
          >
            Add to cart
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
