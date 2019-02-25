/* eslint react/no-danger: off */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ArticlesContainer from '../../containers/ArticlesContainer';
import SEO from '../SEO';
import { HeroSection, Section, SectionH1, SectionParagraph } from '../Section';

const ArticleText = styled(SectionParagraph)`
  p {
    margin-top: ${p => p.theme.space.lg};

    &:first-of-type {
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
            article={{ ...frontmatter, author: author.name }}
            pathname={pathname}
          />
          <HeroSection single>
            <SectionH1 wrap={1}>{frontmatter.title}</SectionH1>
          </HeroSection>
          <Section single>
            <ArticleText as="div" dangerouslySetInnerHTML={{ __html: html }} />
          </Section>
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
