import React from 'react';
import LinkList from '../../components/LinkList';
import ArticlesContainer from '../../containers/ArticlesContainer';
import SEO from '../../components/SEO';
import {
  HeroSection,
  Section,
  SectionH1,
  SectionParagraph,
} from '../../components/Section';

const Articles = () => (
  <>
    <SEO description="" title="Articles" />
    <HeroSection center single>
      <SectionH1>Articles</SectionH1>
      <SectionParagraph center>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </SectionParagraph>
    </HeroSection>
    <Section center single>
      <ArticlesContainer>
        {articles => (
          <LinkList
            links={articles.map(article => ({
              ctaText: 'Read Article',
              description: article.frontmatter.description,
              link: `/articles${article.fields.slug}`,
              title: article.frontmatter.title,
            }))}
          />
        )}
      </ArticlesContainer>
    </Section>
  </>
);

export default Articles;
