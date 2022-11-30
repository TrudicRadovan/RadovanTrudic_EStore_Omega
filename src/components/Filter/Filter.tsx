/* eslint-disable */
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  FormControlLabel,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CategoryIcon from '@mui/icons-material/Category';
import DatasetIcon from '@mui/icons-material/Dataset';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RangeSlider from '../RangeSlider/RangeSlider';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Filter() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClick = (setOpenBasic: any, openBasic: any) => {
    setOpenBasic(!openBasic);
  };

  const FilterOptions = [
    {
      name: 'Favourites',
      icon: (
        <>
          <FavoriteIcon></FavoriteIcon>
        </>
      ),
      callback: setOpen,
      open: open,
      items: <></>,
    },
    {
      name: 'Category',
      icon: (
        <>
          <CategoryIcon></CategoryIcon>
        </>
      ),
      callback: setOpen1,
      open: open1,
      items: (
        <>
          <FormControlLabel control={<Checkbox />} label="smartphones" labelPlacement="end" />
          <FormControlLabel control={<Checkbox />} label="laptops" labelPlacement="end" />
          <FormControlLabel control={<Checkbox />} label="fragrances" labelPlacement="end" />
          <FormControlLabel control={<Checkbox />} label="groceries" labelPlacement="end" />
          <FormControlLabel control={<Checkbox />} label="skincare" labelPlacement="end" />
          <FormControlLabel control={<Checkbox />} label="furniture" labelPlacement="end" />
        </>
      ),
    },
    {
      name: 'Brand',
      icon: (
        <>
          <DatasetIcon></DatasetIcon>
        </>
      ),
      callback: setOpen2,
      open: open2,
      items: (
        <>
          <FormControlLabel control={<Checkbox />} label="Apple" labelPlacement="end" />
          <FormControlLabel control={<Checkbox />} label="Samsung" labelPlacement="end" />
          <FormControlLabel control={<Checkbox />} label="Xiaomi" labelPlacement="end" />
        </>
      ),
    },
    {
      name: 'Price',
      icon: (
        <>
          <MonetizationOnIcon></MonetizationOnIcon>
        </>
      ),
      callback: setOpen3,
      open: open3,
      items: (
        <>
          <RangeSlider></RangeSlider>
        </>
      ),
    },
  ];

  const list = (anchor: Anchor) => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }} role="presentation">
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Typography fontSize={28} sx={{ marginTop: 5, marginBottom: 1 }}>
          Filter
        </Typography>
        <List>
          {FilterOptions.map((option, index) => (
            <ListItem key={option.name} disablePadding>
              <Grid container direction="column" justifyContent="center" alignItems="center">
                <ListItemButton onClick={() => handleClick(option.callback, option.open)} sx={{ minWidth: 200 }}>
                  <ListItemIcon>{option.icon}</ListItemIcon>
                  <ListItemText primary={option.name} />
                  {option.open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={option.open} timeout="auto" unmountOnExit>
                  <Grid item container direction="column" justifyContent="flex-start" alignItems="flex-start">
                    {option.items}
                  </Grid>
                </Collapse>
              </Grid>
            </ListItem>
          ))}
        </List>
        <Button variant="contained" sx={{ marginTop: 5 }} onClick={toggleDrawer(anchor, false)}>
          Apply Filters
        </Button>
      </Grid>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment>
          <IconButton color="primary" size="large" onClick={toggleDrawer('right', true)}>
            <FilterListIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}
