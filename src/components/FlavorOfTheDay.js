import React from 'react';
import '../styles/App.css';


const FlavorOfTheDay = () => {
  const flavor = {
    name: "Parfait",
    image: "/images/flavor.jpg",
    desc: "Limited edition – creamy, dreamy, and fruity.",
  };

  return (
    <div className="flavor-container animate-fade-in">
      <h2 className="flavor-title">Flavor of the Day</h2>
      <div className="flavor-card">
        <img
          src={flavor.image}
          alt={`Flavor of the Day: ${flavor.name}`}
          className="flavor-image"
        />
        <h4 className="flavor-name">{flavor.name}</h4>
        <p className="flavor-desc">{flavor.desc}</p>
      </div>
    </div>
  );
};

export default FlavorOfTheDay;

