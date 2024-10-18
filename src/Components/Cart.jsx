import React from 'react';
import './Cart.css'; // Optional CSS for cart styling

const Cart = ({ cart, removeFromCart, closeCart }) => {
  const cartItems = Object.values(cart); // Convert cart object into an array

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <button className="close-cart-button" onClick={closeCart}>
        Close Cart
      </button>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>Price per item: ${item.price.toFixed(0)}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(0)}</p>
            <button
              className="remove-cart-button"
              onClick={() => removeFromCart(item.id)}
            >
              Remove 1 from Cart
            </button>
          </div>
        </div>
      ))}
      <h3>
        Cart Total: $
        {cartItems
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(0)}
      </h3>
    </div>
  );
};

export default Cart;
