const fs = require('fs');
const path = require('path');

// Load your dynamic routes from pages.json
const pages = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data', 'pages.json'), 'utf8')
);

module.exports = {
  siteUrl: 'https://kodinghub.online',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,

  // Add dynamic routes manually
  additionalPaths: async (config) => {
    return pages.map((page) => ({
      loc: `/${page.slug}`, // adjust the path if your route is different
      lastmod: new Date().toISOString(),
    }));
  },
};
