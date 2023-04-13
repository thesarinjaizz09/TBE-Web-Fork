import React from 'react';
import {
  LandingPageHero,
  OurPrograms,
  Skills,
  WeGuideDifferently,
  CanYouBeAProgrammer,
  Testimonials,
  Footer,
} from '@/components';

const Home = () => {
  return (
    <React.Fragment>
      <LandingPageHero />
      <OurPrograms />
      <Skills />
      <WeGuideDifferently />
      <CanYouBeAProgrammer />
      <Testimonials />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
