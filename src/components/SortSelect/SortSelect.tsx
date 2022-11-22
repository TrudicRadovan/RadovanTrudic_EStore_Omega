import { Box, FormControl, InputLabel, MenuItem, NativeSelect, Select, SvgIcon } from '@mui/material';
import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';

const SortSelect = () => {
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
          sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
          renderValue={value => {
            return (
              <Box sx={{ display: 'flex', gap: 1 }}>
                <>
                  <SvgIcon color="primary">
                    <SortIcon />
                  </SvgIcon>

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

export default SortSelect;
