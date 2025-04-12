import Hero from '../components/Hero';
import MoviesSection from '../components/sections/MoviesSection';
import PromotionsSection from '../components/sections/PromotionsSection';
import ServicesSection from '../components/sections/ServicesSection';
import EventsSection from '../components/sections/EventsSection';
import CinemasSection from '../components/sections/CinemasSection';
import { movies, promotions, services, events, cinemas } from '../data/mockData';

const Home = () => {
  return (
    <>
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
      />
      
      <MoviesSection 
        movies={movies} 
      />
      
      <PromotionsSection 
        promotions={promotions}
      />
      
      <EventsSection 
        events={events}
      />
      
      <ServicesSection 
        services={services}
      />
      
      <CinemasSection 
        cinemas={cinemas}
      />
    </>
  );
};

export default Home;