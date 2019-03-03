/* eslint react/no-danger: off */

import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ArticlesContainer from '../../containers/ArticlesContainer';
import SEO from '../SEO';
import { HeroSection, Section, SectionH1, StyledImage } from '../Section';

const Details = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${p => p.theme.space.md};
  line-height: ${p => p.theme.lineHeights.md};
`;

const PersonImage = styled(StyledImage)`
  flex-shrink: 0;
  width: 4rem;
  height: 4rem;
  margin-right: ${p => p.theme.space.md};
`;

const PersonName = styled(Link)`
  color: ${p => p.theme.colors.textPrimary};
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.semibold};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ArticleSection = styled(Section)`
  letter-spacing: ${p => p.theme.letterSpacings.sm};
  line-height: ${p => p.theme.lineHeights.lg};

  h2,
  h3,
  h4 {
    margin-top: ${p => p.theme.space.xl};
  }

  ul {
    margin-left: 1rem;
    list-style: initial;
  }

  p,
  ul {
    max-width: ${p => p.theme.maxWidths.md};
    margin-bottom: ${p => p.theme.space.lg};

    &:last-of-type {
      margin-top: 0;
    }
  }
`;

const ArticleLayout = ({ location: { pathname }, pageContext: { slug } }) => (
  <ArticlesContainer>
    {articles => {
      const { author, frontmatter, html } = articles.find(
        article => article.fields.slug === slug
      );

      return (
        <article>
          <SEO
            article={frontmatter}
            banner={frontmatter.banner}
            dateModified={frontmatter.dateModified}
            datePublished={frontmatter.datePublished}
            description={frontmatter.description}
            pathname={pathname}
            person={author}
            title={frontmatter.title}
          />
          <HeroSection single>
            <SectionH1 wrap={1}>{frontmatter.title}</SectionH1>
            <Details>
              <Link to={`/people/${author.id}`}>
                <PersonImage clickable>
                  <Img alt="" fluid={author.image} />
                </PersonImage>
              </Link>
              <ul>
                <li>
                  <PersonName to={`/people/${author.id}`}>
                    {author.givenName} {author.familyName}
                  </PersonName>
                </li>
                <li>{frontmatter.datePublished}</li>
              </ul>
            </Details>
          </HeroSection>
          <ArticleSection dangerouslySetInnerHTML={{ __html: html }} single />
        </article>
      );
    }}
  </ArticlesContainer>
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
