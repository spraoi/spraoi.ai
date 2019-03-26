import React from 'react';
import LinkList from '../../components/LinkList';
import ArticlesContainer from '../../containers/ArticlesContainer';
import SEO from '../../components/SEO';
import {
  HeroSection,
  Section,
  SectionBg,
  SectionH1,
  SectionParagraph,
} from '../../components/Section';
import BgLanding from '../../images/icons/bg-landing.svg';

const Articles = () => (
  <>
    <SEO
      description="We have strong opinions on the market and technology’s role in it."
      title="Articles"
    />
    <HeroSection center single>
      <div>
        <SectionBg as={BgLanding} left="-31.5rem" top="-30.5rem" />
        <SectionH1>Articles</SectionH1>
        <SectionParagraph center>
          We have strong opinions on the market and technology&rsquo;s role in
          it.
        </SectionParagraph>
      </div>
    </HeroSection>
    <Section single>
      <ArticlesContainer>
        {articles => (
          <LinkList
            links={articles.map(article => ({
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
