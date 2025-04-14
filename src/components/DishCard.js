import React from 'react';
import { Card, Button } from 'react-bootstrap';

const DishCard = ({ name, description, price, image, addToCart }) => {
  return (
    <Card className="shadow dish-card">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text><strong>₹{price}</strong></Card.Text>
        <Button variant="primary" onClick={addToCart} style={{ backgroundColor: '#7c2d75', border: 'none' }} className="text-white">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DishCard;

