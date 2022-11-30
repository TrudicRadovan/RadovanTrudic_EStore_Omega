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
  Switch,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CategoryIcon from '@mui/icons-material/Category';
import DatasetIcon from '@mui/icons-material/Dataset';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RangeSlider from '../RangeSlider/RangeSlider';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import useDebounce from '../../hooks/useDebounce';
import getAllData from '../../hooks/useGetAllData';
import { SearchBarPropsType } from '../../types/SearchBarPropsType';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Filter({ setFilteredData }: SearchBarPropsType) {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [brands, setBrands] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(0);
  const [filter, setFilter] = useState('');
  const filterKey = useDebounce(filter, 1000);
  const { data: allProducts, loading, error } = getAllData();

  useEffect(() => {
    if (filter != '') {
      const newFilter = allProducts?.filter(
        value => value.title.includes('S') || value.brand.includes('S') || value.category.includes('S')
      );
      setFilteredData([...newFilter!]);
    } else {
      setFilteredData(null);
    }
  }, [filterKey]);

  useEffect(() => {
    let min = 1000;
    let max = 0;

    allProducts?.forEach(product => {
      if (!brands.includes(product.brand)) {
        brands.push(product.brand);
      }
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
      if (min > product.price) {
        min = product.price;
      }
      if (max < product.price) {
        max = product.price;
      }
    });

    setMinPrice(min);
    setMaxPrice(max);
  }, [allProducts]);

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
      items: (
        <>
          <Switch></Switch>
        </>
      ),
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
          {categories.map(category => (
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={category}
              labelPlacement="end"
              key={category}
              sx={{ maxWidth: 200, marginLeft: 5 }}
            />
          ))}
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
          {brands.map(brand => (
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={brand}
              labelPlacement="end"
              key={brand}
              sx={{ maxWidth: 200, marginLeft: 9 }}
            />
          ))}
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
          <RangeSlider min={minPrice} max={maxPrice}></RangeSlider>
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
          {FilterOptions.map(option => (
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
