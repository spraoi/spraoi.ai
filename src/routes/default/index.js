import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';
import {
  Figures,
  HeroSection,
  IconFigure,
  Section,
  SectionH1,
  SectionH2,
  SectionH3,
  SectionParagraph,
  StyledIcon,
  Order2,
} from '../../components/Section';
import { ReactComponent as BgLanding } from '../../images/icons/bg-landing.svg';
import { ReactComponent as Bridge } from '../../images/icons/bridge.svg';
import { ReactComponent as CxSolutions } from '../../images/icons/cx-solutions.svg';
import { ReactComponent as Hand } from '../../images/icons/hand.svg';
import { ReactComponent as Iml } from '../../images/icons/iml.svg';
import { ReactComponent as India } from '../../images/icons/india.svg';
import { ReactComponent as Offshore } from '../../images/icons/offshore.svg';
import { ReactComponent as Services } from '../../images/icons/services.svg';
import { ReactComponent as Usa } from '../../images/icons/usa.svg';

const HeroBg = styled(BgLanding)`
  position: absolute;
  top: -24.4rem;
  left: -39rem;
  width: 70rem;
  z-index: -1;
`;

const ThreeRight = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(1) {
      top: -2.5rem;
      left: -1.3rem;
    }

    &:nth-of-type(2) {
      top: 2.5rem;
      right: 0;
    }

    &:nth-of-type(3) {
      top: 9.5rem;
      left: -1.3rem;
    }
  }
`;

const ThreeLeft = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(1) {
      top: -3rem;
      right: 0;
    }

    &:nth-of-type(2) {
      top: 2rem;
      left: 4.5rem;
    }

    &:nth-of-type(3) {
      top: 9rem;
      right: 0;
    }
  }
`;

const TwoRight = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(1) {
      top: 8rem;
      left: -4rem;
    }

    &:nth-of-type(2) {
      top: -4rem;
      right: 0;
    }
  }
`;

const StyledReachIcon = styled.div`
  width: 4.5rem;
  margin-right: ${p => p.theme.space.md};
  fill: ${p => p.theme.colors.white};
`;

const IconRoundFigure = styled.figure`
  grid-column-start: 1;
  grid-column-end: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.2rem;
  height: 15.2rem;
  padding: ${p => p.theme.space.md};
  padding-right: ${p => p.theme.space.sm};
  border-radius: 50%;
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.boxShadows.md};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacings.lg};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    grid-column-start: auto;
    grid-column-end: auto;
  }
`;

const NoCap = styled.span`
  text-transform: initial;
`;

const Index = () => (
  <>
    <SEO
      description="Spraoi was founded by Big Four Insurance Consulting and Silicon Valley leaders to bring disruptive capabilities to insurance consumers, agents and carriers."
      title="Spraoi - an insurtech solutions provider with a focus on machine learning"
    />
    <HeroSection>
      <div>
        <HeroBg />
        <SectionH1>About Us</SectionH1>
        <SectionParagraph>
          Spraoi is an insurance technology solutions provider with a focus on
          machine learning. We work with leading insurers to solve business
          challenges and optimize outcomes through technology solutions and
          associated services.
        </SectionParagraph>
      </div>
      <Figures>
        <ThreeRight as={IconFigure}>
          <StyledIcon as={Hand} />
          <figcaption>
            Insurance SME<NoCap>s</NoCap> Big 4 Consulting
          </figcaption>
        </ThreeRight>
        <ThreeRight as={IconFigure}>
          <StyledIcon as={Bridge} />
          <figcaption>Silicon Valley Technologists</figcaption>
        </ThreeRight>
        <ThreeRight as={IconFigure}>
          <StyledIcon as={Offshore} />
          <figcaption>Offshore Scale</figcaption>
        </ThreeRight>
      </Figures>
    </HeroSection>
    <Section top="17.5rem">
      <Order2>
        <SectionH2>Solutions & Services</SectionH2>
        <SectionParagraph>
          We have out of the box machine learning and customer experience
          solutions. Our combination of domain and engineering talent can
          expeditiously deliver insurance technology&nbsp;solutions.
        </SectionParagraph>
      </Order2>
      <Figures left>
        <ThreeLeft as={IconFigure}>
          <StyledIcon as={Iml} />
          <figcaption>ML Platform &amp; Solutions</figcaption>
        </ThreeLeft>
        <ThreeLeft as={IconFigure}>
          <StyledIcon as={Services} />
          <figcaption>Technology Solutions &amp; Services</figcaption>
        </ThreeLeft>
        <ThreeLeft as={IconFigure}>
          <StyledIcon as={CxSolutions} />
          <figcaption>Customer Experience Solutions</figcaption>
        </ThreeLeft>
      </Figures>
    </Section>
    <Section bottom={{ md: '13.5rem' }} top="15rem">
      <div>
        <SectionH2>Reach</SectionH2>
        <SectionParagraph>
          We have a global team of 24 (including delivery partners), and have
          established a repeatable onsite offshore delivery model and
          continue&nbsp;to&nbsp;optimize.
        </SectionParagraph>
      </div>
      <Figures>
        <TwoRight as={IconRoundFigure}>
          <StyledReachIcon as={Usa} />
          <figcaption>
            <SectionH3>USA</SectionH3>
            <ul>
              <li>Atlanta</li>
              <li>Chicago</li>
              <li>Philadelphia</li>
              <li>San Francisco</li>
              <li>New York</li>
              <li>Portland</li>
              <li>Dallas</li>
            </ul>
          </figcaption>
        </TwoRight>
        <TwoRight as={IconRoundFigure}>
          <StyledReachIcon as={India} />
          <figcaption>
            <SectionH3>India</SectionH3>
            <ul>
              <li>Bangalore</li>
              <li>Mumbai</li>
              <li>Mysore</li>
            </ul>
          </figcaption>
        </TwoRight>
      </Figures>
    </Section>
  </>
);

export default Index;
