import { Switch, FormControlLabel, Checkbox } from '@mui/material';
import RangeSlider from '../components/RangeSlider/RangeSlider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CategoryIcon from '@mui/icons-material/Category';
import DatasetIcon from '@mui/icons-material/Dataset';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import React, { useEffect, useState } from 'react';

export default function filterConfig(
  setOpen: any,
  open: any,
  setOpen1: any,
  open1: any,
  setOpen2: any,
  open2: any,
  setOpen3: any,
  open3: any,
  categories: any,
  handleCheckboxCategory: any,
  brands: any,
  handleCheckboxBrand: any,
  minPrice: any,
  setFilteredMinPrice: any,
  maxPrice: any,
  setFilteredMaxPrice: any,
  filteredBrands: any,
  filteredCategories: any,
  filteredMinPrice: any,
  filteredMaxPrice: any
): any {
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
          {categories.map((category: any) => (
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  value={category}
                  onChange={handleCheckboxCategory}
                  checked={filteredCategories.includes(category)}
                />
              }
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
          {brands.map((brand: any) => (
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  value={brand}
                  onChange={handleCheckboxBrand}
                  checked={filteredBrands.includes(brand)}
                />
              }
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
          <RangeSlider
            min={minPrice}
            max={maxPrice}
            filteredMinPrice={filteredMinPrice}
            setFilteredMinPrice={setFilteredMinPrice}
            filteredMaxPrice={filteredMaxPrice}
            setFilteredMaxPrice={setFilteredMaxPrice}
          ></RangeSlider>
        </>
      ),
    },
  ];

  return FilterOptions;
}
