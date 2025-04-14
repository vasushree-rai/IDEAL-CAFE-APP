import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import OffersSection from './components/OffersSection';
import Cart from './components/Cart';
import FlavorOfTheDay from './components/FlavorOfTheDay';
import Rating from './components/Rating';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import { CartProvider } from './context/CartContext';

import './styles/App.css';

function App() {
 
  const cartItems = [
    { name: 'Burger', qty: 2, price: 5 },
    { name: 'Fries', qty: 1, price: 3 },
  ];

  const handleCheckout = () => {
    window.location.href = '/checkout';
  };

  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroCarousel />
              <OffersSection />
              <FlavorOfTheDay />
              <Rating />
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart items={cartItems} onCheckout={handleCheckout} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;