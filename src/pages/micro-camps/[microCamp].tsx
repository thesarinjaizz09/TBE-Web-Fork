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
} from '@/components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MicroCampLanding = () => {
  const { push } = useRouter();

  useEffect(() => {
    push(
      'https://docs.google.com/forms/d/e/1FAIpQLSejDBJvhWMWeKZFkWY2PxuUa_LZYsstDvJljrn0Tbm2_2Kd7Q/viewform?usp=sf_link'
    );
  }, []);

  return (
    <>
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
    </>
  );
};

export default MicroCampLanding;
