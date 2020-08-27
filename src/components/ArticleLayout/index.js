/* eslint react/no-danger: off */

import 'prism-themes/themes/prism-vs.css';
import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import ArticlesContainer from '../../containers/ArticlesContainer';
import Avatar from '../Avatar';
import MetadataContainer from '../../containers/MetadataContainer';
import SEO from '../SEO';
import Section from '../Section';
import ShareCTA from '../ShareCTA';
import noOrphan from '../../utilities/no-orphan';

const ArticleLayout = ({ location: { pathname }, pageContext: { slug } }) => (
  <MetadataContainer>
    {({ banner, siteUrl }) => (
      <ArticlesContainer>
        {(articles) => {
          const { author, frontmatter, html } = articles.find(
            (article) => article.fields.slug === slug
          );

          const bannerRegex = /\/static\/[^"]+banner-1200x628\.(png|jpg)/;
          const [articleBanner] = html.match(bannerRegex) || [];

          const noDropcap = {
            color: 'inherit',
            float: 'none',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            mr: '0',
            mt: '0',
          };

          return (
            <>
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
              <Section as="article">
                <Box
                  as="header"
                  sx={{
                    maxWidth: 'maxWidths.title',
                    mx: 'auto',
                    textAlign: [null, null, null, 'center'],
                  }}
                >
                  <Box
                    as="h1"
                    sx={{
                      color: 'text.primary',
                      fontSize: [4, null, 5, 6],
                    }}
                  >
                    {noOrphan(frontmatter.title)}
                  </Box>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: [null, null, null, 'center'],
                      mt: [4, null, null, 5],
                    }}
                  >
                    <Link to={`/people/${author.id}`}>
                      <Avatar
                        image={author.image}
                        size={['2rem', null, null, '3rem']}
                      />
                    </Link>
                    <Box
                      sx={{
                        color: 'text.subtle',
                        fontSize: [2, null, null, 3],
                        fontWeight: 'semibold',
                        ml: [4, null, 5],
                      }}
                    >
                      <Box
                        as={Link}
                        sx={{ color: 'inherit' }}
                        to={`/people/${author.id}`}
                      >
                        {author.givenName} {author.familyName}
                      </Box>
                      <Box as="span" sx={{ mx: 3 }}>
                        &middot;
                      </Box>
                      {frontmatter.datePublished}
                    </Box>
                  </Box>
                </Box>
                <Box
                  dangerouslySetInnerHTML={{ __html: html }}
                  sx={{
                    '.footnotes': {
                      p: { m: 0 },
                      'p, a': { display: 'inline' },
                    },
                    '.gatsby-highlight': { mb: 6 },
                    '.gatsby-resp-image-wrapper': {
                      borderRadius: 3,
                      m: 0,
                      overflow: 'hidden',
                    },
                    '.invisible': {
                      clip: 'rect(1px, 1px, 1px, 1px)',
                      height: '1px',
                      overflow: 'hidden',
                      position: 'absolute',
                      top: 'auto',
                      whiteSpace: 'nowrap',
                      width: '1px',
                    },
                    a: {
                      '&:hover': { textDecoration: 'underline' },
                      color: 'text.link',
                    },
                    blockquote: {
                      '&>p': { mb: 0 },
                      bg: 'white',
                      borderLeftColor: 'text.subtle',
                      borderLeftStyle: 'solid',
                      borderLeftWidth: '0.9rem',
                      color: 'grays.4',
                      fontStyle: 'italic',
                      fontWeight: 'semibold',
                      m: 0,
                      mb: 6,
                      p: 6,
                      'p:first-of-type .dropcap': noDropcap,
                    },
                    h2: { lineHeight: 0, mb: 6, mt: 7 },
                    h3: { lineHeight: 1, mb: 2, mt: 7 },
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
                    lineHeight: 2,
                    maxWidth: 'maxWidths.paragraph',
                    mt: 8,
                    mx: 'auto',
                    ol: { listStyle: 'decimal', ml: '1em' },
                    'ol, ul': {
                      listStylePosition: 'outside',
                      mb: 6,
                      p: 0,
                      'p:first-of-type .dropcap': noDropcap,
                    },
                    p: { mb: 6, mr: '-0.75rem' },
                    'p:first-of-type .dropcap': {
                      color: 'accent',
                      float: 'left',
                      fontFamily: 'secondary',
                      fontSize: '3.65rem',
                      fontWeight: 'bold',
                      mr: '1.1rem',
                      mt: '0.9rem',
                    },
                    ul: { listStyle: 'disc', ml: '1em' },
                  }}
                />
                <ShareCTA
                  link={`${siteUrl}/perspectives${slug}`}
                  title={frontmatter.title}
                />
              </Section>
            </>
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
