import { Box, FormControl, MenuItem, Select, SvgIcon } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SortIcon from '@mui/icons-material/Sort';
import getAllData from '../../hooks/useGetAllData';
import { SearchBarPropsType } from '../../types/SearchBarPropsType';
import useDebounce from '../../hooks/useDebounce';

const SortSelect = ({ setFilteredData }: SearchBarPropsType) => {
  const [sort, setSort] = useState('');
  const sortKey = useDebounce(sort, 1000);
  const { data: allProducts, loading, error } = getAllData();

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
      value: 'Higher Rating',
      label: 'Higher Rating',
    },
    {
      value: 'Lower Rating',
      label: 'Lower Rating',
    },
    {
      value: '',
      label: 'None',
    },
  ];

  const handleSort = (event: any) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    if (sort != '') {
      const newFilter = allProducts?.sort((a, b) => {
        const valueA = sort.includes('Rating') ? a.rating : a.price;
        const valueB = sort.includes('Rating') ? b.rating : b.price;

        if (sort.includes('Higher')) {
          if (valueA > valueB) {
            return -1;
          }
          if (valueA < valueB) {
            return 1;
          }
          return 0;
        } else {
          if (valueA < valueB) {
            return -1;
          }
          if (valueA > valueB) {
            return 1;
          }
          return 0;
        }
      });
      setFilteredData([...newFilter!]);
    } else {
      setFilteredData(null);
    }
  }, [sortKey]);

  return (
    <>
      <FormControl>
        <Select
          defaultValue=""
          displayEmpty
          onChange={handleSort}
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
