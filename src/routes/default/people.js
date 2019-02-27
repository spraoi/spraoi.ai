import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import PersonPreview from '../../components/PersonPreview';
import SEO from '../../components/SEO';
import {
  HeroSection,
  Section,
  SectionH1,
  SectionH2,
  SectionParagraph,
} from '../../components/Section';
import PeopleContainer from '../../containers/PeopleContainer';
import { ReactComponent as BgPeople } from '../../images/icons/bg-people.svg';

const HeroBg = styled(BgPeople)`
  position: absolute;
  top: -15em;
  left: -25rem;
  width: 55rem;
  z-index: -1;
`;

const PeopleList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: ${p => p.theme.space.lg};
  margin-bottom: -${p => p.theme.space.lg};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    justify-content: center;
    margin-top: ${p => p.theme.space.xl};
  }
`;

const People = ({ location: { pathname } }) => (
  <PeopleContainer>
    {people => (
      <>
        <SEO
          description="Our diverse team of onsite/offshore resources provide a robust delivery model to ensure that today&rsquo;s needs become tomorrow&rsquo;s results."
          pathname={pathname}
          title="People"
        />
        <HeroSection center single>
          <HeroBg />
          <SectionH1>People</SectionH1>
          <SectionParagraph center>
            We are an eclectic mix of technologists, consultants, insurance
            domain experts and&nbsp;solution&nbsp;leaders.
          </SectionParagraph>
        </HeroSection>
        <Section center single>
          <SectionH2>Leadership</SectionH2>
          <PeopleList>
            {people
              .filter(p => p.executive > 0 && p.active === 'y')
              .sort((a, b) => (a.executive > b.executive ? 1 : -1))
              .map(person => (
                <PersonPreview key={person.id} as="li" {...person} />
              ))}
          </PeopleList>
        </Section>
        <Section center single>
          <SectionH2>Our Team</SectionH2>
          <PeopleList>
            {people
              .filter(p => p.executive === 0 && p.active === 'y')
              .sort((a, b) => (a.givenName > b.givenName ? 1 : -1))
              .map(person => (
                <PersonPreview key={person.id} as="li" {...person} />
              ))}
          </PeopleList>
        </Section>
      </>
    )}
  </PeopleContainer>
);

People.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default People;
