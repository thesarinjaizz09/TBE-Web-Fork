import { PageSlug } from '@/interfaces';
import { routes } from '../routes';
import { programs } from '..';

const commonMeta = {
  type: 'website',
  robots: 'follow, index',
  image: 'https://theboringeducation.com/images/large-og.png',
};

const getSEOMeta = function (basePath: PageSlug) {
  const meta = {
    '/': {
      title: 'The Boring Education',
      siteName: 'The Boring Education',
      description: 'Tech Education for Everyone',
      url: routes.home,
      ...commonMeta,
    },
    [programs.juniorInWebEngineering.slug]: {
      title: `${programs.juniorInWebEngineering.label} | The Boring Education`,
      siteName: programs.juniorInWebEngineering.label,
      description: programs.juniorInWebEngineering.description,
      url: routes.microCampLanding(programs.juniorInWebEngineering.slug),
      ...commonMeta,
    },
    [programs.beFrontendMaster.slug]: {
      title: `${programs.beFrontendMaster.label} | The Boring Education`,
      siteName: programs.beFrontendMaster.label,
      description: programs.beFrontendMaster.description,
      url: routes.microCampLanding(programs.beFrontendMaster.slug),
      ...commonMeta,
    },
    [programs.beBackendMaster.slug]: {
      title: `${programs.beBackendMaster.label} | The Boring Education`,
      siteName: programs.beBackendMaster.label,
      description: programs.beBackendMaster.description,
      url: routes.microCampLanding(programs.beBackendMaster.slug),
      ...commonMeta,
    },
    '/404': {
      title: 'Lost in Boring Space | The Boring Education',
      siteName: 'Lost in Boring Space',
      description: 'Tech Education for Everyone',
      url: routes[404],
      ...commonMeta,
    },
  };

  return meta[basePath];
};

export { getSEOMeta };
