import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Workshop', href: '#' },
  { name: 'Micro-Camp', href: '#' },
  { name: 'Contact Us', href: '#' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-white'>
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
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
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
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              {/* Log in <span aria-hidden='true'>&rarr;</span> */}
            </a>
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>The Boring Education</span>
                <img className='h-8 w-auto' src='../svg/logo.svg' alt='logo' />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
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
        <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <svg
            className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
            viewBox='0 0 1155 678'
          >
            <path
              fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
              fillOpacity='.3'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#9089FC' />
                <stop offset={1} stopColor='#FF80B5' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Tech Learning for Everyone
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Learn Tech Skills & Prepare yourself for the Web3 Era.
            </p>
            <div className='mt-10 flex w-full items-center justify-center gap-x-6'>
              <a
                href='#'
                className='w-72 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Explore Roadmaps
              </a>
            </div>
          </div>
        </div>
        <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
          <svg
            className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
            viewBox='0 0 1155 678'
          >
            <path
              fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
              fillOpacity='.3'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#9089FC' />
                <stop offset={1} stopColor='#FF80B5' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* our Programs*/}
      <div className='flex w-full items-center justify-center'>
        <h4>Our Programs</h4>
      </div>
      <div className='flex w-full items-center justify-center '>
        <div className='lg:px- my-1 w-full px-1 md:w-full lg:my-4 lg:w-1/3'>
          <div className='block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700'>
            <a href='#!'>
              <img
                className='rounded-t-lg'
                src='../svg/microcamp.svg'
                alt='microcamp'
              />
            </a>
            <div className='p-6'>
              <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
                The Boring Micro-camp
              </h5>
              <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
                6 Weeks Bootcamp with hands-on project-building and placement
                assistance.
              </p>
              <button
                type='button'
                className='bg-primary inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                Registration Open
              </button>
            </div>
          </div>
        </div>
        <div className='my-1 w-full px-1 md:w-full lg:my-4 lg:w-1/3 lg:px-4'>
          <div className='block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700'>
            <a href='#!'>
              <img
                className='rounded-t-lg'
                src='../svg/boring_workshop.svg'
                alt='workshop'
              />
            </a>
            <div className='p-6'>
              <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
                The Boring Workshop
              </h5>
              <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
                Learn to build In-Demand Tech & Design skills over a weekend,
                that stays for life!
              </p>
              <button
                type='button'
                className='bg-primary inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                Registration Open
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Skill we Teach */}
      <div className='flex w-full flex-col items-center justify-center p-10  '>
        <h4>Skill We Teach</h4>
        <div className='flex w-full items-center justify-center'>
          <div className='lg:px- my-1 w-full px-1 md:w-full lg:my-4 lg:w-1/3'>
            <div className='block max-w-xs rounded-lg bg-white shadow-lg dark:bg-neutral-700'>
              <div className='flex w-full items-center justify-around'>
                <div className='flex flex-col items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                    />
                  </svg>
                  <span>ReactJS</span>
                </div>
                <div className='flex flex-col'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                    />
                  </svg>
                  <span>NextJS</span>
                </div>
              </div>
              <div className='p-6'>
                <h5 className='mb-2 text-center text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
                  <span>FrontEnd Engineering</span>
                </h5>
              </div>
            </div>
          </div>
          <div className='lg:px- my-1 w-full px-1 md:w-full lg:my-4 lg:w-1/3'>
            <div className='block max-w-xs rounded-lg bg-white shadow-lg dark:bg-neutral-700'>
              <div className='flex w-full items-center justify-around'>
                <div className='flex flex-col items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                    />
                  </svg>
                  <span>NodeJS</span>
                </div>
                <div className='flex flex-col'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                    />
                  </svg>
                  <span>MongoDB</span>
                </div>
              </div>
              <div className='p-6'>
                <h5 className='mb-2 text-center text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
                  <span>BackEnd Engineering</span>
                </h5>
              </div>
            </div>
          </div>
          <div className='lg:px- my-1 w-full px-1 md:w-full lg:my-4 lg:w-1/3'>
            <div className='block max-w-xs rounded-lg bg-white shadow-lg dark:bg-neutral-700'>
              <div className='flex w-full items-center justify-around'>
                <div className='flex flex-col items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                    />
                  </svg>
                  <span>Figma</span>
                </div>
                <div className='flex flex-col'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                    />
                  </svg>
                  <span>TypeScript</span>
                </div>
              </div>
              <div className='p-6'>
                <h5 className='mb-2 text-center text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
                  <span>Skills To UpSkill</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-full flex-col items-center justify-center p-10  '>
        <h4>What's Different here</h4>
        <div className='flex w-full items-center justify-center '>
          <div className='lg:px- my-1 w-full px-1 md:w-full lg:my-4 lg:w-1/3'>
            <div className='block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700'>
              <a href='#!'>
                <img
                  className='d-flex w-full items-center justify-center rounded-t-lg'
                  src='../svg/mentorship.svg'
                  alt='mentorship'
                />
              </a>
              <div className='p-6'>
                <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
                  Mentorship
                </h5>
                <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
                  You'll mentored by Industry Experts. From Code Review to 1:1,
                  You'll be in touch them every week.
                </p>
              </div>
            </div>
          </div>
          <div className='my-1 w-full px-1 md:w-full lg:my-4 lg:w-1/3 lg:px-4'>
            <div className='block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700'>
              <a href='#!'>
                <img
                  className='d-flex w-full items-center justify-center rounded-t-lg'
                  src='../svg/peer_learning.svg'
                  alt='peer_learning'
                />
              </a>
              <div className='p-6'>
                <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
                  Peer Learning
                </h5>
                <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
                  You learn by practicing and also from your batchmates. Do Pari
                  programming in our Discord community.
                </p>
              </div>
            </div>
          </div>
          <div className='my-1 w-full px-1 md:w-full lg:my-4 lg:w-1/3 lg:px-4'>
            <div className='block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700'>
              <a href='#!'>
                <img
                  className='d-flex w-full items-center justify-center rounded-t-lg'
                  src='../svg/weekend_workshop.svg'
                  alt='weekend_workshop'
                />
              </a>
              <div className='p-6'>
                <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
                  Weekend Workshops
                </h5>
                <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
                  Learn skill over weekend that spreads your horizon in Tech
                  Opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
