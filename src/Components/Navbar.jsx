// src/Components/Navbar.js
import React from 'react';
import './Navbar.css'; // Optional: Import styles for the Navbar

const Navbar = ({ toggleCart }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">ShopWebsite</div>
      <ul className="navbar-links">
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="cart-button" onClick={toggleCart}>
        🛒 Cart
      </button>
    </nav>
  );
};

export default Navbar;
