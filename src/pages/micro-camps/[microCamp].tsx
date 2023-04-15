import {
  Section,
  Text,
  Image,
  Skills,
  MicroCampLandingHeader,
  GridContainer,
  InThisCohortContainer,
  MicroCampFeatureCard,
  Testimonials,
  Footer,
  NotAnotherTechCourse,
} from '@/components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import {
  FRONTEND_MICROCAMP_CURRICULUM,
  WHAT_WE_DO_FOR_YOU,
  WE_TAUGHT,
} from '@/constant';
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
      <Section>
        <div className='flex w-full items-stretch justify-center   '>
          <div className='flex w-full justify-center p-4 '>
            <div className='w-76 gradient-4 block h-full overflow-hidden rounded-lg  bg-gray-950'>
              <div className='flex flex-col items-center justify-center p-4 '>
                <Image
                  src='../svg/context_based_learning.svg'
                  alt='developer activities'
                  className='w-64 pb-2'
                />
                <Text
                  level='p'
                  className='paragraph pt-4 font-medium text-black'
                >
                  WE FOCUS ON
                </Text>
                <Text
                  level='h3'
                  className='heading-3 w-72 py-2 text-center leading-10 text-black'
                >
                  Context Based Learning
                </Text>

                <Text
                  level='p'
                  className='paragraph  w-72 text-center font-medium leading-5 text-black'
                >
                  Our Curriculum designed to teach minimal learning so you care
                  about learning more and remembering less.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Skills />
      <Section>
        <div className='flex w-full flex-col items-center justify-center px-10  '>
          <div className='flex flex-col items-center justify-center'>
            <Text level='p' className='paragraph strong-text text-gray-600'>
              TALK ABOUT OPPORTUNITIES IN
            </Text>
            <Text level='h4' className='heading-4 pl-2 text-primary'>
              Front-end Engineering
            </Text>
          </div>
          <div className='flex w-full items-center justify-center   pt-4 '>
            <div className='mr-4 block max-w-xs rounded-lg border shadow-lg dark:bg-neutral-700'>
              <div className='flex w-full items-center justify-around py-4'>
                <div className='flex w-64 flex-col px-2'>
                  <Text
                    level='p'
                    className='paragraph font-semibold text-gray-500'
                  >
                    Avg. Salary
                  </Text>
                  <Text level='h4' className='heading-4 my-1'>
                    8-20 LPA
                  </Text>
                  <Text
                    level='p'
                    className='paragraph font-semibold text-gray-500'
                  >
                    Source: Glassdoor
                  </Text>
                </div>
              </div>
            </div>
            <div className='mr-4 block max-w-xs rounded-lg border shadow-lg dark:bg-neutral-700'>
              <div className='flex w-full items-center justify-around py-4'>
                <div className='flex w-64 flex-col px-2'>
                  <Text
                    level='p'
                    className='paragraph font-semibold text-gray-500'
                  >
                    Jobs in Market
                  </Text>
                  <Text level='h4' className='heading-4 my-1 '>
                    55000+
                  </Text>
                  <Text
                    level='p'
                    className='paragraph font-semibold text-gray-500'
                  >
                    Source: Glassdoor
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
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
      <Section>
        <div className='flex flex-col'>
          <div className='flex flex-col items-center justify-center'>
            <Text level='p' className='strong-text '>
              TECH EDUCATION FOR EVERYONE
            </Text>
            <Text level='h3' className='heading-3'>
              Simple <span className='text-primary'>Pricing</span>-Transparent{' '}
              <span className='text-primary'>Pricing</span>.
            </Text>
            <Text level='p' className='text-subtitle text-gray-500'>
              We don’t believe in variable pricing for our products. We don’t
              sell you anything blindly.
            </Text>
          </div>
          <div className='flex w-full justify-center p-4 '>
            <div className='block h-full w-full overflow-hidden rounded-lg  border-2 bg-gray-950'>
              <div className='flex flex-col items-center justify-center p-4 '>
                <Text level='p' className='strong-text'>
                  PRICE YOU PAY
                </Text>
                <Text level='h2' className='heading-2 py-2 '>
                  ₹6000
                </Text>

                <Text level='p' className='strong-text text-justify'>
                  VALUE YOU GET
                </Text>
              </div>
              <GridContainer className=' flex gap-1 pt-5'>
                {FRONTEND_MICROCAMP_CURRICULUM.map((item) => {
                  const { id } = item;
                  return <MicroCampFeatureCard key={id} {...item} />;
                })}
              </GridContainer>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='mb-4 flex'>
            <Text level='h1' className='heading-1'>
              We already <span className=' text-primary'>taught</span> at
            </Text>
          </div>
          <div className='grid w-full grid-cols-2 gap-6  md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2'>
            {WE_TAUGHT.map((item) => (
              <div key={item.id} className='flex '>
                <Image src={item.image} className='w-full' alt='pesto' />
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
