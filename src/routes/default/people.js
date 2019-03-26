import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import PeopleContainer from '../../containers/PeopleContainer';
import PersonPreview from '../../components/PersonPreview';
import SEO from '../../components/SEO';
import {
  HeroSection,
  Section,
  SectionH1,
  SectionBg,
  SectionH2,
  SectionParagraph,
} from '../../components/Section';
import BgLanding from '../../images/icons/bg-landing.svg';

const PeopleList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    justify-content: center;
    margin-top: -${p => p.theme.space.lg};
  }
`;

const People = ({ location: { pathname } }) => (
  <PeopleContainer>
    {people => (
      <>
        <SEO
          description="Unique, global team of professionals delivering ensuring today&rsquo;s needs become tomorrow&rsquo;s results."
          pathname={pathname}
          title="People"
        />
        <HeroSection center single>
          <div>
            <SectionBg as={BgLanding} left="-31.5rem" top="-30.5rem" />
            <SectionH1>People</SectionH1>
            <SectionParagraph center>
              We are an eclectic mix of technologists, consultants, insurance
              domain experts and&nbsp;solution&nbsp;leaders.
            </SectionParagraph>
          </div>
        </HeroSection>
        <Section center single>
          <SectionH2>Founding Team</SectionH2>
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
          <SectionH2>Team</SectionH2>
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
