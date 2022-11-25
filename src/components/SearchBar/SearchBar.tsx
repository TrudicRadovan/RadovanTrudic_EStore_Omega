import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { useEffect, useState } from 'react';
import { SearchBarPropsType } from '../../types/SearchBarPropsType';
import useDebounce from '../../hooks/useDebounce';
import getAllData from '../../hooks/useGetAllData';

const SearchBar = ({ setFilteredData }: SearchBarPropsType) => {
  const [search, setSearch] = useState('');
  const searchWord = useDebounce(search, 1000);
  const { data: allProducts, loading, error } = getAllData();

  const handleFilter = (event: any) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (searchWord.trim() !== '' && allProducts != null) {
      const newFilter = allProducts.filter(
        value =>
          value.title.includes(searchWord.trim()) ||
          value.brand.includes(searchWord.trim()) ||
          value.category.includes(searchWord.trim())
      );
      setFilteredData(newFilter);
    } else {
      setFilteredData(null);
    }
  }, [searchWord]);

  return (
    <div className="search-bar">
      {allProducts && (
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <OutlinedInput
            type="text"
            onChange={handleFilter}
            placeholder="Search..."
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      )}
    </div>
  );
};

export default SearchBar;
