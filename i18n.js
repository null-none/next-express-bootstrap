const NextI18Next = require('next-i18next');

const nextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['fr']
});

module.exports = nextI18NextInstance;
