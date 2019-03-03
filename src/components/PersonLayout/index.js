import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Box } from '@spraoi/base';
import PeopleContainer from '../../containers/PeopleContainer';
import LinkList from '../LinkList';
import SEO from '../SEO';
import {
  HeroSection,
  Section,
  SectionH1,
  SectionH2,
  SectionParagraph,
  StyledImage,
} from '../Section';
import { newline2Space, posessive } from '../../utilities/helpers';

const PersonImage = styled(StyledImage)`
  flex-shrink: 0;
  margin-top: ${p => p.theme.space.xs};
  margin-bottom: ${p => p.theme.space.md};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin-right: ${p => p.theme.space.xl};
  }
`;

const Prefix = styled.div`
  margin-bottom: 0;
  color: inherit;
  font-family: ${p => p.theme.fonts.secondary};
  font-size: ${p => p.theme.fontSizes.lg};
`;

const PersonLayout = ({ location: { pathname }, pageContext: { slug } }) => (
  <PeopleContainer>
    {people => {
      const person = people.find(person => slug.includes(person.id));
      const name = `${person.givenName} ${person.familyName}`;

      return (
        <>
          <SEO
            description="Unique, global team of professionals delivering ensuring today&rsquo;s needs become tomorrow&rsquo;s results."
            pathname={pathname}
            person={person}
            title={name}
          />
          <HeroSection single>
            <Box display={{ md: 'flex' }}>
              <div>
                <PersonImage>
                  <Img alt="" fluid={person.image} />
                </PersonImage>
              </div>
              <div>
                <Prefix>{person.position}</Prefix>
                <SectionH1 wrap={1}>{name}</SectionH1>
                <SectionParagraph>{newline2Space(person.bio)}</SectionParagraph>
              </div>
            </Box>
          </HeroSection>
          {!!person.articles.length && (
            <Section single>
              <SectionH2>{posessive(person.givenName)} Articles</SectionH2>
              <LinkList
                links={person.articles.map(article => ({
                  ctaText: 'Read Article',
                  description: article.frontmatter.description,
                  link: `/articles${article.fields.slug}`,
                  title: article.frontmatter.title,
                }))}
              />
            </Section>
          )}
        </>
      );
    }}
  </PeopleContainer>
);

PersonLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonLayout;
