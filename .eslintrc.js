// .eslintrc.js
module.exports = {
  extends: 'next',
  rules: {
    '@next/next/no-html-link-for-pages': 'off', // disables <a> usage warning
    '@next/next/no-img-element': 'off',         // disables <img> usage warning
  },
};
