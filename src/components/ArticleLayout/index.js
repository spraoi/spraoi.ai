/* eslint react/no-danger: off */

import 'prism-themes/themes/prism-vs.css';
import Box from '@spraoi/base/Box';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Facebook, Linkedin, Mail, Twitter } from 'react-social-sharing';
import { Link } from 'gatsby';
import ArticlesContainer from '../../containers/ArticlesContainer';
import MetadataContainer from '../../containers/MetadataContainer';
import SEO from '../SEO';

const ArticleLayout = ({ location: { pathname }, pageContext: { slug } }) => (
  <MetadataContainer>
    {({ banner, siteUrl }) => (
      <ArticlesContainer>
        {(articles) => {
          const { author, frontmatter, html } = articles.find(
            (article) => article.fields.slug === slug
          );

          const shareUrl = `${siteUrl}/perspectives${slug}`;
          const bannerRegex = /\/static\/[^"]+banner-1200x628\.(png|jpg)/;
          const [articleBanner] = html.match(bannerRegex) || [];

          return (
            <article>
              <SEO
                article={frontmatter}
                banner={articleBanner || banner}
                dateModified={frontmatter.dateModified}
                datePublished={frontmatter.datePublished}
                description={frontmatter.description}
                pathname={pathname}
                person={author}
                title={frontmatter.title}
              />
              <section>
                <h1>{frontmatter.title}</h1>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    lineHeight: 1,
                    mt: 6,
                  }}
                >
                  <Link to={`/people/${author.id}`}>
                    <Box
                      sx={{
                        flexShrink: 0,
                        height: '4rem',
                        mr: 6,
                        width: '4rem',
                      }}
                    >
                      <Img alt="" fluid={author.image} />
                    </Box>
                  </Link>
                  <ul>
                    <li>
                      <Box
                        as={Link}
                        sx={{
                          color: 'text.primary',
                          fontFamily: 'secondary',
                          fontWeight: 'semibold',
                          textDecoration: 'none',
                        }}
                        to={`/people/${author.id}`}
                      >
                        {author.givenName} {author.familyName}
                      </Box>
                    </li>
                    <li>{frontmatter.datePublished}</li>
                  </ul>
                </Box>
              </section>
              <Box
                dangerouslySetInnerHTML={{ __html: html }}
                sx={{
                  '.gatsby-highlight': { mb: 7 },
                  '.gatsby-resp-image-wrapper': {
                    borderRadius: 3,
                    m: 0,
                    overflow: 'hidden',
                  },
                  blockquote: {
                    bg: 'white',
                    borderLeftColor: 'border',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: 5,
                    m: 0,
                    mb: 7,
                    p: 6,
                  },
                  'blockquote, h3, p, ul': { maxWidth: 'maxWidths.paragraph' },
                  h2: { mb: 6, mt: 8 },
                  h3: { lineHeight: 2, mb: 2, mt: 7 },
                  hr: {
                    borderStyle: 'none',
                    borderTopColor: 'border',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1px',
                    height: '1px',
                    m: 0,
                    maxWidth: 'maxWidths.paragraph',
                    p: 0,
                  },
                  letterSpacing: 1,
                  lineHeight: 3,
                  p: { mb: 7 },
                  pre: {
                    borderLeftColor: 'border',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1px',
                  },
                  ul: { listStyle: 'disc outside', mb: 7, ml: [6, null, 8] },
                }}
              />
              ;
              <footer>
                <Twitter
                  big
                  link={shareUrl}
                  message={frontmatter.title}
                  solidcircle
                />
                <Facebook
                  big
                  link={shareUrl}
                  message={frontmatter.title}
                  solidcircle
                />
                <Linkedin
                  big
                  link={shareUrl}
                  message={frontmatter.title}
                  solidcircle
                />
                <Mail
                  big
                  link={shareUrl}
                  message={frontmatter.title}
                  solidcircle
                />
              </footer>
            </article>
          );
        }}
      </ArticlesContainer>
    )}
  </MetadataContainer>
);

ArticleLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleLayout;
