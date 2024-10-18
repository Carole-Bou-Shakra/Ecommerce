// src/Components/Home.jsx
import React from 'react';
import './Home.css';
import homepageImage from '../Images/homepage.jpg'; // Update with your actual image path
import Features from './Features'; // Import the new Features component

const Home = ({ toggleCart }) => {
  return (
    <div className="home-container">
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

      <div className="main-content-container">
        <div className="main-content">
          <h1>Modern Interior Design Studio</h1>
          <p>
            Donec vitae odio quis nisi dapibus malesuada. Nullam ac aliquet velit. 
            Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="buttons">
            <button className="shop-now-button">Shop Now</button>
            <button className="explore-button">Explore</button>
          </div>
        </div>
        
        <img src={homepageImage} alt="Homepage" className="side-image" />
      </div>

      {/* Add the Features component here */}
      <Features />
    </div>
  );
};

export default Home;
