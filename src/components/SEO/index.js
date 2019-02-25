import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Facebook from './Facebook';
import Twitter from './Twitter';

// reference: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = ({ article, pathname, ...overrides }) => (
  <StaticQuery
    query={graphql`
      query SEO {
        site {
          buildTime(formatString: "YYYY-MM-DD")
          siteMetadata {
            author
            banner
            datePublished(formatString: "YYYY-MM-DD")
            description
            facebook
            keywords
            ogLanguage
            siteLanguage
            siteUrl
            title
            twitter
          }
        }
      }
    `}
    render={({ site: { buildTime, siteMetadata } }) => {
      const notHomePage = pathname !== '/';
      const data = { ...siteMetadata, ...article, ...overrides };
      const canonicalUrl = `${data.siteUrl}${pathname}`;

      const breadcrumbs = [
        {
          '@type': 'ListItem',
          item: { '@id': data.siteUrl, name: 'Spraoi' },
          position: 1,
        },
      ];

      if (notHomePage && !article) {
        breadcrumbs.push({
          '@type': 'ListItem',
          item: { '@id': `${canonicalUrl}`, name: data.title },
          position: 2,
        });
      }

      if (notHomePage && article) {
        breadcrumbs.push({
          '@type': 'ListItem',
          item: { '@id': `${data.siteUrl}/articles`, name: 'Articles' },
          position: 2,
        });

        breadcrumbs.push({
          '@type': 'ListItem',
          item: { '@id': canonicalUrl, name: data.title },
          position: 3,
        });
      }

      return (
        <>
          <Helmet
            title={
              data.title === siteMetadata.title
                ? data.title
                : `${data.title} - ${siteMetadata.title}`
            }
          >
            <html lang={data.siteLanguage} />
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
            <meta content={data.description} name="description" />
            <meta content={data.keywords} name="keywords" />
            <link href={canonicalUrl} rel="canonical" />
            <script type="application/ld+json">
              {JSON.stringify(
                article
                  ? {
                      '@context': 'http://schema.org',
                      '@type': 'Article',
                      author: { '@type': 'PersonPreview', name: data.author },
                      creator: { '@type': 'PersonPreview', name: data.author },
                      dateModified: data.dateModified,
                      datePublished: data.datePublished,
                      description: data.description,
                      headline: data.title,
                      image: { '@type': 'ImageObject', url: data.banner },
                      inLanguage: data.siteLanguage,
                      mainEntityOfPage: canonicalUrl,
                      name: data.title,
                      url: data.siteUrl,
                    }
                  : {
                      '@context': 'http://schema.org',
                      '@type': 'WebPage',
                      author: { '@type': 'Organization', name: data.author },
                      creator: { '@type': 'Organization', name: data.author },
                      dateModified: buildTime,
                      datePublished: data.datePublished,
                      description: data.description,
                      headline: data.title,
                      image: {
                        '@type': 'ImageObject',
                        url: `${data.siteUrl}${data.banner}`,
                      },
                      inLanguage: data.siteLanguage,
                      mainEntityOfPage: canonicalUrl,
                      name: data.title,
                      publisher: { '@type': 'Organization', name: data.author },
                      url: data.siteUrl,
                    }
              )}
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'BreadcrumbList',
                description: 'Breadcrumbs list',
                itemListElement: breadcrumbs,
                name: 'Breadcrumbs',
              })}
            </script>
            <script defer src="/static/js/mtiFontTrackingCode.js" />
          </Helmet>
          <Facebook
            desc={data.description}
            image={data.banner}
            locale={siteMetadata.ogLanguage}
            name={siteMetadata.facebook}
            title={data.title}
            type={article ? 'article' : 'website'}
            url={canonicalUrl}
          />
          <Twitter
            desc={data.description}
            image={data.banner}
            title={data.title}
            username={data.twitter}
          />
        </>
      );
    }}
  />
);

SEO.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    dateModified: PropTypes.string.isRequired,
    datePublished: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  pathname: PropTypes.string,
};

SEO.defaultProps = {
  article: null,
  pathname: '/',
};

export default SEO;
