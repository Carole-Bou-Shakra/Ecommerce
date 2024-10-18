import React from 'react';
import './Features.css';
import image1 from '../Images/image1.png';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';

const Features = () => {
  return (
    <div className="features-container">
      <div className="product-highlight">
        <h2>Crafted with Excellent Material</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src={image1} alt="Chair 1" />
            <h3>Classic Chair</h3>
            <p>$99</p>
          </div>
          <div className="product-card">
            <img src={image2} alt="Chair 2" />
            <h3>Modern Chair</h3>
            <p>$129</p>
          </div>
          <div className="product-card">
            <img src={image3} alt="Chair 3" />
            <h3>Elegant Chair</h3>
            <p>$149</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
