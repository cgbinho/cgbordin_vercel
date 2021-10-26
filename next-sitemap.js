module.exports = {
  siteUrl: 'https://www.cgbordin.com',
  generateRobotsTxt: true, // opcional
  priority: null,
  changefreq: null,
  exclude: ['/server-sitemap.xml', '/articles/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://www.cgbordin.com/server-sitemap.xml'],
  },
};
