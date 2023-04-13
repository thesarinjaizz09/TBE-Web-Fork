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
      <section className='body-font text-gray-600'>
        <div className='container  mx-auto px-5 py-24'>
          <div className='flex justify-center pb-4  '>
            <Text level='h3' className='heading-3 '>
              What's Our
            </Text>
            <Text level='h3' className='heading-3 px-2 text-primary'>
              Students
            </Text>
            <Text level='h3' className='heading-3 '>
              Saying
            </Text>
          </div>
          <div className='-m-4 flex flex-wrap'>
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className='flex-1 p-4 '>
                <div className='bg-gray-950 block h-full overflow-hidden rounded-lg  border-2'>
                  <div className='p-4 '>
                    <Image
                      className=' w-16 rounded-t-lg'
                      src={`${item.image}`}
                      alt={item.imageAltText}
                    />
                    <Text level='h4' className='heading-4 py-4 '>
                      {item.title}
                    </Text>

                    <Text
                      level='p'
                      className='paragraph text-justify text-grey-dark'
                    >
                      {item.content}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
