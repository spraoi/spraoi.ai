import Box from '@spraoi/base/Box';
import React from 'react';
import ArticlesContainer from '../../containers/ArticlesContainer';
import ContactCTA from '../../components/ContactCTA';
import LinkList from '../../components/LinkList';
import SEO from '../../components/SEO';
import Section from '../../components/Section';

const Perspectives = () => (
  <>
    <SEO
      description="We have strong opinions on the market and technology’s role in it."
      title="Perspectives"
    />
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <Box as="h1" sx={{ color: 'text.primary' }}>
        Perspectives
      </Box>
      <Box as="p" sx={{ lineHeight: 1, mt: 4 }}>
        We have strong opinions on the market and technology&rsquo;s
        role&nbsp;in&nbsp;it.
      </Box>
    </Section>
    <ArticlesContainer>
      {(articles) => (
        <LinkList
          items={articles.map((article) => ({
            floatText: article.fields.readingTime.text,
            image: article.author.image,
            link: `/perspectives${article.fields.slug}`,
            subText: (
              <>
                {article.author.givenName} {article.author.familyName}
                <Box as="span" sx={{ mx: 2 }}>
                  &middot;
                </Box>
                {article.frontmatter.datePublished}
              </>
            ),
            title: article.frontmatter.title,
          }))}
        />
      )}
    </ArticlesContainer>
    <ContactCTA />
  </>
);

export default Perspectives;
