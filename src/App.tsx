import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Favourites from './pages/Favourites/Favourites';
import UserProfile from './pages/UserProfile/UserProfile';
import React from 'react';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Login from './pages/Login/Login';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <Router>
      <UserContextProvider>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/user" element={<UserProfile />} />
              <Route path="/details/:id" element={<ProductDetails />} />
            </Routes>
          </div>
        </div>
      </UserContextProvider>
    </Router>
  );
}

export default App;
