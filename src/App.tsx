import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Favourites from './pages/Favourites/Favourites';
import UserProfile from './pages/UserProfile/UserProfile';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Login from './pages/Login/Login';
import { UserContextProvider } from './contexts/UserContext';
import { AxiosInterceptor } from './config/axiosConfig';
import NotFound from './pages/NotFound/NotFound';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from './helpers/muiTheme';

function App() {
  return (
    <Router>
      <UserContextProvider>
        <ThemeProvider theme={muiTheme()}>
          <AxiosInterceptor>
            <div className="App">
              <Navbar />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/chat" element={<ChatRoom />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/cart" element={<ShoppingCart />} />
                  <Route path="/favourites" element={<Favourites />} />
                  <Route path="/user" element={<UserProfile />} />
                  <Route path="/details/:id" element={<ProductDetails />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </AxiosInterceptor>
        </ThemeProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
