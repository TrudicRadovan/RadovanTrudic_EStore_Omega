import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SvgIcon,
} from '@mui/material';
import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';

const Filter = () => {
  return (
    <>
      <IconButton color="primary">
        <FilterListIcon />
      </IconButton>
    </>
  );
};

export default Filter;
