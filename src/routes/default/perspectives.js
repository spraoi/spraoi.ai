import Box from '@spraoi/base/Box';
import React from 'react';
import ContactCTA from '../../components/ContactCTA';
import LinkList from '../../components/LinkList';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import useArticles from '../../effects/use-articles';

const Perspectives = () => {
  const articles = useArticles();

  return (
    <>
      <SEO
        description="We have strong opinions on the market and technology’s role in it."
        title="Perspectives"
      />
      <Section sx={{ textAlign: [null, null, 'center'] }}>
        <h1>Perspectives</h1>
        <Box
          as="p"
          sx={{
            fontSize: 4,
            lineHeight: 1,
            maxWidth: 'maxWidths.paragraph',
            mt: 4,
            mx: 'auto',
          }}
        >
          We have strong opinions on the market and technology&rsquo;s
          role&nbsp;in&nbsp;it.
        </Box>
      </Section>
      <Section sx={{ px: [null, null, 7] }}>
        <LinkList
          items={articles.map((article) => ({
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
          titleAs="h2"
        />
      </Section>
      <ContactCTA />
    </>
  );
};

export default Perspectives;
