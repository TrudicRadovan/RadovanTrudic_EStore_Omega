import SearchBar from '../../components/SearchBar/SearchBar';
import ItemList from '../../components/ItemList/ItemList';
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <SearchBar />
      <ItemList></ItemList>
    </div>
  );
};

export default Home;
