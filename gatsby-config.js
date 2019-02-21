const { plugins } = require('@spraoi/gatsby-config');

module.exports = {
  plugins: [
    ...plugins,
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      options: {
        classes: false,
        custom: { families: ['Futura:700'], urls: ['/fonts/futura/index.css'] },
        events: false,
        google: { families: ['Raleway:500,600'] },
      },
      resolve: 'gatsby-plugin-web-font-loader',
    },
    {
      options: { name: 'articles', path: 'src/articles' },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: { name: 'data', path: 'src/data' },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: { name: 'images', path: 'src/images' },
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
