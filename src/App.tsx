import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Favourites from './pages/Favourites/Favourites';
import UserProfile from './pages/UserProfile/UserProfile';
import React from 'react';
import getAllData from './services/getAllData';

function App() {
  getAllData();

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/user" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
