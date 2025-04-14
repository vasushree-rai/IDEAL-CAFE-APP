
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import '../styles/App.css';

const testimonials = [
  { name: 'Aanya', review: 'Loved the Gadbad Ice Cream!', rating: 5 },
  { name: 'Rohan', review: 'Quick service and great flavors!', rating: 4 },
  { name: 'Meera', review: 'The chocolate shake was divine.', rating: 5 },
];

const Rating = () => {
  return (
    <div className="container py-5 text-center">
      <h2 className="text-purple mb-4">Customer Testimonials</h2>

      <Carousel indicators={false} controls={true} interval={5000}>
        {testimonials.map((item, idx) => (
          <Carousel.Item key={idx}>
            <div className="testimonial-card mx-auto p-4">
              <h5 className="text-purple fw-bold">{item.name}</h5>
              <p className="fst-italic">"{item.review}"</p>
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={22} color={i < item.rating ? '#7c2d75' : '#ccc'} />
                ))}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Rating;


