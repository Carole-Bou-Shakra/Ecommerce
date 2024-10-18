// src/Components/ProductGrid.jsx

import React from 'react';
import './ProductGrid.css'; // Import CSS for styling the grid

const ProductGrid = ({ products, addToCart }) => {
  return (
    <div className="product-grid-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => addToCart(product.id)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
