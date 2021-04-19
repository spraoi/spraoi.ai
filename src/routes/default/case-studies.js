import Box from '@spraoi/base/Box';
import React from 'react';
import ContactCTA from '../../components/ContactCTA';
import LinkList from '../../components/LinkList';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import useCaseStudies from '../../effects/use-case-studies';

const CaseStudies = () => {
  const caseStudies = useCaseStudies();
  return (
    <>
      <SEO
        description="News travels fast these days. Stay apprised of all things Spraoi here."
        title="CaseStudies"
      />
      <Section sx={{ textAlign: [null, null, 'center'] }}>
        <Box as="h1" sx={{ fontSize: [5, null, 6] }}>
          CaseStudies
        </Box>
        {/* <Box
          as="p"
          sx={{
            fontSize: 4,
            lineHeight: 1,
            maxWidth: 'maxWidths.paragraph',
            mt: 5,
            mx: 'auto',
          }}
        >

        </Box> */}
      </Section>
      <Section sx={{ px: [null, null, 7] }}>
        <LinkList
          items={caseStudies.map((caseStudy) => ({
            link: `/case-studies${caseStudy.fields.slug}`,
            subText: caseStudy.frontmatter.datePublished,
            title: caseStudy.frontmatter.title,
          }))}
          titleAs="h2"
        />
      </Section>
      <ContactCTA />
    </>
  );
};

export default CaseStudies;
