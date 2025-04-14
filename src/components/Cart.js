
import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/App.css'; 

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2 className="text-center text-purple mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 😢</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <div>
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Total: ₹{item.price * item.quantity}</p>
                </div>
                <button
                  className="btn-remove"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button className="btn-clear" onClick={clearCart}>Clear Cart</button>
            <a href="/checkout" className="btn-checkout">Proceed to Checkout</a>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
