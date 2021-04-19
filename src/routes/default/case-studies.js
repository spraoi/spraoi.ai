import Box from '@spraoi/base/Box';
import React from 'react';
import { Link } from 'gatsby';
import ContactCTA from '../../components/ContactCTA';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import useCaseStudies from '../../effects/use-case-studies';
import Icon from '../../components/Icon';

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
          Case Studies
        </Box>
      </Section>
      <Section sx={{ px: [null, null, 7] }}>
        <ul>
          {caseStudies
            .map((caseStudy) => ({
              description: caseStudy.frontmatter.description,
              icon: caseStudy.frontmatter.icon,
              link: `/case-studies${caseStudy.fields.slug}`,
              title: caseStudy.frontmatter.title,
            }))
            .map((item) => (
              <Box
                key={item.link}
                as="li"
                sx={{ '&:first-of-type': { mt: 0 }, mt: ['1px', null, 7] }}
              >
                <Box
                  as={Link}
                  sx={{
                    '&:hover': {
                      '.title': { color: 'accentDark' },
                      boxShadow: [null, null, 2],
                      transform: 'scale(1.01)',
                    },
                    alignItems: [null, null, null, 'center'],
                    bg: 'white',
                    borderRadius: [null, null, 2],
                    boxShadow: [null, null, 1],
                    color: 'text.primary',
                    display: 'flex',
                    flexDirection: ['column-reverse', null, null, 'row'],
                    justifyContent: 'space-between',
                    p: [6, null, null, 7],
                    textAlign: [null, null, 'center', 'left'],
                    transition: 'box-shadow 0.3s, transform 0.3s',
                  }}
                  to={item.link}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      as="h3"
                      className="title"
                      sx={{
                        color: 'accent',
                        fontSize: [3, null, null, 4],
                        transition: 'color 0.3s',
                      }}
                    >
                      {item.title}
                    </Box>
                    <Box
                      as="p"
                      sx={{
                        color: 'text.subtle',
                        fontSize: [2, null, null, 3],
                        lineHeight: 2,
                        maxWidth: '33rem',
                        mt: 4,
                      }}
                    >
                      {item.description}
                    </Box>
                  </Box>
                  <Icon
                    svg={item.icon}
                    sx={{
                      display: 'inline-block',
                      height: '3rem',
                      maxWidth: ['calc(100% - 2rem)', null, '250px'],
                      mb: 4,
                      // mx: [null, null, 'auto', 0],
                      svg: {
                        height: '100%',
                        maxWidth: '100%',
                      },
                      ...item.iconSx,
                    }}
                  />
                </Box>
              </Box>
            ))}
        </ul>
      </Section>
      <ContactCTA />
    </>
  );
};

export default CaseStudies;
