import {
  SKILLSProps,
  TestimonialCardProps,
  WeGuideDifferentlyCardProps,
} from '@/interfaces';
import { programs } from '../global';
import { routes } from '../routes';
import { v4 } from 'uuid';

const SVG_BASE_PATH = '/svg';

const TOP_NAVIGATION = [
  { id: v4(), name: 'Home', href: routes.home },
  {
    id: v4(),
    name: programs.juniorInWebEngineering.label,
    href: routes.microCampLanding(programs.juniorInWebEngineering.slug),
  },
  {
    id: v4(),
    name: programs.beFrontendMaster.label,
    href: routes.microCampLanding(programs.beFrontendMaster.slug),
  },
  {
    id: v4(),
    name: programs.beBackendMaster.label,
    href: routes.microCampLanding(programs.beBackendMaster.slug),
  },
  { id: v4(), name: 'Contact us', href: routes.contactUs },
];

const PROGRAMS = [
  {
    id: v4(),
    image: `${SVG_BASE_PATH}/boring_workshop.svg`,
    imageAltText: '',
    title: 'The Boring Micro-Camp',
    content:
      '6 Weeks Bootcamp with hands-on project-building and placement assistance.',
    buttonText: 'Registration open',
    href: '/micro-camps',
  },
  {
    id: v4(),
    image: `${SVG_BASE_PATH}/boring_workshop.svg`,
    imageAltText: 'workshop',
    title: 'The Boring Workshop',
    content:
      'Learn to build In-Demand Tech & Design skills over a weekend, that stays for life!',
    buttonText: 'Registration open',
    href: '/workshops',
  },
];

const SKILLS: SKILLSProps[] = [
  {
    id: v4(),
    title: `Front-end Engineering`,
    details: [
      {
        id: v4(),
        name: `ReactJS`,
        image: `${SVG_BASE_PATH}/reactjs.svg`,
        imageAltText: `ReactJS`,
      },
      {
        id: v4(),
        name: `NextJs`,
        image: `${SVG_BASE_PATH}/nextjs.svg`,
        imageAltText: `NextJS`,
      },
    ],
  },
  {
    id: v4(),
    title: `Back-end Engineering`,
    details: [
      {
        id: v4(),
        name: `NodeJS`,
        image: `${SVG_BASE_PATH}/nodejs.svg`,
        imageAltText: `NodeJS`,
      },
      {
        id: v4(),
        name: `MongoDB`,
        image: `${SVG_BASE_PATH}/mongodb.svg`,
        imageAltText: `MongoDB`,
      },
    ],
  },
  {
    id: v4(),
    title: `Extra Skills`,
    details: [
      {
        id: v4(),
        name: `Figma`,
        image: `${SVG_BASE_PATH}/figma.svg`,
        imageAltText: `Figma`,
      },
      {
        id: v4(),
        name: `TypeScript`,
        image: `${SVG_BASE_PATH}/typescript.svg`,
        imageAltText: `Typescript`,
      },
    ],
  },
];

const SKILLS_MICROCAMP: SKILLSProps[] = [
  {
    id: v4(),
    title: `FrontEnd Engineering`,
    details: [
      {
        id: v4(),
        name: `ReactJS`,
        image: `${SVG_BASE_PATH}/reactjs.svg`,
        imageAltText: `ReactJS`,
      },
      {
        id: v4(),
        name: `NextJs`,
        image: `${SVG_BASE_PATH}/nextjs.svg`,
        imageAltText: `NextJS`,
      },
      {
        id: v4(),
        name: `Redux`,
        image: `${SVG_BASE_PATH}/redux.svg`,
        imageAltText: `Redux`,
      },
    ],
  },
  {
    id: v4(),
    title: `Deployment`,
    details: [
      {
        id: v4(),
        name: `Netlify`,
        image: `${SVG_BASE_PATH}/netlify.svg`,
        imageAltText: `Netlify`,
      },
      {
        id: v4(),
        name: `Vercel`,
        image: `${SVG_BASE_PATH}/vercel.svg`,
        imageAltText: `Vercel`,
      },
    ],
  },
  {
    id: v4(),
    title: `Extra Skills`,
    details: [
      {
        id: v4(),
        name: `Figma`,
        image: `${SVG_BASE_PATH}/figma.svg`,
        imageAltText: `Figma`,
      },
      {
        id: v4(),
        name: `TypeScript`,
        image: `${SVG_BASE_PATH}/typescript.svg`,
        imageAltText: `Typescript`,
      },
    ],
  },
];

const USP: WeGuideDifferentlyCardProps[] = [
  {
    id: v4(),
    title: `Mentorship`,
    content: `You'll mentored by Industry Experts. From Code Review to 1:1, You'll be in touch them every week.`,
    image: `${SVG_BASE_PATH}/peer_learning.svg`,
    imageAltText: `mentorship`,
  },
  {
    id: v4(),
    title: `Peer Learning`,
    content: `You learn by practicing and also from your batchmates. Do Pair programming in our Discord community.`,
    image: `${SVG_BASE_PATH}/peer_learning.svg`,
    imageAltText: `peer learning`,
  },
  {
    id: v4(),
    title: `Weekend Workshop`,
    content: `Learn skill over weekend that spreads your horizon in Tech Opportunities.`,
    image: `${SVG_BASE_PATH}/peer_learning.svg`,
    imageAltText: `weekend workshop`,
  },
  {
    id: v4(),
    title: `Doubt Clearing Sessions`,
    content: `Clear all your doubts over weekend and discuss any issue you’re facing.`,
    image: `${SVG_BASE_PATH}/peer_learning.svg`,
    imageAltText: `weekend workshop`,
  },
];

const TESTIMONIALS: TestimonialCardProps[] = [
  {
    id: v4(),
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `${SVG_BASE_PATH}/profile_image.svg`,
    imageAltText: `profile image`,
  },
  {
    id: v4(),
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `${SVG_BASE_PATH}/profile_image.svg`,
    imageAltText: `profile image`,
  },
  {
    id: v4(),
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `${SVG_BASE_PATH}/profile_image.svg`,
    imageAltText: `profile image`,
  },
];

const FOOTER_NAVIGATION = [
  {
    id: v4(),
    title: `Our Products`,
    isShow: true,
    url_content: [
      { id: v4(), link_text: `Be A Frontend Master`, href: `#` },
      { id: v4(), link_text: `Be A Backend Master`, href: `#` },
      { id: v4(), link_text: `The Boring Workshop`, href: `#` },
    ],
  },
  {
    id: v4(),
    title: `Company`,
    isShow: true,
    url_content: [
      { id: v4(), link_text: `About US`, href: `#` },
      { id: v4(), link_text: `Contact Us`, href: `#` },
      { id: v4(), link_text: `Refund Policy`, href: `#` },
    ],
  },
  {
    id: v4(),
    title: `Resources`,
    isShow: false,
    url_content: [
      { id: v4(), link_text: `Overview`, href: `#` },
      { id: v4(), link_text: `Overview`, href: `#` },
      { id: v4(), link_text: `Overview`, href: `#` },
    ],
  },
  {
    id: v4(),
    title: `Connect With Us`,
    isShow: true,
    url_content: [
      { id: v4(), link_text: `Discord`, href: `#` },
      {
        id: v4(),
        link_text: `Instagram`,
        href: `https://www.instagram.com/theboringeducation/`,
      },
    ],
  },
  {
    id: v4(),
    title: `Legal`,
    isShow: false,
    url_content: [
      { id: v4(), link_text: `Overview`, href: `#` },
      { id: v4(), link_text: `Overview`, href: `#` },
      { id: v4(), link_text: `Overview`, href: `#` },
    ],
  },
];

const FRONTEND_MICROCAMP_CURRICULUM = [
  {
    id: v4(),
    title: `8 Weeks`,
    content: `Duration`,
  },
  {
    id: v4(),
    title: `1:1 Mentorship`,
    content: `Weekly Session with Mentors`,
  },
  {
    id: v4(),
    title: `Only Projects`,
    content: `Learn by Building`,
  },
  {
    id: v4(),
    title: `Code Review`,
    content: `Weekly code reviews by mentors`,
  },
  {
    id: v4(),
    title: `Tech Workshops`,
    content: `Workshops on Tech every weekend`,
  },
  {
    id: v4(),
    title: `Be Job Ready`,
    content: `Project & Resume to Job, All in one`,
  },
];

const WHAT_WE_DO_FOR_YOU = [
  {
    id: v4(),
    title: `Live Mock Interview`,
    content: `Prepare for real world interviews by attending Mock Interviews hosted by Industry Experts.`,
    image: `${SVG_BASE_PATH}/live_mock_interview.svg`,
    imageAltText: `Live Mock Interview`,
  },
  {
    id: v4(),
    title: `Resume Building`,
    content: `We build your resume that gets you shortlisted for the interviews.`,
    image: `${SVG_BASE_PATH}/resume_building.svg`,
    imageAltText: `Resume Building`,
  },
  {
    id: v4(),
    title: `Linkedin Optimization`,
    content: `We guide your way of using LinkedIn to get interview calls and pitch yourself in front of HRs.`,
    image: `${SVG_BASE_PATH}/linkedin_optimization.svg`,
    imageAltText: `Linkedin Optimization`,
  },
  {
    id: v4(),
    title: `Job Profile Building`,
    content: `A good job profile is needed for a good, and we make sure that you’ve one.`,
    image: `${SVG_BASE_PATH}/job_profile_building.svg`,
    imageAltText: `Job Profile Building`,
  },
  {
    id: v4(),
    title: `Some "Boring" Skills`,
    content: `On Weekend workshops with “The Boring Workshop”, You’ll get hands-on experience in Tech topics.`,
    image: `${SVG_BASE_PATH}/some_boring_skills.svg`,
    imageAltText: `Some Boring Skills`,
  },
];

export {
  FOOTER_NAVIGATION,
  PROGRAMS,
  SKILLS,
  SKILLS_MICROCAMP,
  TESTIMONIALS,
  TOP_NAVIGATION,
  USP,
  FRONTEND_MICROCAMP_CURRICULUM,
  WHAT_WE_DO_FOR_YOU,
};
