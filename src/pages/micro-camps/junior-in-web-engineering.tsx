import React from 'react';
import {
  Skills,
  MicroCampLandingHeader,
  InThisCohortContainer,
  Testimonials,
  Footer,
  NotAnotherTechCourse,
  ContextBasedLearning,
  MicrocampPricing,
  Opportunities,
  WhatWeDoForYou,
  WeToughtAt,
  SEO,
} from '@/components';

const MicroCampLanding = () => {
  return (
    <React.Fragment>
      <SEO slug='/junior-in-web-engineering' />
      <MicroCampLandingHeader />
      <InThisCohortContainer />
      <NotAnotherTechCourse />
      <ContextBasedLearning />
      <Skills />
      <Opportunities />
      <WhatWeDoForYou />
      <MicrocampPricing />
      <WeToughtAt />
      <Testimonials />
      <Footer />
    </React.Fragment>
  );
};

export default MicroCampLanding;
