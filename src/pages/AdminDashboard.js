import React, { useState } from 'react';
import '../styles/App.css';

const AdminDashboard = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Tiramisu', price: 180 },
    { id: 2, name: 'Cutlets', price: 70 },
    { id: 3, name: 'Parfait', price: 160 },
    { id: 4, name: 'Gadbad', price: 160 },
  ]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const addMenuItem = () => {
    if (newItem.name && newItem.price) {
      const updatedItems = [...menuItems, { ...newItem, id: Date.now() }];
      setMenuItems(updatedItems);
      setNewItem({ name: '', price: '' });
    }
  };

  const removeMenuItem = (id) => {
    const updatedItems = menuItems.filter(item => item.id !== id);
    setMenuItems(updatedItems);
  };

  return (
    <div className="admin-dashboard container py-5">
      <div className="dashboard-card">
        <h2 className="text-purple fw-bold mb-4">Admin Dashboard</h2>
        <p className="mb-4">Manage menu, offers, orders, and user profiles.</p>

        <div className="mb-4">
          <h4 className="text-purple">Add New Menu Item</h4>
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={newItem.name}
            onChange={handleChange}
            className="form-control mb-2"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newItem.price}
            onChange={handleChange}
            className="form-control mb-2"
          />
          <button className="btn btn-primary" onClick={addMenuItem}>Add Item</button>
        </div>

        <div className="mb-4">
          <h4 className="text-purple">Current Menu Items</h4>
          <ul className="list-group">
            {menuItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - ₹{item.price}
                <button className="btn btn-sm btn-danger" onClick={() => removeMenuItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

