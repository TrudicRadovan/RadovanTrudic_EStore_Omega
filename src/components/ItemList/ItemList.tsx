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

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ItemList() {
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
        <Grid item lg={3} container>
          <Paper
            sx={{
              margin: 'auto',
              maxWidth: 200,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid item lg={12} container direction="column" justifyContent="center" alignItems="center" spacing={1}>
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
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src="https://www.ccarprice.com/products/Tesla-Model-S-Long-Range-Plus-2021.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name
                </Typography>
                <Typography gutterBottom variant="body2">
                  Price • 99,000 $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
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

        <Grid item lg={3} container>
          <Paper
            sx={{
              margin: 'auto',
              maxWidth: 200,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid item lg={12} container direction="column" justifyContent="center" alignItems="center" spacing={1}>
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
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src="https://www.ccarprice.com/products/Tesla-Model-S-Long-Range-Plus-2021.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name
                </Typography>
                <Typography gutterBottom variant="body2">
                  Price • 99,000 $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
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

        <Grid item lg={3} container>
          <Paper
            sx={{
              margin: 'auto',
              maxWidth: 200,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid item lg={12} container direction="column" justifyContent="center" alignItems="center" spacing={1}>
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
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src="https://www.ccarprice.com/products/Tesla-Model-S-Long-Range-Plus-2021.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name
                </Typography>
                <Typography gutterBottom variant="body2">
                  Price • 99,000 $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
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

        <Grid item lg={3} container>
          <Paper
            sx={{
              margin: 'auto',
              maxWidth: 200,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid item lg={12} container direction="column" justifyContent="center" alignItems="center" spacing={1}>
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
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src="https://www.ccarprice.com/products/Tesla-Model-S-Long-Range-Plus-2021.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name
                </Typography>
                <Typography gutterBottom variant="body2">
                  Price • 99,000 $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
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

        <Grid item lg={3} container>
          <Paper
            sx={{
              margin: 'auto',
              maxWidth: 200,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid item lg={12} container direction="column" justifyContent="center" alignItems="center" spacing={1}>
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
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src="https://www.ccarprice.com/products/Tesla-Model-S-Long-Range-Plus-2021.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name
                </Typography>
                <Typography gutterBottom variant="body2">
                  Price • 99,000 $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
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

        <Grid item lg={3} container>
          <Paper
            sx={{
              margin: 'auto',
              maxWidth: 200,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid item lg={12} container direction="column" justifyContent="center" alignItems="center" spacing={1}>
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
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src="https://www.ccarprice.com/products/Tesla-Model-S-Long-Range-Plus-2021.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name
                </Typography>
                <Typography gutterBottom variant="body2">
                  Price • 99,000 $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
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

        <Grid item lg={3} container>
          <Paper
            sx={{
              margin: 'auto',
              maxWidth: 200,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid item lg={12} container direction="column" justifyContent="center" alignItems="center" spacing={1}>
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
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src="https://www.ccarprice.com/products/Tesla-Model-S-Long-Range-Plus-2021.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name
                </Typography>
                <Typography gutterBottom variant="body2">
                  Price • 99,000 $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
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

        <Grid item lg={3} container>
          <Paper
            sx={{
              margin: 'auto',
              maxWidth: 200,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid item lg={12} container direction="column" justifyContent="center" alignItems="center" spacing={1}>
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
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src="https://www.ccarprice.com/products/Tesla-Model-S-Long-Range-Plus-2021.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name
                </Typography>
                <Typography gutterBottom variant="body2">
                  Price • 99,000 $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
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

        <Grid item lg={3} container>
          <Paper
            sx={{
              margin: 'auto',
              maxWidth: 200,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid item lg={12} container direction="column" justifyContent="center" alignItems="center" spacing={1}>
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
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src="https://www.ccarprice.com/products/Tesla-Model-S-Long-Range-Plus-2021.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name
                </Typography>
                <Typography gutterBottom variant="body2">
                  Price • 99,000 $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
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

        <Grid item lg={3} container>
          <Paper
            sx={{
              margin: 'auto',
              maxWidth: 200,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid item lg={12} container direction="column" justifyContent="center" alignItems="center" spacing={1}>
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
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src="https://www.ccarprice.com/products/Tesla-Model-S-Long-Range-Plus-2021.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name
                </Typography>
                <Typography gutterBottom variant="body2">
                  Price • 99,000 $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
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

        <Grid item lg={3} container>
          <Paper
            sx={{
              margin: 'auto',
              maxWidth: 200,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid item lg={12} container direction="column" justifyContent="center" alignItems="center" spacing={1}>
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
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src="https://www.ccarprice.com/products/Tesla-Model-S-Long-Range-Plus-2021.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name
                </Typography>
                <Typography gutterBottom variant="body2">
                  Price • 99,000 $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
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

        <Grid item lg={3} container>
          <Paper
            sx={{
              margin: 'auto',
              maxWidth: 200,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid item lg={12} container direction="column" justifyContent="center" alignItems="center" spacing={1}>
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
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src="https://www.ccarprice.com/products/Tesla-Model-S-Long-Range-Plus-2021.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name
                </Typography>
                <Typography gutterBottom variant="body2">
                  Price • 99,000 $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
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
      </Grid>
    </Paper>
  );
}
