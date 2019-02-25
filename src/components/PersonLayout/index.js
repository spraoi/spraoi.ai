import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Box } from '@spraoi/base';
import {
  HeroSection,
  Section,
  SectionH1,
  SectionParagraph,
  StyledImage,
} from '../Section';
import PeopleContainer from '../../containers/PeopleContainer';
import SEO from '../SEO';

const HeroImage = styled(StyledImage)`
  flex-shrink: 0;
  margin-top: ${p => p.theme.space.xs};
  margin-bottom: ${p => p.theme.space.lg};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin-right: ${p => p.theme.space.xl};
  }
`;

const StyledH2 = styled.h2`
  color: inherit;
  font-size: ${p => p.theme.fontSizes.lg};
`;

const Newline = styled.div`
  margin-bottom: ${p => p.theme.space.md};
`;

const PersonLayout = ({ location: { pathname }, pageContext: { slug } }) => (
  <PeopleContainer>
    {people => {
      const person = people.find(person => slug.includes(person.id));

      const bio = person.bio.split('\n').map((item, key) => (
        <span key={key}>
          {item}
          <Newline />
        </span>
      ));

      return (
        <>
          <SEO pathname={pathname} title={person.name} />
          <HeroSection center single>
            <SectionH1 wrap>{person.name}</SectionH1>
            <StyledH2>{person.position}</StyledH2>
          </HeroSection>
          <Section single>
            <Box display={{ md: 'flex' }} justifyContent="center">
              <HeroImage>
                <Img alt="" fluid={person.image} />
              </HeroImage>
              <SectionParagraph>{bio}</SectionParagraph>
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
