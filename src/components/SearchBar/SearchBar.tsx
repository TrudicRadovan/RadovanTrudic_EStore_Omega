import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { SearchBarPropsType } from '../../types/SearchBarPropsType';
import useDebounce from '../../hooks/useDebounce';

const SearchBar = ({ setFilteredData, products }: SearchBarPropsType) => {
  const [search, setSearch] = useState('');
  const searchWord = useDebounce(search, 1000);

  const handleFilter = (event: any) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (searchWord.trim() !== '') {
      const newFilter = products.filter(
        value =>
          value.title.includes(searchWord.trim()) ||
          value.brand.includes(searchWord.trim()) ||
          value.category.includes(searchWord.trim())
      );
      setFilteredData(newFilter);
    } else {
      setFilteredData(products);
    }
  }, [searchWord]);

  return (
    <div className="search-bar">
      <FormControl sx={{ m: 1, width: '75ch', paddingLeft: 15, paddingBottom: 5 }} variant="outlined">
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
    </div>
  );
};

export default SearchBar;
