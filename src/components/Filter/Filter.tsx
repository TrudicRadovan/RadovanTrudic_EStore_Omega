/* eslint-disable */
import {
  Box,
  Button,
  Collapse,
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
import React, { useEffect, useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import useDebounce from '../../hooks/useDebounce';
import getAllData from '../../hooks/useGetAllData';
import { SearchBarPropsType } from '../../types/SearchBarPropsType';
import ProductDTO from '../../dto/ProductDTO';
import filterConfig from '../../config/filterConfig';
import { useAppSelector } from '../../redux/app/hooks';
import { selectFavorites } from '../../redux/features/favorites/favoritesSlice';

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
  const [filter, setFilter] = useState(false);
  const filterKey = useDebounce(filter, 300);
  const { data: allProducts, loading, error } = getAllData();
  const [filteredBrands, setFilteredBrands] = useState<any[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<any[]>([]);
  const [filteredMinPrice, setFilteredMinPrice] = useState(0);
  const [filteredMaxPrice, setFilteredMaxPrice] = useState(100000);
  const favorites = useAppSelector(selectFavorites);
  const [favoritesSwitch, setFavoritesSwitch] = useState(false);

  useEffect(() => {
    console.log('Favorites:', favorites);
    console.log('Brands:', filteredBrands);
    console.log('Categories:', filteredCategories);
    console.log('MinPrice:', filteredMinPrice);
    console.log('MaxPrice:', filteredMaxPrice);
    if (
      favoritesSwitch == false &&
      filteredBrands.length == 0 &&
      filteredCategories.length == 0 &&
      filteredMinPrice == 0 &&
      filteredMaxPrice == 100000
    ) {
      setFilteredData(null);
    } else {
      let newFilter: ProductDTO[] | undefined = [];
      let newFilter1: ProductDTO[] | undefined = [];
      let newFilter2: ProductDTO[] | undefined = [];

      if (filteredBrands.length > 0 && filteredCategories.length > 0) {
        newFilter1 = allProducts?.filter(value => filteredBrands.includes(value.brand));
        newFilter2 = allProducts?.filter(value => filteredCategories.includes(value.category));
        newFilter = newFilter1?.filter(value => newFilter2?.includes(value));
      } else if (filteredBrands.length > 0) {
        newFilter = allProducts?.filter(value => filteredBrands.includes(value.brand));
      } else if (filteredCategories.length > 0) {
        newFilter = allProducts?.filter(value => filteredCategories.includes(value.category));
      }

      if (
        newFilter?.length != 0 ||
        (newFilter?.length == 0 && (filteredBrands.length > 0 || filteredCategories.length > 0))
      ) {
        newFilter = newFilter?.filter(value => value.price > filteredMinPrice && value.price < filteredMaxPrice);
      } else {
        newFilter = allProducts?.filter(value => value.price > filteredMinPrice && value.price < filteredMaxPrice);
      }

      if (favoritesSwitch) {
        newFilter = newFilter?.filter(value => favorites.includes(value.id));
      }

      setFilteredData([...newFilter!]);
    }
  }, [filterKey]);

  useEffect(() => {
    let min = 100000;
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

  const handleClickFilter = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    if (filter) {
      setFilter(false);
    } else {
      setFilter(true);
    }
  };

  const handleClickListItem = (setOpenBasic: any, openBasic: any) => {
    setOpenBasic(!openBasic);
  };

  const handleCheckboxCategory = (event: any) => {
    if (!filteredCategories.includes(event.target.value)) {
      //filteredCategories.push(event.target.value);
      setFilteredCategories([...filteredCategories, event.target.value]);
    } else {
      const newFilter = filteredCategories?.filter(value => value != event.target.value);
      setFilteredCategories([...newFilter!]);
    }
  };

  const handleCheckboxBrand = (event: any) => {
    if (!filteredBrands.includes(event.target.value)) {
      //filteredBrands.push(event.target.value);
      setFilteredBrands([...filteredBrands, event.target.value]);
    } else {
      const newFilter = filteredBrands?.filter(value => value != event.target.value);
      setFilteredBrands([...newFilter!]);
    }
  };

  const handleSwitchFavorites = (event: any) => {
    setFavoritesSwitch(event.target.checked);
  };

  const options = filterConfig(
    setOpen,
    open,
    setOpen1,
    open1,
    setOpen2,
    open2,
    setOpen3,
    open3,
    categories,
    handleCheckboxCategory,
    brands,
    handleCheckboxBrand,
    minPrice,
    setFilteredMinPrice,
    maxPrice,
    setFilteredMaxPrice,
    filteredBrands,
    filteredCategories,
    filteredMinPrice,
    filteredMaxPrice,
    handleSwitchFavorites,
    favoritesSwitch
  );

  const list = (anchor: Anchor) => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }} role="presentation">
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Typography fontSize={28} sx={{ marginTop: 5, marginBottom: 1 }}>
          Filter
        </Typography>
        <List>
          {options.map((option: any) => (
            <ListItem key={option.name} disablePadding>
              <Grid container direction="column" justifyContent="center" alignItems="center">
                <ListItemButton
                  onClick={() => handleClickListItem(option.callback, option.open)}
                  sx={{ minWidth: 200 }}
                >
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
        <Button variant="contained" sx={{ marginTop: 5 }} onClick={handleClickFilter('right', true)}>
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
