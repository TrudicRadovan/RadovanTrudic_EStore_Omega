import { Box, FormControl, InputLabel, MenuItem, NativeSelect, Select, SvgIcon } from '@mui/material';
import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';

const FilterSelect = () => {
  const options = [
    {
      value: 'Higher Price',
      label: 'Higher Price',
    },
    {
      value: 'Lower Price',
      label: 'Lower Price',
    },
    {
      value: 'Rating',
      label: 'Rating',
    },
    {
      value: '',
      label: 'None',
    },
  ];

  return (
    <>
      <FormControl>
        <Select
          defaultValue=""
          displayEmpty
          renderValue={value => {
            return (
              <Box sx={{ display: 'flex', gap: 1 }}>
                <>
                  <SvgIcon color="primary">
                    <SortIcon />
                  </SvgIcon>
                  <p>Sort by:</p>
                  {value}
                </>
              </Box>
            );
          }}
        >
          {options.map(option => (
            <MenuItem key={option.value} value={option.value || ''}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default FilterSelect;
