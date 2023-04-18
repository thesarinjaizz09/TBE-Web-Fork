import { PageSlug } from '@/interfaces';
import { routes } from '../routes';

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
    '/junior-in-web-engineering': {
      title: 'Junior in Web Engineering | The Boring Education',
      siteName: 'Junior in Web Engineering',
      description: 'Tech Education for Everyone',
      url: routes.microCampLanding('/junior-in-web-engineering'),
      ...commonMeta,
    },
    '/404': {
      title: 'Lost in Boring Space | The Boring Education',
      siteName: 'Lost in Boring Space',
      description: 'Tech Education for Everyone',
      url: routes.microCampLanding('/junior-in-web-engineering'),
      ...commonMeta,
    },
  };

  return meta[basePath];
};

export { getSEOMeta };
