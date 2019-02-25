import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Box } from '@spraoi/base';
import PeopleContainer from '../../containers/PeopleContainer';
import SEO from '../SEO';
import {
  HeroSection,
  Section,
  SectionH1,
  SectionParagraph,
  StyledImage,
} from '../Section';
import { newline2Space } from '../../utilities/helpers';

const PersonImage = styled(StyledImage)`
  flex-shrink: 0;
  margin-top: ${p => p.theme.space.xs};
  margin-bottom: ${p => p.theme.space.lg};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin-right: ${p => p.theme.space.xl};
  }
`;

const H2 = styled.h2`
  color: inherit;
  font-size: ${p => p.theme.fontSizes.lg};
`;

const PersonLayout = ({ location: { pathname }, pageContext: { slug } }) => (
  <PeopleContainer>
    {people => {
      const person = people.find(person => slug.includes(person.id));

      return (
        <>
          <SEO pathname={pathname} title={person.name} />
          <HeroSection center single>
            <SectionH1 wrap={1}>{person.name}</SectionH1>
            <H2>{person.position}</H2>
          </HeroSection>
          <Section single>
            <Box display={{ md: 'flex' }} justifyContent="center">
              <PersonImage>
                <Img alt="" fluid={person.image} />
              </PersonImage>
              <SectionParagraph>{newline2Space(person.bio)}</SectionParagraph>
            </Box>
          </Section>
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
