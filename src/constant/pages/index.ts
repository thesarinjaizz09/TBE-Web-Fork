import { programs } from '../global';
import { routes } from '../routes';
import { v4 } from 'uuid';

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
    image: 'boring_workshop.svg',
    imageAltText: '',
    title: 'The Boring Micro-Camp',
    content:
      '6 Weeks Bootcamp with hands-on project-building and placement assistance.',
    buttonText: 'Registration open',
    href: '/micro-camps',
  },
  {
    id: v4(),
    image: 'boring_workshop.svg',
    imageAltText: 'workshop',
    title: 'The Boring Workshop',
    content:
      'Learn to build In-Demand Tech & Design skills over a weekend, that stays for life!',
    buttonText: 'Registration open',
    href: '/workshops',
  },
];

const SKILLS = [
  {
    id: v4(),
    title: `FrontEnd Engineering`,
    details: [
      {
        id: v4(),
        name: `ReactJS`,
        image: `reactjs.svg`,
        imageAltText: `ReactJS`,
      },
      { id: v4(), name: `NextJs`, image: `nextjs.svg`, imageAltText: `NextJS` },
    ],
  },
  {
    id: v4(),
    title: `BackEnd Engineering`,
    details: [
      { id: v4(), name: `NodeJS`, image: `nodejs.svg`, imageAltText: `NodeJS` },
      {
        id: v4(),
        name: `MongoDB`,
        image: `mongodb.svg`,
        imageAltText: `MongoDB`,
      },
    ],
  },
  {
    id: v4(),
    title: `Extra Skills`,
    details: [
      { id: v4(), name: `Figma`, image: `figma.svg`, imageAltText: `Figma` },
      {
        id: v4(),
        name: `TypeScript`,
        image: `typescript.svg`,
        imageAltText: `Typescript`,
      },
    ],
  },
];

const USP = [
  {
    id: v4(),
    title: `Mentorship`,
    content: `You'll mentored by Industry Experts. From Code Review to 1:1, You'll be in touch them every week.`,
    image: `peer_learning.svg`,
    imageAltText: `mentorship`,
  },
  {
    id: v4(),
    title: `Peer Learning`,
    content: `You learn by practicing and also from your batchmates. Do Pair programming in our Discord community.`,
    image: `peer_learning.svg`,
    imageAltText: `peer learning`,
  },
  {
    id: v4(),
    title: `Weekend Workshop`,
    content: `Learn skill over weekend that spreads your horizon in Tech Opportunities.`,
    image: `peer_learning.svg`,
    imageAltText: `weekend workshop`,
  },
  {
    id: v4(),
    title: `Doubt Clearing Sessions`,
    content: `Clear all your doubts over weekend and discuss any issue you’re facing.`,
    image: `peer_learning.svg`,
    imageAltText: `weekend workshop`,
  },
];

const TESTIMONIALS = [
  {
    id: v4(),
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `profile_image.svg`,
    imageAltText: `profile image`,
  },
  {
    id: v4(),
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `profile_image.svg`,
    imageAltText: `profile image`,
  },
  {
    id: v4(),
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `profile_image.svg`,
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
    title: '8 Weeks',
    content: 'Duration',
  },
  {
    id: v4(),
    title: '1:1 Mentorship',
    content: 'Weekly Session with Mentors',
  },
  {
    id: v4(),
    title: 'Only Projects',
    content: 'Learn by Building',
  },
  {
    id: v4(),
    title: 'Code Review',
    content: 'Weekly code reviews by mentors',
  },
  {
    id: v4(),
    title: 'Tech Workshops',
    content: 'Workshops on Tech every weekend',
  },
  {
    id: v4(),
    title: 'Be Job Ready',
    content: 'Project & Resume to Job, All in one',
  },
];

export {
  FOOTER_NAVIGATION,
  PROGRAMS,
  SKILLS,
  TESTIMONIALS,
  TOP_NAVIGATION,
  USP,
  FRONTEND_MICROCAMP_CURRICULUM,
};
