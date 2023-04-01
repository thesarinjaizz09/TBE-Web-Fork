import { useState, useId } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Workshop', href: '#' },
  { name: 'Micro-Camp', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const programs = [
  {
    image: 'boring_workshop.svg',
    image_alt: '',
    title: 'The Boring Micro-Camp',
    content:
      '6 Weeks Bootcamp with hands-on project-building and placement assistance.',
    button_title: 'REGISTRATION OPEN',
    href: '#',
  },
  {
    image: 'boring_workshop.svg',
    image_alt: 'workshop',
    title: 'The Boring Workshop',
    content:
      'Learn to build In-Demand Tech & Design skills over a weekend, that stays for life!',
    button_title: 'REGISTRATION OPEN',
    href: '#',
  },
];

const skills = [
  {
    title: `FrontEnd Engineering`,
    details: [
      {
        name: `ReactJS`,
        image: `reactjs.svg`,
        image_alt: `ReactJS`,
      },
      {
        name: `NextJs`,
        image: `nextjs.svg`,
        image_alt: `NextJS`,
      },
    ],
  },
  {
    title: `BackEnd Engineering`,
    details: [
      {
        name: `NodeJS`,
        image: `nodejs.svg`,
        image_alt: `NodeJS`,
      },
      {
        name: `MongoDB`,
        image: `mongodb.svg`,
        image_alt: `MongoDB`,
      },
    ],
  },
  {
    title: `Skills to UpSkill`,
    details: [
      {
        name: `Figma`,
        image: `figma.svg`,
        image_alt: `Figma`,
      },
      {
        name: `TypeScript`,
        image: `typescript.svg`,
        image_alt: `Typescript`,
      },
    ],
  },
];

const usp = [
  {
    title: `Mentorship`,
    content: `You'll mentored by Industry Experts. From Code Review to 1:1, You'll be in touch them every week.`,
    image: `mentorship.svg`,
    image_alt: `mentorship`,
  },
  {
    title: `Peer Learning`,
    content: `You learn by practicing and also from your batchmates. Do Pair programming in our Discord community.`,
    image: `peer_learning.svg`,
    image_alt: `peer learning`,
  },
  {
    title: `Weekend Workshop`,
    content: `Learn skill over weekend that spreads your horizon in Tech Opportunities.`,
    image: `mentorship.svg`,
    image_alt: `weekend workshop`,
  },
  {
    title: `Doubt Clearing Sessions`,
    content: `Clear all your doubts over weekend and discuss any issue you’re facing.`,
    image: `peer_learning.svg`,
    image_alt: `weekend workshop`,
  },
];

const testimonial = [
  {
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `profile_image.svg`,
    image_alt: `profile image`,
  },
  {
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `profile_image.svg`,
    image_alt: `profile image`,
  },
  {
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `profile_image.svg`,
    image_alt: `profile image`,
  },
];

const footer_nav = [
  {
    title: `Product`,
    url_content: [
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
    ],
  },
  {
    title: `Company`,
    url_content: [
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
    ],
  },
  {
    title: `Resources`,
    url_content: [
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
    ],
  },
  {
    title: `Social`,
    url_content: [
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
    ],
  },
  {
    title: `Legal`,
    url_content: [
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
    ],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const uid = useId();

  return (
    <div className='w-full border-2 bg-black'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>The Boring Education</span>
              <img className='h-8 w-auto' src='../svg/logo.svg' alt='logo' />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='text-gray-700 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm leading-6 hover:text-primary'
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='sm:ring-gray-900/10 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>The Boring Education</span>
                <img className='h-8 w-auto' src='../svg/logo.svg' alt='logo' />
              </a>
              <button
                type='button'
                className='text-gray-700 -m-2.5 rounded-md p-2.5'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='divide-gray-500/10 -my-6 divide-y'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='text-gray-900 hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'>
                  <a
                    href='#'
                    className='text-gray-900 hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7'
                  >
                    {/* Log in */}
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-52'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight  sm:text-6xl '>
              <p className=' leading-loose text-white'>Tech Learning for</p>
              <p className='text-red'>Everyone</p>
            </h1>
            <p className='mt-6 text-base leading-8 text-white'>
              Learn Tech Skills & Prepare yourself for the Web3 Era.
            </p>
            <div className='mt-10 flex w-full items-center justify-center gap-x-6'>
              <a
                href='#'
                className='w-72 rounded-md bg-red px-3.5 py-2.5 text-sm
                 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Explore Roadmaps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* our Programs*/}
      <h1 className='flex w-full items-center justify-center text-4xl'>
        <span className='text-white'>Our</span>
        <span className='text-red'>Programs</span>
      </h1>
      <div className='flex w-full items-center justify-center '>
        {programs.map((program) => (
          <div
            key={uid}
            className='lg:px- my-1 w-full px-1 md:w-full lg:my-4 lg:w-1/3'
          >
            <div className='block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700'>
              <a href='#!'>
                <img
                  className='rounded-t-lg'
                  src={`../svg/${program.image}`}
                  alt={program.image_alt}
                />
              </a>
              <div className='p-6'>
                <h5 className='mb-2 text-xl font-medium leading-tight text-black'>
                  {program.title}
                </h5>
                <p className='mb-4 text-base text-gray'>{program.content}</p>
                <button
                  type='button'
                  className='hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block w-full rounded bg-red px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  {program.button_title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Skill we Teach */}
      <div className='flex w-full flex-col items-center justify-center p-10  '>
        <h1 className='text-4xl'>
          <span className='text-red'>Skill</span>
          <span className='text-white'>We Teach</span>
        </h1>

        <div className='flex w-full items-center justify-center'>
          {skills.map((skill) => (
            <div
              key={uid}
              className='lg:px- my-1 w-full px-1 md:w-full lg:my-4 lg:w-1/3'
            >
              <div className='block max-w-xs rounded-lg bg-white shadow-lg dark:bg-neutral-700'>
                <div className='flex w-full items-center justify-around py-4'>
                  {skill.details.map((detail) => (
                    <div key={uid} className='flex flex-col items-center'>
                      <img
                        className='rounded-t-lg'
                        src={`../svg/${detail.image}`}
                        alt={detail.image_alt}
                      />

                      <span>{detail.name}</span>
                    </div>
                  ))}
                </div>
                <div className='p-6'>
                  <h5 className='mb-2 text-center text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
                    <span>{skill.title}</span>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*what's different here */}
      <div className='flex w-full flex-col items-center justify-center p-10  '>
        <h1 className='text-4xl text-white'>
          What's <span className='text-red'>Different</span> here
        </h1>
        <div className='flex w-full items-center justify-center  '>
          {usp.map((item) => (
            <div
              key={uid}
              className='lg:px- my-1 w-full px-1 md:w-full lg:my-4 lg:w-1/3'
            >
              <div className='block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700'>
                <a href='#!'>
                  <img
                    className='d-flex w-full items-center justify-center rounded-t-lg'
                    src={`../svg/${item.image}`}
                    alt={item.image_alt}
                  />
                </a>
                <div className='p-6'>
                  <h5 className='mb-2 text-xl font-medium leading-tight text-black'>
                    {item.title}
                  </h5>
                  <p className='mb-4 text-base text-gray'>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Can You be a Programmer*/}
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-52'>
          <img src='../svg/programmer.svg' alt='' />
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight  text-white sm:text-6xl '>
              {/* <p className=' leading-loose text-white'>Tech Learning for</p>
              <p className='text-red'>Everyone</p> */}
              Can You be a Programmer?
            </h1>
            <p className='mt-6 text-lg leading-8 text-white'>
              Book your session and discuss if programming is for you.
            </p>
            <div className='mt-10 flex w-full items-center justify-center gap-x-6'>
              <a
                href='#'
                className='w-72 rounded-md bg-red px-3.5 py-2.5 text-sm
                 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Book FREE Counselling Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What our students saying */}

      <section className='text-gray-600 body-font'>
        <div className='container mx-auto px-5 py-24'>
          <h1 className='title-font mb-12 text-center text-3xl font-medium text-white'>
            What our <span className='pr-2 text-red'>students</span>saying
          </h1>
          <div className='-m-4 flex flex-wrap'>
            {testimonial.map((item) => (
              <div key={uid} className='w-full  p-4 md:w-1/3'>
                <div className='h-full rounded bg-white p-8'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    className='text-gray-400 mb-4 block h-5 w-5'
                    viewBox='0 0 975.036 975.036'
                  >
                    <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                  </svg>
                  <p className='mb-6 leading-relaxed'>{item.content}</p>
                  <a className='inline-flex items-center'>
                    <img
                      alt={item.image_alt}
                      src={`../svg/${item.image}`}
                      className='h-12 w-12 flex-shrink-0 rounded-full object-cover object-center'
                    />
                    <span className='flex flex-grow flex-col pl-4'>
                      <span className='title-font text-gray-900 font-medium'>
                        {item.title}
                      </span>
                      <span className='text-gray-500 text-sm'>
                        UI DEVELOPER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='mx-auto mb-[75px] flex h-auto max-w-[1500px] flex-col border-t-2 border-white'>
        <div className='flex h-auto w-full flex-col gap-y-[45px] bg-black px-[15px] py-[30px] text-white sm:px-[30px] md:px-[40px] lg:h-[380px] lg:flex-row lg:items-center lg:justify-between lg:px-[50px] lg:py-0 xl:px-[75px]'>
          <div className='lg:w-4/12'>
            <div className='text-gray-900 mb-[30px] flex items-center justify-center gap-x-[8px]'>
              <img src='../svg/logo.svg' alt='logo-footer' />
              <span className='text-white'>The Boring</span>
              <span className='text-red'>Education</span>
            </div>

            <div className='text-gray-600 text-center'>
              Learn Tech Skills & Prepare yourself for a Tech Job.
            </div>
          </div>

          <div className='flex flex-wrap justify-center gap-x-[90px] gap-y-[60px] sm:justify-between sm:gap-x-0 lg:w-7/12 lg:flex-nowrap'>
            {footer_nav.map((item) => (
              <div key={uid} className='text-center sm:text-left'>
                <div className='text-gray-400 mb-[18px] select-none text-sm font-bold'>
                  {item.title}
                </div>
                {item.url_content.map((nav) => (
                  <ul
                    key={uid}
                    className='text-gray-600 flex flex-col gap-[10px]'
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

        <div className='bg-grey flex h-[100px] w-full flex-col items-center justify-evenly border-t-2 border-white text-white sm:flex-row sm:justify-between sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px]'>
          <div className='text-gray-600 w-full text-center'>
            © 2023, The Boring Education
          </div>
        </div>
      </div>
      {/* <footer className='footer-1  border-t-2 border-white py-8 sm:py-12'>
        <div className='container mx-auto  px-4 text-white'>
          <div className='sm:-mx-4 sm:flex sm:flex-wrap md:py-4'>
            <div className='px-4 sm:w-1/2 md:w-1/4 xl:w-1/6'>
              <h5 className='mb-6 text-xl font-bold'>Features</h5>
              <ul className='footer-links list-none'>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Cool stuff
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Random feature
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Team feature
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Stuff for developers
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Another one
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className='mt-8 px-4 sm:mt-0 sm:w-1/2 md:w-1/4 xl:w-1/6'>
              <h5 className='mb-6 text-xl font-bold'>Resources</h5>
              <ul className='footer-links list-none'>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Resource
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Resource name
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Another resource
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className='mt-8 px-4 sm:w-1/2 md:mt-0 md:w-1/4 xl:w-1/6'>
              <h5 className='mb-6 text-xl font-bold'>About</h5>
              <ul className='footer-links list-none'>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Team
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Locations
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Privacy
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className='mt-8 px-4 sm:w-1/2 md:mt-0 md:w-1/4 xl:w-1/6'>
              <h5 className='mb-6 text-xl font-bold'>Help</h5>
              <ul className='footer-links list-none'>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Support
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Help Center
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='#'
                    className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className='mt-4 px-4 sm:mx-auto sm:w-1/3 xl:ml-auto xl:mt-0 xl:w-1/6'>
              <h5 className='mb-6 text-xl font-bold sm:text-center xl:text-left'>
                Stay connected
              </h5>
              <div className='flex sm:justify-center xl:justify-start'>
                <a
                  href=''
                  className='border-gray-400 text-gray-600  h-8 w-8 rounded-full border-2 py-1 text-center hover:border-blue-600 hover:bg-blue-600 hover:text-white'
                >
                  <i className='fab fa-facebook'></i>
                </a>
                <a
                  href=''
                  className='border-gray-400 text-gray-600  ml-2 h-8 w-8 rounded-full border-2 py-1 text-center hover:border-blue-400 hover:bg-blue-400 hover:text-white'
                >
                  <i className='fab fa-twitter'></i>
                </a>
                <a
                  href=''
                  className='border-gray-400 text-gray-600  hover:bg-red-600 hover:border-red-600 ml-2 h-8 w-8 rounded-full border-2 py-1 text-center hover:text-white'
                >
                  <i className='fab fa-google-plus-g'></i>
                </a>
              </div>
            </div>
          </div>

          <div className='mt-6 border-t pt-6 sm:-mx-4 sm:mt-12 sm:flex sm:flex-wrap sm:pt-12'>
            <div className='px-4 sm:w-full md:w-1/6'>
              <strong>FWR</strong>
            </div>
            <div className='mt-4 px-4 sm:w-1/2 md:mt-0 md:w-1/4'>
              <h6 className='mb-2 font-bold'>Address</h6>
              <address className='mb-4 text-sm not-italic'>
                123 6th St.
                <br />
                Melbourne, FL 32904
              </address>
            </div>
            <div className='mt-4 px-4 sm:w-1/2 md:mt-0 md:w-1/4'>
              <h6 className='mb-2 font-bold'>Free Resources</h6>
              <p className='mb-4 text-sm'>
                Use our HTML blocks for <strong>FREE</strong>.<br />
                <em>All are MIT License</em>
              </p>
            </div>
            <div className='mt-6 px-4 sm:mt-4 md:ml-auto md:mt-0 md:w-1/4'>
              <button className='rounded bg-purple-800 px-4 py-2 text-white hover:bg-purple-900'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
