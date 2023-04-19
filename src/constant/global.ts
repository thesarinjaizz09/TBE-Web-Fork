import { PageSlug } from '@/interfaces';
import { landingPageSkills, juniorInWebEngineeringSkills } from './pages';

const imageMeta = {
  logo: {
    path: '/svg/logo.svg',
    alt: 'the-boring-education-logo',
  },
};

const programs = {
  beFrontendMaster: {
    label: 'Be Front-end Master',
    slug: '/be-frontend-master',
    description:
      'Learn Core of Front-end Engineering with Placement Assistance in 8 Weeks.',
  },
  beBackendMaster: {
    label: 'Be Backend Master',
    slug: '/be-backend-master',
    description:
      'Learn Core of Backend Engineering with Placement Assistance in 8 Weeks.',
  },
  juniorInWebEngineering: {
    label: 'Junior in Web Engineering',
    slug: '/junior-in-web-engineering',
    description:
      'Learn Fundamentals of Web dev with industry experts in live sessions.',
  },
  theBoringWorkshops: {
    label: 'The Boring Workshops',
    slug: '/the-boring-workshops',
    description:
      'Learn to build In-Demand Tech & Design skills over a weekend, that stays for life!',
  },
};

// Skills
const getSkillsBySlug = (slug: PageSlug) => {
  const skillsBySlug = {
    '/': landingPageSkills,
    [programs.juniorInWebEngineering.slug]: juniorInWebEngineeringSkills,
  };

  return skillsBySlug[slug];
};

const LINKS = {
  juniorInWebEngineeringRegistrationLink:
    'https://docs.google.com/forms/d/e/1FAIpQLSejDBJvhWMWeKZFkWY2PxuUa_LZYsstDvJljrn0Tbm2_2Kd7Q/viewform?usp=sf_link',
  freeTechConsultation:
    'https://calendly.com/theboringeducation/tech-consultation',
};

export { imageMeta, programs, LINKS, getSkillsBySlug };
