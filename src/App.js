import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ProductGrid from './Components/ProductGrid';
import Footer from './Components/Footer'; // Import the Footer component
import bedroom from './Images/bedroom.jpg';
import background from './Images/background.jpg';
import bed from './Images/bed.jpg';
import kitchen from './Images/kitchen.jpeg';
import diningroom from './Images/dinigroom.jpeg';
import room from './Images/room.jpg';

const App = () => {
  const [cart, setCart] = useState({});
  const [isCartVisible, setIsCartVisible] = useState(false); // State to control cart visibility

  const products = [
    { id: 1, name: 'Product 1', description: 'This is Product 1', image: bedroom, price: 90.99 },
    { id: 2, name: 'Product 2', description: 'This is Product 2', image: background, price: 250.99 },
    { id: 3, name: 'Product 3', description: 'This is Product 3', image: bed, price: 100 },
    { id: 4, name: 'Product 4', description: 'This is Product 4', image: kitchen, price: 400.59 },
    { id: 5, name: 'Product 5', description: 'This is Product 5', image: diningroom, price: 59.99 },
    { id: 6, name: 'Product 6', description: 'This is Product 6', image: room, price: 69.99 },
  ];

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      // Check if the product is already in the cart
      if (updatedCart[productId]) {
        updatedCart[productId].quantity += 1; // Increment quantity
      } else {
        const product = products.find((p) => p.id === productId);
        updatedCart[productId] = {
          ...product,
          quantity: 1, // Set initial quantity to 1
        };
      }

      return updatedCart;
    });

    setIsCartVisible(true); // Show cart when an item is added
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      if (updatedCart[productId].quantity > 1) {
        updatedCart[productId].quantity -= 1; // Decrease quantity
      } else {
        delete updatedCart[productId]; // Remove product from cart if quantity is 0
      }

      return updatedCart;
    });
  };


  const closeCart = () => {
    setIsCartVisible(false); // Hide the cart
  };

  return (
    <div className="App">
      <Home toggleCart={() => setIsCartVisible(!isCartVisible)} />
      <h1>Featured Products</h1>
      <ProductGrid products={products} addToCart={addToCart} />
      {isCartVisible && (
        <Cart cart={cart} removeFromCart={removeFromCart} closeCart={closeCart} />
      )}
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default App;
