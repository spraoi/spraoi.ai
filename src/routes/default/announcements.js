import Box from '@spraoi/base/Box';
import React from 'react';
import ContactCTA from '../../components/ContactCTA';
import LinkList from '../../components/LinkList';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import useArticles from '../../effects/use-articles';

const Announcements = () => {
  const articles = useArticles();

  return (
    <>
      <SEO description="Foo bar." title="Announcements" />
      <Section sx={{ textAlign: [null, null, 'center'] }}>
        <Box as="h1" sx={{ fontSize: [5, null, 6] }}>
          Announcements
        </Box>
        <Box
          as="p"
          sx={{
            fontSize: 4,
            lineHeight: 1,
            maxWidth: 'maxWidths.paragraph',
            mt: 5,
            mx: 'auto',
          }}
        >
          Lorem ipsum dolor incididunt ut sit amet, consectetur
          adipiscing&nbsp;elit.
        </Box>
      </Section>
      <Section sx={{ px: [null, null, 7] }}>
        <LinkList
          items={articles
            .filter((article) => article.frontmatter.isAnnouncement)
            .map((article) => ({
              link: `/announcements${article.fields.slug}`,
              subText: article.frontmatter.datePublished,
              title: article.frontmatter.title,
            }))}
          titleAs="h2"
        />
      </Section>
      <ContactCTA />
    </>
  );
};

export default Announcements;
