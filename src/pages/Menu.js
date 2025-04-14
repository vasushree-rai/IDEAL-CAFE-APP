import React, { useState } from 'react';
import '../styles/App.css';
import { useCart } from '../context/CartContext';
import DishCard from '../components/DishCard';

const menuItems = [
  {
    name: 'Cutlets',
    description: 'Warm and comforting.',
    price: 70,
    image: '/images/cutlet.jpg',category: 'Snacks'
  },
  {
    name: 'Fries',
    description: 'Crisped to perfection.',
    price: 80,
    image: '/images/fries.jpeg',category: 'Snacks'
  },
  {
    name: 'Tea',
    description: 'kadak.',
    price: 30,
    image: '/images/tea.jpg',category: 'Beverages'
  },
  {
    name: 'Coffee',
    description: 'fragrant and just right.',
    price: 30,
    image: '/images/coffee.jpeg',category: 'Beverages'
  },
  {
    name: 'Fruit juice',
    description: 'any fruit of choice.',
    price: 80,
    image: '/images/juice.jpg',category: 'Beverages'
  },
  {
    name: 'I-Shakes',
    description: 'any flavour of choice.',
    price: 100,
    image: '/images/milkshake.jpeg',category: 'Beverages'
  },
  {
    name: 'Parfait',
    description: 'Fruity and cool.',
    price: 160,
    image: '/images/parfait.jpg', category: 'Ice Creams'
  },
  {
    name: 'Tiramisu',
    description: 'Chocolaty coffee dream.',
    price: 180,
    image: '/images/tiramisu.jpg', category: 'Ice Creams'
  },
  {
    name: 'Grilled Sandwich',
    description: 'Cheesy and crunchy.',
    price: 100,
    image: '/images/sandwich.jpg',category: 'Snacks'
  },
  {
    name: 'Chocolate Lava Cake',
    description: 'Warm and gooey.',
    price:100,
    image: '/images/lava.jpg',category: 'Desserts'
  },
  {
    name: 'Carrot halwa',
    description: 'served hot with icecream.',
    price:80,
    image: '/images/halwa.jpeg',category: 'Desserts'
  },
  { name: 'Gadbad Ice Cream', 
    description: 'Popular layered ice cream.', 
    price: 160, 
    image: '/images/gadbad.jpg',
     category: 'Ice Creams' 
    },
];

const Menu = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const { addToCart } = useCart();

  const filteredDishes = menuItems.filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(search.toLowerCase()) || dish.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || dish.category === filter;
    return matchesSearch && matchesFilter;
  });
  return (
    <div className="menu-container">
      <h2 className="text-center text-purple mb-4">Our Signature Menu</h2>

      <div className="menu-controls d-flex justify-content-between align-items-center mb-4 gap-3 flex-wrap">
        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control search-bar"
          style={{ maxWidth: '300px' ,color: '#7c2d75',border:'solid',borderWidth:'2px'}}
        />
       <select
          onChange={(e) => setFilter(e.target.value)}
          className="form-select category-filter"
          style={{ maxWidth: '200px', backgroundColor: '#f8f9fa', color: '#7c2d75', fontWeight: 'bold', border:'solid',borderWidth:'2px'}}
        >
          <option value="All">All</option>
          <option value="Ice Creams">Ice Creams</option>
          <option value="Desserts">Desserts</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
        </select>
      </div>

      <div className="menu-grid">
        {filteredDishes.length ? (
          filteredDishes.map((dish, index) => (
            <DishCard
              key={index}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              image={dish.image}
              addToCart={() => addToCart(dish)}
            />
          ))
        ) : (
          <p className="text-center text-muted mt-4">No dishes found.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;