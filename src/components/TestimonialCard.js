import { Card } from 'react-bootstrap';

function TestimonialCard({ name, text }) {
  return (
    <Card className="m-2 p-3 shadow-sm">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{text}</p>
          <footer className="blockquote-footer">{name}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default TestimonialCard;