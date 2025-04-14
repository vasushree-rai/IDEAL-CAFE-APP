import { Carousel } from 'react-bootstrap';

function HeroCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/banner1.jpg" alt="First slide" />
        <Carousel.Caption><h3>Cool Off With Our Summer Specials!</h3></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/banner2.jpg" alt="Second slide" />
        <Carousel.Caption><h3>Winning your hearts as always🍨</h3></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
