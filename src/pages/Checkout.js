import React, { useState } from 'react';
import '../styles/App.css';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [details, setDetails] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Successful! Thank you for your order.');
  };

  return (
    <div className="checkout-page">
      <h2 className="text-center text-purple mb-4">Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={details.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={details.address}
          onChange={handleChange}
          required
        />

        <div className="payment-section">
          <label>Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="cod">Cash on Delivery</option>
          </select>

          {paymentMethod === 'card' && (
            <>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={details.cardNumber}
                onChange={handleChange}
                required
              />
              <div className="card-details">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={details.expiry}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={details.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {paymentMethod === 'upi' && (
            <input
              type="text"
              name="upiId"
              placeholder="Enter UPI ID"
              onChange={handleChange}
              required
            />
          )}
        </div>

        <button type="submit" className="checkout-btn">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;

