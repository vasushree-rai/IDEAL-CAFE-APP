import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/App.css'; // Ensure correct path to App.css

const OffersSection = () => {
  const offers = [
    { title: "Buy 1 Get 1 Free", desc: "Applicable on all snacks below 200.", image: "/images/offer1.jpg" },
    { title: "20% Off", desc: "For orders above 400.", image: "/images/offer2.png" },
    { title: "Thali for 199", desc: "Applicable on all thalis.", image: "/images/offer3.jpg" },
    { title: "Summers Best", desc: "Flat 100rs off.", image: "/images/offer4.jpg" },
  ];

  return (
    <div className="container py-5">
      <h2>Special Offers</h2>
      <div className="row">
        {offers.map((offer, i) => (
          <div className="col-md-6 mb-4" key={i}>
            <Card className="card">
              <Card.Img variant="top" src={offer.image} className="card-img-top" />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.desc}</Card.Text>
                <Button className="btn-purple">Grab Offer</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
