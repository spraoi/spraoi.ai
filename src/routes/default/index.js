import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';
import {
  Figure,
  Figures,
  HeroSection,
  IconFigure,
  Order2,
  Section,
  SectionBg,
  SectionH1,
  SectionH2,
  SectionH3,
  SectionParagraph,
  StyledIcon,
} from '../../components/Section';
import BgLanding from '../../images/icons/bg-landing.svg';
import Bridge from '../../images/icons/bridge.svg';
import CxSolutions from '../../images/icons/cx-solutions.svg';
import Hand from '../../images/icons/hand.svg';
import Iml from '../../images/icons/iml.svg';
import India from '../../images/icons/india.svg';
import Offshore from '../../images/icons/offshore.svg';
import Services from '../../images/icons/services.svg';
import Usa from '../../images/icons/usa.svg';

const ThreeRight = styled(Figure)`
  @media (min-width: ${p => p.theme.breakpoints.md}) {
    top: -${p => p.theme.space.xl};
    left: ${p => p.theme.space.sm};
    margin-bottom: ${p => p.theme.space.lg};
    margin-left: ${p => p.theme.space.lg};

    &:nth-of-type(2) {
      top: ${p => p.theme.space.lg};
    }

    &:nth-of-type(3) {
      margin-bottom: -${p => p.theme.space.xl};
    }
  }
`;

const ThreeLeft = styled(Figure)`
  @media (min-width: ${p => p.theme.breakpoints.md}) {
    left: -${p => p.theme.space.lg};
    margin-right: ${p => p.theme.space.lg};
    margin-bottom: ${p => p.theme.space.lg};

    &:nth-of-type(2) {
      top: ${p => p.theme.space.xxl};
    }

    &:nth-of-type(3) {
      margin-bottom: 0;
    }
  }
`;

const TwoRight = styled(Figure)`
  @media (min-width: ${p => p.theme.breakpoints.md}) {
    &:nth-of-type(1) {
      top: -${p => p.theme.space.lg};
      left: ${p => p.theme.space.xxl};
      margin-left: ${p => p.theme.space.xxxl};
    }

    &:nth-of-type(2) {
      top: -${p => p.theme.space.xxxl};
      left: -${p => p.theme.space.md};
      margin-bottom: -${p => p.theme.space.xxxl};
    }
  }
`;

const StyledReachIcon = styled.div`
  width: 4.5rem;
  margin-right: ${p => p.theme.space.lg};
  fill: ${p => p.theme.colors.white};
`;

const IconRoundFigure = styled.figure`
  grid-column-start: 1;
  grid-column-end: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17rem;
  height: 17rem;
  padding: ${p => p.theme.space.md};
  padding-right: ${p => p.theme.space.sm};
  border-radius: 50%;
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.boxShadows.md};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.lg};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacings.lg};

  &:nth-of-type(2) {
    width: 15.25rem;
    height: 15.25rem;
  }

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
    <HeroSection top>
      <div>
        <SectionBg as={BgLanding} left="-31.5rem" top="-30.5rem" />
        <SectionH1>About Spraoi</SectionH1>
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
    <Section>
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
    <Section top>
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
