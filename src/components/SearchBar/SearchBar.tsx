import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
//import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <FormControl
        sx={{ m: 1, width: '75ch', paddingLeft: 15, paddingBottom: 5, borderColor: 'red !important' }}
        variant="outlined"
      >
        <OutlinedInput
          sx={{ borderColor: 'red !important' }}
          id="outlined-adornment-password"
          type="text"
          placeholder="Search..."
          //type={values.showPassword ? 'text' : 'password'}
          //value={values.password}
          //onChange={handleChange('password')}
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

/*

<div className="search-inputs">
        <Input
          id="outlined-adornment-weight"
          type="text"
          placeholder="Search..."
          sx={{ m: 5, width: 'auto' }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
      </div>
*/

export default SearchBar;
