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
      <Section>
        <div className='flex w-full flex-col items-center justify-center  '>
          <div className='flex flex-col items-center justify-center py-2'>
            <Text level='h4' className='heading-4 text-gray-600'>
              What we do for you
            </Text>
          </div>
          <div className='flex w-full items-stretch justify-between space-x-2   '>
            {WHAT_WE_DO_FOR_YOU.map((item) => (
              <div key={item.id} className='flex-1  '>
                <div className='gradient-1 block h-full overflow-hidden rounded-lg  border-2'>
                  <div className='p-4 '>
                    <Image
                      className=' w-14 rounded-t-lg'
                      src={`${item.image}`}
                      alt={item.imageAltText}
                    />
                    <Text level='h4' className='heading-4 pb-1 pt-3 text-black'>
                      {item.title}
                    </Text>

                    <Text
                      level='p'
                      className='paragraph strong-text text-justify text-black'
                    >
                      {item.content}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <TechEducationForEveryone />
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
      <Testimonials />
      <Footer />
    </>
  );
};

export default MicroCampLanding;
