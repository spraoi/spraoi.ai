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
import Icon from '../Icon';

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
        <Icon
          svg={frontmatter.icon}
          sx={{
            display: 'flex',
            height: '3rem',
            justifyContent: ['flex-start', null, null, 'center'],
            maxWidth: ['calc(100% - 2rem)', null, '250px'],
            mb: 5,
            mx: [null, null, null, 'auto'],
            svg: {
              height: '100%',
              maxWidth: '100%',
            },
          }}
          width={['13rem', null, '17rem']}
        />
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
            sx={{
              fontSize: 4,
              lineHeight: 1,
              maxWidth: 'maxWidths.paragraphWidest',
              mt: 5,
              mx: 'auto',
            }}
          >
            {frontmatter.description}
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
              '&:before': {
                borderLeft: '.25rem solid',
                borderLeftColor: 'accent',
                bottom: '-2rem',
                content: "''",
                left: '-2rem',
                position: 'absolute',
                top: '-1rem',
                width: 0,
              },
              '&:last-child:before': {
                bottom: 0,
              },
              '> p': {
                mb: 4,
              },
              bg: 'white',
              borderRadius: [null, null, 2],
              boxShadow: 3,
              p: 6,
              position: 'relative',
              ul: {
                listStyle: 'disc',
                ml: 6,
              },
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
            maxWidth: 'maxWidths.paragraphWider',
            mt: 8,
            mx: 'auto',
            ol: { listStyle: 'decimal', ml: '1em' },
            'ol, ul': {
              listStylePosition: 'outside',
              p: 0,
              'p:first-of-type .dropcap': noDropcap,
            },
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
