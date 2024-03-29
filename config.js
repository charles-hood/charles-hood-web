module.exports = {
  siteTitle: 'Where is Charles?', // <title>
  manifestName: 'Identity',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-identity/`, // This path is subpath of your hosting https://domain/portfolio
  authorName: 'Charles Hood',
  heading: 'Systems Engineer',
  // social
  socialLinks: [
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:charles.hood@gmail.com',
    },
    {
      icon: 'fa-facebook',
      name: 'Facebook',
      url: 'https://facebook.com/charleshood',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/charleshood',
    },
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/charles-hood',
    },
  ],
};
