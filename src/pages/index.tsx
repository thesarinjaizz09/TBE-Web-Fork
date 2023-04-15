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
    <>
      <LandingPageHero />
      <OurPrograms />
      <Skills />
      <WeGuideDifferently />
      <CanYouBeAProgrammer />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
