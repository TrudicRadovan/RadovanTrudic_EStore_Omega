import SearchBar from '../../components/SearchBar/SearchBar';
import ItemList from '../../components/ItemList/ItemList';
import React, { useState } from 'react';
import './Home.css';
import getAllData from '../../hooks/useGetAllData';
import useGetFewProducts from '../../hooks/useGetFewProducts';
import SortSelect from '../../components/SortSelect/SortSelect';
import Filter from '../../components/Filter/Filter';
import { Grid } from '@mui/material';

const Home = () => {
  const { data: products, loading, error } = getAllData(); //useGetFewProducts();
  const [filteredData, setFilteredData] = useState(products);

  return (
    <div className="home">
      <h1>Home</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {products && <SearchBar setFilteredData={setFilteredData} products={products} />}
      {products && (
        <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center" marginBottom={1}>
          <Grid item container maxWidth={'50%'} direction="column" justifyContent="flex-start" alignItems="flex-start">
            <SortSelect />
          </Grid>
          <Grid item container maxWidth={'50%'} direction="column" justifyContent="flex-start" alignItems="flex-end">
            <Filter />
          </Grid>
        </Grid>
      )}
      {products && !filteredData && <ItemList products={products} />}
      {products && filteredData && <ItemList products={filteredData} />}
    </div>
  );
};

export default Home;
