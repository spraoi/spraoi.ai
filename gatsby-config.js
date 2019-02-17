const { plugins } = require('@spraoi/gatsby-config');

module.exports = {
  plugins: [
    ...plugins,
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-transformer-yaml',
    {
      options: { fonts: ['Open Sans:300,400,700'] },
      resolve: 'gatsby-plugin-google-fonts',
    },
    {
      options: { name: 'articles', path: 'src/articles' },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: { name: 'data', path: 'src/data' },
      resolve: 'gatsby-source-filesystem',
    },
  ],
  siteMetadata: {
    author: 'Spraoi',
    banner: '/banners/spraoi.png',
    datePublished: '2018-01-01',
    description: 'Foo bar baz',
    facebook: 'spraoisoftware',
    headline: 'Foo bar baz',
    keywords: 'Spraoi,Insurance Technology,Machine Learning',
    ogLanguage: 'en_US',
    siteLanguage: 'en',
    siteUrl: 'https://spraoi.ai',
    title: 'Spraoi',
    twitter: 'spraoit',
  },
};
