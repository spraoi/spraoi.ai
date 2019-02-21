import React from 'react';
import styled from 'styled-components';
import KaranMishra from '../../components/Images/KaranMishra';
import MatthiewOmara from '../../components/Images/MatthewOmara';
import SEO from '../../components/SEO';
import SantoashRajaram from '../../components/Images/SantoashRajaram';
import {
  FiguresLeft,
  FiguresRight,
  HeroSection,
  IconFigure,
  Section,
  SectionH1,
  SectionH2,
  SectionH3,
  SectionParagraph,
  StyledIcon,
  TextRight,
} from '../../components/Section';
import { ReactComponent as BgLanding } from '../../images/icons/bg-landing.svg';
import { ReactComponent as Bridge } from '../../images/icons/bridge.svg';
import { ReactComponent as CxSolutions } from '../../images/icons/cx-solutions.svg';
import { ReactComponent as Hand } from '../../images/icons/hand.svg';
import { ReactComponent as Iml } from '../../images/icons/iml.svg';
import { ReactComponent as Offshore } from '../../images/icons/offshore.svg';
import { ReactComponent as Placeholder } from '../../images/icons/placeholder.svg';
import { ReactComponent as Services } from '../../images/icons/services.svg';

const HeroSynapseIcon = styled(BgLanding)`
  position: absolute;
  top: -30.3rem;
  left: -50rem;
  width: 80rem;
  opacity: 0.8;
  z-index: -1;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    top: -28.5rem;
    left: -44.5rem;
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    top: -27.8rem;
    left: -43rem;
  }
`;

const SolutionsSynapseIcon = styled(BgLanding)`
  position: absolute;
  top: -29.7rem;
  right: -52rem;
  width: 80rem;
  opacity: 0.8;
  z-index: -1;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    top: -15.5rem;
    right: -44.5rem;
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    top: -10.3rem;
    right: -43rem;
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    top: -13.5rem;
  }
`;

const FigureStructure1 = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(1) {
      left: 4rem;
    }

    &:nth-of-type(2) {
      top: 12rem;
      right: 0;
    }

    &:nth-of-type(3) {
      top: 14rem;
      right: 14rem;
    }
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    &:nth-of-type(1) {
      right: 10rem;
      left: auto;
    }
  }
`;

const FigureStructure2 = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(2) {
      top: 3rem;
      right: 0;
    }

    &:nth-of-type(3) {
      top: 15rem;
      right: 13rem;
    }
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    &:nth-of-type(3) {
      top: 16.5rem;
    }
  }
`;

const FigureStructure3 = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(1) {
      left: 10rem;
    }

    &:nth-of-type(2) {
      top: 13.5rem;
      left: 0;
    }

    &:nth-of-type(3) {
      top: 15.5rem;
      right: 0;
    }
  }
`;

const FigureStructure4 = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(1) {
      top: 9rem;
      left: -10rem;
    }

    &:nth-of-type(2) {
      top: -2rem;
      right: 0;
    }
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    &:nth-of-type(1) {
      left: -7rem;
    }
  }
`;

const StyledReachIcon = styled.div`
  width: 4.5rem;
  margin-right: ${p => p.theme.space.md};
  fill: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 5rem;
  }
`;

const IconRoundFigure = styled.figure`
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

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 17rem;
    height: 17rem;
  }
`;

const StyledImage = styled.div`
  width: 9.2rem;
  height: 9.2rem;
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: ${p => p.theme.boxShadows.md};
  overflow: hidden;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 10rem;
    height: 10rem;
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    width: 11rem;
    height: 11rem;
  }
`;

const ImageFigureFigcaption = styled.figcaption`
  margin-top: ${p => p.theme.space.md};
  font-size: ${p => p.theme.fontSizes.sm};
  font-weight: ${p => p.theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacings.lg};
  text-align: center;
`;

const NoCap = styled.span`
  text-transform: initial;
`;

const Index = () => (
  <>
    <SEO />
    <HeroSection>
      <HeroSynapseIcon />
      <div>
        <SectionH1>Who are we?</SectionH1>
        <SectionParagraph>
          Spraoi is an insurance technology solutions provider with a focus on
          machine learning. We work with leading insurers to solve business
          challenges and optimize outcomes through technology solutions and
          associated services.
        </SectionParagraph>
      </div>
      <FiguresRight>
        <FigureStructure1 as={IconFigure}>
          <StyledIcon as={Hand} />
          <figcaption>
            Insurance SME<NoCap>s</NoCap> Big 4 Consulting
          </figcaption>
        </FigureStructure1>
        <FigureStructure1 as={IconFigure}>
          <StyledIcon as={Bridge} />
          <figcaption>Silicon Valley Technologists</figcaption>
        </FigureStructure1>
        <FigureStructure1 as={IconFigure}>
          <StyledIcon as={Offshore} />
          <figcaption>Offshore Scale</figcaption>
        </FigureStructure1>
      </FiguresRight>
    </HeroSection>
    <Section top="21rem">
      <div>
        <SectionH2>Founding Team</SectionH2>
        <SectionParagraph>
          We bring experience over 35 years of insurance experience from carrier
          and consultancy perspectives (PwC, Deloitte, EY), and combined it with
          tech expertise from Apple and Oracle.
        </SectionParagraph>
      </div>
      <FiguresRight>
        <FigureStructure2>
          <StyledImage>
            <MatthiewOmara />
          </StyledImage>
          <ImageFigureFigcaption>Matthew O&rsquo;mara</ImageFigureFigcaption>
        </FigureStructure2>
        <FigureStructure2>
          <StyledImage>
            <KaranMishra />
          </StyledImage>
          <ImageFigureFigcaption>Karan Mishra</ImageFigureFigcaption>
        </FigureStructure2>
        <FigureStructure2>
          <StyledImage>
            <SantoashRajaram />
          </StyledImage>
          <ImageFigureFigcaption>Santoash Rajaram</ImageFigureFigcaption>
        </FigureStructure2>
      </FiguresRight>
    </Section>
    <Section top="27rem">
      <SolutionsSynapseIcon />
      <TextRight>
        <SectionH2>Solutions & Services</SectionH2>
        <SectionParagraph>
          We have OOB solutions for machine learning and machine learning
          enabled customer experiences. Our combination of business and
          engineering talent can deliver technology services in several key
          areas.
        </SectionParagraph>
      </TextRight>
      <FiguresLeft>
        <FigureStructure3 as={IconFigure}>
          <StyledIcon as={Iml} />
          <figcaption>Insurance Machine Learning Solutions</figcaption>
        </FigureStructure3>
        <FigureStructure3 as={IconFigure}>
          <StyledIcon as={Services} />
          <figcaption>Technology Services</figcaption>
        </FigureStructure3>
        <FigureStructure3 as={IconFigure}>
          <StyledIcon as={CxSolutions} />
          <figcaption>Customer Experience Solutions</figcaption>
        </FigureStructure3>
      </FiguresLeft>
    </Section>
    <Section bottom={{ md: '14.5rem', xl: '12.3rem' }} top="21rem">
      <div>
        <SectionH2>Reach</SectionH2>
        <SectionParagraph>
          We have a global team of 26 (including delivery partners), and have
          established a repeatable onsite/offshore delivery mode and
          continue&nbsp;to&nbsp;optimize.
        </SectionParagraph>
      </div>
      <FiguresRight>
        <FigureStructure4 as={IconRoundFigure}>
          <StyledReachIcon as={Placeholder} />
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
        </FigureStructure4>
        <FigureStructure4 as={IconRoundFigure}>
          <StyledReachIcon as={Placeholder} />
          <figcaption>
            <SectionH3>India</SectionH3>
            <ul>
              <li>Bangalore</li>
              <li>Mumbai</li>
              <li>Mysore</li>
            </ul>
          </figcaption>
        </FigureStructure4>
      </FiguresRight>
    </Section>
  </>
);

export default Index;
