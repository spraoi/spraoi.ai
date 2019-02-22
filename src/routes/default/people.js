import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
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
  top: -22rem;
  left: -45rem;
  width: 80rem;
  opacity: 0.8;
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

const PersonListItem = styled.li`
  width: 9.2rem;
  height: 9.2rem;
  margin: 0 ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0;
  border-radius: ${p => p.theme.radii.md};
  box-shadow: ${p => p.theme.boxShadows.md};
  overflow: hidden;
  transition: transform ${p => p.theme.transitionSpeeds.normal};
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 7.2rem;
    height: 7.2rem;
    margin: 0 ${p => p.theme.space.lg} ${p => p.theme.space.xl};
  }
`;

const ExecListItem = styled(PersonListItem)`
  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 9.2rem;
    height: 9.2rem;
  }
`;

const People = () => (
  <PeopleContainer>
    {people => (
      <>
        <SEO />
        <HeroSection single>
          <HeroBg />
          <SectionH1>People</SectionH1>
          <SectionParagraph>
            We are an eclectic mix of technologists, consultants, insurance
            domain experts and&nbsp;solution&nbsp;leaders.
          </SectionParagraph>
        </HeroSection>
        <Section single>
          <SectionH2>Leadership</SectionH2>
          <PeopleList>
            {people
              .filter(p => p.executive > 0 && p.active === 'y')
              .sort((a, b) => (a.executive > b.executive ? 1 : -1))
              .map(({ id, image }) => (
                <ExecListItem key={id}>
                  <Image alt="" fluid={image} />
                </ExecListItem>
              ))}
          </PeopleList>
        </Section>
        <Section single>
          <SectionH2>Our Team</SectionH2>
          <PeopleList>
            {people
              .filter(p => p.executive === 0 && p.active === 'y')
              .map(({ id, image }) => (
                <PersonListItem key={id}>
                  <Image alt="" fluid={image} />
                </PersonListItem>
              ))}
          </PeopleList>
        </Section>
      </>
    )}
  </PeopleContainer>
);

export default People;
