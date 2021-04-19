/* eslint react/no-danger: off */

import 'prism-themes/themes/prism-vs.css';
import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../SEO';
import Section from '../Section';
import noOrphan from '../../utilities/no-orphan';
import useCaseStudies from '../../effects/use-case-studies';
import useMetadata from '../../effects/use-metadata';

const CaseStudyLayout = ({ location: { pathname }, pageContext: { slug } }) => {
  const { banner } = useMetadata();
  const caseStudies = useCaseStudies();

  const { frontmatter, html } = caseStudies.find(
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
          <Box as="h1" sx={{ fontSize: [4, null, 5, 6] }}>
            {noOrphan(frontmatter.title)}
          </Box>
          <Box
            as="p"
            sx={{ color: 'text.subtle', fontSize: 2, lineHeight: 2, mt: 4 }}
          >
            {frontmatter.description}
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              color: 'text.subtle',
              display: 'flex',
              fontSize: [2, null, null, 3],
              fontWeight: 'semibold',
              justifyContent: [null, null, null, 'center'],
              mt: [4, null, null, 5],
            }}
          >
            {frontmatter.datePublished}
          </Box>
        </Box>
        <Box
          dangerouslySetInnerHTML={{ __html: html }}
          sx={{
            '.footnotes': { p: { m: 0 }, 'p, a': { display: 'inline' } },
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
              fontSize: '3.8rem',
              fontWeight: 'bold',
              mr: '0.5rem',
              mt: '0.9rem',
            },
            ul: { listStyle: 'disc', ml: '1em' },
          }}
        />
      </Section>
    </>
  );
};

CaseStudyLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default CaseStudyLayout;
