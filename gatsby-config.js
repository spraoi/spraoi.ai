const { plugins } = require('@spraoi/gatsby-config');

module.exports = {
  plugins: [
    ...plugins,
    {
      options: {
        background_color: '#f8fbfe',
        display: 'browser',
        icon: 'static/images/logo-icon-500x500.png',
        name: 'Spraoi',
        short_name: 'Spraoi',
        start_url: '/',
        theme_color: '#f8fbfe',
      },
      resolve: 'gatsby-plugin-manifest',
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
    {
      options: {
        plugins: [
          {
            options: { maxWidth: 684, quality: 100, withWebp: true },
            resolve: 'gatsby-remark-images',
          },
          {
            options: { inlineCodeMarker: null },
            resolve: 'gatsby-remark-prismjs',
          },
          'gatsby-remark-numbered-footnotes',
          'gatsby-remark-reading-time',
          'gatsby-remark-dropcap',
        ],
      },
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-extract-image-colors',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
  ],
  siteMetadata: {
    banner: '/images/banner-1200x628.png',
    datePublished: '2018-01-01',
    facebook: 'spraoisoftware',
    instagram: 'spraoi_tech',
    linkedIn: 'spraoi.ai',
    logo: '/images/logo-icon-500x500.png',
    siteLanguage: 'en',
    siteLocal: 'en_US',
    siteName: 'Spraoi',
    siteUrl: 'https://spraoi.ai',
    twitter: 'spraoit',
  },
};
