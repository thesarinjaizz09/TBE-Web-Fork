import {
  Section,
  Text,
  Image,
  Skills,
  MicroCampLandingHeader,
  InThisCohortContainer,
  Testimonials,
  Footer,
  NotAnotherTechCourse,
  ContextBasedLearning,
  TechEducationForEveryone,
  FlexContainer,
  CardSectionContainer,
  Opportunities,
  CardGradientContainer,
  SectionHeaderContainer,
  WhatWeDoForYou,
} from '@/components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import {
  WHAT_WE_DO_FOR_YOU,
  WE_TAUGHT,
  TALK_ABOUT_OPPORTUNITIES,
} from '@/constant';
import { OpportunityCardProps } from '@/interfaces';
const MicroCampLanding = () => {
  const { push } = useRouter();

  useEffect(() => {
    // push(
    //   'https://docs.google.com/forms/d/e/1FAIpQLSejDBJvhWMWeKZFkWY2PxuUa_LZYsstDvJljrn0Tbm2_2Kd7Q/viewform?usp=sf_link'
    // );
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
      <TechEducationForEveryone />
      <MicrocampPricing />
      <Testimonials />
      <Footer />
    </>
  );
};

export default MicroCampLanding;

const MicrocampPricing = () => {
  return (
    <Section>
      <div className='flex w-full flex-col items-center justify-center'>
        <div className='mb-4 flex'>
          <Text level='h1' className='heading-1'>
            We already <span className=' text-primary'>taught</span> at
          </Text>
        </div>
        <div className='w-88 flex items-center justify-between space-x-4'>
          {WE_TAUGHT.map((item) => (
            <div key={item.id} className='flex '>
              <Image
                src={item.image}
                className='w-full'
                alt={item.imageAltText}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
