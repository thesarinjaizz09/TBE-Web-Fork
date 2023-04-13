import {
  LinkButton,
  Section,
  Text,
  Image,
  SkillsMicroCamp,
} from '@/components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { FRONTEND_MICROCAMP_CURRICULUM, WHAT_WE_DO_FOR_YOU } from '@/constant';
const MicroCampLanding = () => {
  const { push } = useRouter();

  useEffect(() => {
    push(
      'https://docs.google.com/forms/d/e/1FAIpQLSejDBJvhWMWeKZFkWY2PxuUa_LZYsstDvJljrn0Tbm2_2Kd7Q/viewform?usp=sf_link'
    );
  }, []);

  return (
    <>
      <Section className='px-8 py-4'>
        <div className='gradient-6 rounded-2'>
          <div className='flex flex-col p-8'>
            <div className='flex items-center justify-center'>
              <Text level='h4' className='heading-4  text-dark'>
                The Boring
              </Text>
              <Text level='h4' className=' heading-4 text-primary'>
                &nbsp;Micro-camp
              </Text>
            </div>
            <div className='flex flex-col items-center pt-5'>
              <div className='flex w-full flex-col justify-center'>
                <div className='flex w-full justify-center'>
                  <Text level='h2' className='heading-2 text-dark'>
                    Be{' '}
                    <Text level='span' className='heading-2 text-primary'>
                      Front-end{' '}
                    </Text>
                    <Text level='span' className='heading-2 text-dark'>
                      Master
                    </Text>
                  </Text>
                </div>
                <div className='flex w-full justify-center pt-1'>
                  <Text level='p' className='strong-text text-dark'>
                    Learn Core of Front-end Engineering with Placement
                    Assistance in 8 Weeks.
                  </Text>
                </div>
              </div>
              <div className='flex w-1/3 justify-center  space-x-2 pt-4'>
                <LinkButton
                  href='#'
                  buttonProps={{ variant: 'PRIMARY', text: 'Register now' }}
                />
                <LinkButton
                  href='#'
                  buttonProps={{ variant: 'OUTLINE', text: 'Explore program' }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className='px-8 py-4'>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <Text level='p' className='paragraph text-center text-gray-500'>
              IN THIS COHORT
            </Text>
            <div className='flex items-center justify-center'>
              <Text level='h3' className='heading-3 pr-2'>
                Learn Fundamentals of
              </Text>
              <Text level='h3' className='heading-3 text-primary'>
                Front-end Engineering
              </Text>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-3 pt-4'>
            {FRONTEND_MICROCAMP_CURRICULUM.map((item) => (
              <div
                className='flex flex-col items-center justify-center rounded-lg  bg-blue-600 px-4 py-4 text-blue-100 duration-300 hover:bg-blue-500'
                key={item.id}
              >
                <Text level='h2' className='heading-2'>
                  {item.title}
                </Text>
                <Text level='p' className='paragraph text-2xl'>
                  {item.content}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className='flex w-full items-stretch justify-center   '>
          <div className='flex w-full justify-center p-4 '>
            <div className='w-76 bg-gray-950 block h-full overflow-hidden  rounded-lg border-2'>
              <div className='flex flex-col items-center justify-center p-4 '>
                <Image
                  src='../svg/context_based_learning.svg'
                  alt='developer activities'
                  className='w-64 pb-2'
                />
                <Text level='p' className='paragraph'>
                  WE FOCUS ON
                </Text>
                <Text level='h2' className='heading-2 py-2 '>
                  Context Based Learning
                </Text>

                <Text level='p' className='paragraph text-justify'>
                  Our Curriculum designed to teach minimal learning so you care
                  about learning more and remembering less.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <SkillsMicroCamp />
      <Section>
        <div className='flex w-full flex-col items-center justify-center px-10  '>
          <div className='flex flex-col items-center justify-center'>
            <Text level='h4' className='heading-4 text-gray-500'>
              TALK ABOUT OPPORTUNITIES IN
            </Text>
            <Text level='h2' className='heading-2 pl-2 text-primary'>
              Front-end Engineering
            </Text>
          </div>
          <div className='flex w-full items-center justify-around px-96 pt-4 '>
            <div className='block max-w-xs rounded-lg border shadow-lg dark:bg-neutral-700'>
              <div className='flex w-full items-center justify-around py-4'>
                <div className='flex w-64 flex-col items-center'>
                  <Text level='p' className='paragraph text-gray-500'>
                    Avg. Salary
                  </Text>
                  <Text level='h2' className='heading-2 mb-2 text-center'>
                    8-20 LPA
                  </Text>
                  <Text level='p' className='paragraph text-gray-500'>
                    Source: Glassdoor
                  </Text>
                </div>
              </div>
            </div>
            <div className='block max-w-xs rounded-lg border shadow-lg dark:bg-neutral-700'>
              <div className='flex w-full items-center justify-around py-4'>
                <div className='flex w-64 flex-col items-center'>
                  <Text level='p' className='paragraph text-gray-500'>
                    Jobs in Market
                  </Text>
                  <Text level='h2' className='heading-2 mb-2 text-center'>
                    55000+
                  </Text>
                  <Text level='p' className='paragraph text-gray-500'>
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
            <Text level='h2' className='heading-2 text-gray-500'>
              What we do for you
            </Text>
          </div>
          <div className='flex w-full items-stretch justify-between space-x-2   '>
            {WHAT_WE_DO_FOR_YOU.map((item) => (
              <div key={item.id} className='flex-1  '>
                <div className='bg-gray-950 block h-full overflow-hidden rounded-lg  border-2'>
                  <div className='p-4 '>
                    <Image
                      className=' w-14 rounded-t-lg'
                      src={`${item.image}`}
                      alt={item.imageAltText}
                    />
                    <Text level='h4' className='heading-4 py-4 '>
                      {item.title}
                    </Text>

                    <Text level='p' className='paragraph text-justify'>
                      {item.content}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default MicroCampLanding;
