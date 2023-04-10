const routes = {
  home: '/',
  microCamps: '/micro-camps',
  microCampLanding: function (microCampSlug: string) {
    return this.microCamps + '/' + microCampSlug;
  },
  contactUs: '/contact',
};

export { routes };
