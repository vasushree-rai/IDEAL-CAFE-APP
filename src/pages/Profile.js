import React from 'react';
import '../styles/App.css';

const Profile = () => {
  const orderHistory = [
    {
      id: 'ORD12345',
      date: '2024-11-20',
      items: ['Gadbad Ice Cream', 'Cutlets'],
      total: 400,
    },
    {
      id: 'ORD12346',
      date: '2024-12-05',
      items: ['Parfait'],
      total: 180,
    },
  ];

  return (
    <div className="profile-container container py-5">
      <div className="profile-card">
        <h2 className="text-purple fw-bold mb-4">Your Profile</h2>
        <p><strong>Name:</strong> Vasushree</p>
        <p><strong>Email:</strong> vasu@example.com</p>
        <p><strong>Member since:</strong> 2024</p>
      </div>

      <div className="order-history mt-5">
        <h4 className="text-purple fw-semibold mb-3">Order History</h4>
        {orderHistory.length === 0 ? (
          <p>No past orders found.</p>
        ) : (
          <ul className="list-group">
            {orderHistory.map((order) => (
              <li key={order.id} className="list-group-item mb-3">
                <strong>Order ID:</strong> {order.id} <br />
                <strong>Date:</strong> {order.date} <br />
                <strong>Items:</strong> {order.items.join(', ')} <br />
                <strong>Total:</strong> ₹{order.total}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;

  