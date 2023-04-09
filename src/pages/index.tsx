import { useId } from 'react';
import {
  Header,
  Image,
  LandingPageHero,
  OurPrograms,
  Text,
} from '@/components';
import { FOOTER_NAVIGATION, SKILLS, TESTIMONIALS, USP } from '@/constant';

export default function Home() {
  const uid = useId();

  return (
    <main className='gradient-bg'>
      <Header />
      <LandingPageHero />
      <OurPrograms />

      <div className='flex w-full flex-col items-center justify-center p-10  '>
        <div className='flex justify-center'>
          <Text level='h3' className='heading-3'>
            Skill
          </Text>
          <Text level='h3' className='heading-3 pl-2 text-primary'>
            We Teach
          </Text>
        </div>

        <div className='flex w-full items-center justify-around px-72 pt-8 '>
          {SKILLS.map((skill) => (
            <div
              key={uid}
              className='block max-w-xs rounded-lg border shadow-lg dark:bg-neutral-700'
            >
              <div className='flex w-full items-center justify-around py-4'>
                {skill.details.map((detail) => (
                  <div key={uid} className='flex w-44 flex-col items-center'>
                    <Image
                      className='h-8 w-8 rounded-t-lg'
                      src={`../svg/${detail.image}`}
                      alt={detail.imageAltText}
                    />

                    <Text level='p' className='paragraph text-white'>
                      {detail.name}
                    </Text>
                  </div>
                ))}
              </div>
              <div className='p-6'>
                <Text
                  level='h5'
                  className='heading-5 mb-2 text-center  leading-tight  text-white dark:text-neutral-50'
                >
                  {skill.title}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex w-full flex-col items-center justify-center p-10  '>
        <div className='flex justify-center'>
          <Text level='h3' className='heading-3'>
            What's
          </Text>
          <Text level='h3' className='heading-3 px-2 text-primary'>
            Different
          </Text>
          <Text level='h3' className='heading-3 '>
            here
          </Text>
        </div>

        <div className='flex w-full items-stretch justify-center   '>
          {USP.map((item) => (
            <div key={uid} className='flex-1 p-4 '>
              <div className='block h-full overflow-hidden rounded-lg border-2  bg-gray-950'>
                <div className='p-4 '>
                  <Image
                    className=' rounded-t-lg '
                    src={`../svg/${item.image}`}
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
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-52'>
          <Image src='../svg/programmer.svg' alt='' />
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight   sm:text-6xl '>
              {/* <p className=' leading-loose '>Tech Learning for</p>
              <p className='text-red'>Everyone</p> */}
              Can You be a Programmer?
            </h1>
            <p className='mt-6 text-lg leading-8 '>
              Book your session and discuss if programming is for you.
            </p>
            <div className='mt-10 flex w-full items-center justify-center gap-x-6'>
              <a
                href='#'
                className='bg-red w-72 rounded-md px-3.5 py-2.5 text-sm
                 font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Book FREE Counselling Now
              </a>
            </div>
          </div>
        </div>
      </div>
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
              <div key={uid} className='flex-1 p-4 '>
                <div className='block h-full overflow-hidden rounded-lg border-2  bg-gray-950'>
                  <div className='p-4 '>
                    <Image
                      className=' w-8 rounded-t-lg'
                      src={`../svg/${item.image}`}
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
              <Image src='../svg/logo.svg' alt='logo-footer' className='w-8' />
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
            {FOOTER_NAVIGATION.map((item) => (
              <div key={uid} className='text-center sm:text-left'>
                <div className='mb-[18px] select-none text-sm font-bold text-gray-400'>
                  {item.title}
                </div>
                {item.url_content.map((nav) => (
                  <ul
                    key={uid}
                    className='flex flex-col gap-[10px] text-gray-600'
                  >
                    <a className='hover:underline' href={nav.href}>
                      <li>{nav.link_text}</li>
                    </a>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className='flex h-[100px] w-full flex-col items-center justify-evenly border-t-2 border-white bg-grey  sm:flex-row sm:justify-between sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px]'>
          <div className='w-full text-center text-gray-600'>
            © 2023, The Boring Education
          </div>
        </div>
      </footer>
    </main>
  );
}
