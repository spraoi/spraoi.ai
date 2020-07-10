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
    <SEO
      description="We have strong opinions on the market and technology’s role in it."
      title="Perspectives"
    />
    <HeroSection center single>
      <SectionH1>PERSPECTIVES</SectionH1>
      <SectionParagraph center>
        We have strong opinions on the market and technology&rsquo;s role in it.
      </SectionParagraph>
    </HeroSection>
    <Section single>
      <ArticlesContainer>
        {(articles) => (
          <LinkList
            links={articles.map((article) => ({
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
