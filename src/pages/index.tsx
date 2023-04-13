import {
  Image,
  LandingPageHero,
  OurPrograms,
  Text,
  LinkButton,
  Skills,
  Section,
  SectionHeaderContainer,
  CardSectionContainer,
  WeGuideDifferently,
  CanYouBeAProgrammer,
  FlexContainer,
  Testimonials,
} from '@/components';
import { FOOTER_NAVIGATION, TESTIMONIALS, USP } from '@/constant';
import { WeGuideDifferentlyCardProps } from '@/interfaces';
import React from 'react';

const Home = () => {
  return (
    <React.Fragment>
      <LandingPageHero />
      <OurPrograms />
      <Skills />
      <WeGuideDifferently />
      <CanYouBeAProgrammer />
      <Testimonials />
      <footer className='mx-auto  flex h-auto w-full  flex-col border-t-2 border-white'>
        <div className='flex h-auto w-full flex-col gap-y-[45px] bg-black px-[15px] py-[30px]  sm:px-[30px] md:px-[40px] lg:h-[380px] lg:flex-row lg:items-center lg:justify-between lg:px-[50px] lg:py-0 xl:px-[75px]'>
          <div className='lg:w-4/12'>
            <div className='mb-[30px] flex items-center justify-center gap-x-[8px] text-gray-900'>
              <Image src='../svg/logo.svg' alt='logo-footer' className='w-16' />
              <Text level='p' className='paragraph'>
                The Boring
              </Text>
              <Text level='p' className='paragraph text-primary'>
                Education
              </Text>
            </div>

            <Text level='p' className='paragraph text-center text-gray-600'>
              Learn Tech Skills & Prepare yourself for a Tech Job.
            </Text>
          </div>

          <div className='flex flex-wrap justify-center gap-x-[90px] gap-y-[60px] sm:justify-between sm:gap-x-0 lg:w-7/12 lg:flex-nowrap'>
            {FOOTER_NAVIGATION.map(
              (item) =>
                item.isShow && (
                  <div key={item.id} className='text-center sm:text-left'>
                    <div className='mb-[18px] select-none text-sm font-bold text-gray-400'>
                      {item.title}
                    </div>
                    {item.url_content.map((nav) => (
                      <ul
                        key={nav.id}
                        className='flex flex-col gap-[10px] text-gray-600'
                      >
                        <a className='hover:underline' href={nav.href}>
                          <li>{nav.link_text}</li>
                        </a>
                      </ul>
                    ))}
                  </div>
                )
            )}
          </div>
        </div>

        <div className='flex h-[100px] w-full flex-col items-center justify-evenly border-t-2 border-white bg-black  sm:flex-row sm:justify-between sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px]'>
          <Text level='h5' className='heading-5 w-full text-center '>
            © 2023, The Boring Education
          </Text>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Home;
