import React from 'react';
import {
  LandingPageHero,
  OurPrograms,
  Skills,
  WeGuideDifferently,
  CanYouBeAProgrammer,
  Testimonials,
  Footer,
  SEO,
} from '@/components';

const Home = () => {
  return (
    <React.Fragment>
      <SEO slug='/' />
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
