import HeroCarousel from '../components/HeroCarousel';
import OffersSection from '../components/OffersSection';
import FlavorOfTheDay from '../components/FlavorOfTheDay';

function Home() {
  return (
    <div>
      <HeroCarousel />
      <FlavorOfTheDay flavor="Belgian Chocolate" />
      <OffersSection />
    </div>
  );
}

export default Home;
