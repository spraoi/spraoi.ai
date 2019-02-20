import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import KaranMishra from '../../components/Images/KaranMishra';
import MatthiewOmara from '../../components/Images/MatthewOmara';
import SantoashRajaram from '../../components/Images/SantoashRajaram';
import SEO from '../../components/SEO';
import { ReactComponent as Placeholder } from '../../images/icons/placeholder.svg';
import { ReactComponent as SynapseBackground } from '../../images/icons/synapse-background.svg';

const HeroSynapseIcon = styled(SynapseBackground)`
  position: absolute;
  top: -30.3rem;
  left: -50rem;
  width: 80rem;
  opacity: 0.5;
  z-index: -1;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    top: -29.5rem;
    left: -44.5rem;
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    top: -28.3rem;
    left: -43rem;
  }
`;

const SolutionsSynapseIcon = styled(SynapseBackground)`
  position: absolute;
  top: -30.4rem;
  right: -50rem;
  width: 80rem;
  opacity: 0.5;
  z-index: -1;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    top: -15.5rem;
    right: -44.5rem;
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    top: -11.8rem;
    right: -43rem;
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    top: -15rem;
  }
`;

const HeroSection = styled.section`
  position: relative;
  margin-top: ${p => p.theme.space.xl};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 58% 42%;
  }
`;

const Section = styled.section`
  position: relative;
  margin-top: ${p => p.theme.space.xxxl};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: ${p => p.top};
  }
`;

Section.PropTypes = {
  top: PropTypes.string.isRequired,
};

const SectionH1 = styled.h1`
  position: relative;
  left: -${p => p.theme.space.xxxs};
  color: ${p => p.theme.colors.primaryDark};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1em;
  white-space: nowrap;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    font-size: ${p => p.theme.fontSizes.hero};
  }
`;

const SectionH2 = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1em;
  white-space: nowrap;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

const SectionH3 = styled.h3`
  margin: ${p => p.theme.space.xxxs} 0;
`;

const SectionParagraph = styled.p`
  font-weight: ${p => p.theme.fontWeights.light};
  letter-spacing: ${p => p.theme.letterSpacings.sm};
  line-height: ${p => p.theme.lineHeights.lg};
`;

const TextRight = styled.div`
  @media (min-width: ${p => p.theme.breakpoints.md}) {
    order: 2;
  }
`;

const FiguresLeft = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    display: block;
    margin-right: ${p => p.theme.space.xl};
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    top: -${p => p.theme.space.xl};
    margin: 0;
  }
`;

const FiguresRight = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    display: block;
    margin-left: ${p => p.theme.space.xl};
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    top: -${p => p.theme.space.lg};
    right: -${p => p.theme.space.xl};
    margin: 0;
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

    &:nth-of-type(1) {
    }

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
      top: 12rem;
      left: 0;
    }

    &:nth-of-type(3) {
      top: 14rem;
      left: 14rem;
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

const IconFigure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 9rem;
  height: 9rem;
  padding: ${p => p.theme.space.sm} ${p => p.theme.space.sm}
    ${p => p.theme.space.xs};
  border-radius: ${p => p.theme.radii.lg};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.boxShadows.md};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.sm};
  font-weight: ${p => p.theme.fontWeights.light};
  line-height: ${p => p.theme.lineHeights.md};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacings.lg};
`;

const StyledIcon = styled.div`
  width: 2.5rem;
  fill: ${p => p.theme.colors.white};
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
  font-weight: ${p => p.theme.fontWeights.light};
  line-height: ${p => p.theme.lineHeights.md};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacings.lg};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 17rem;
    height: 17rem;
  }
`;

const StyledImage = styled.div`
  width: 9rem;
  height: 9rem;
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
          challenges and optimize outcomes through technology solutions
          and&nbsp;associated&nbsp;services.
        </SectionParagraph>
      </div>
      <FiguresRight>
        <FigureStructure1 as={IconFigure}>
          <StyledIcon as={Placeholder} />
          <figcaption>
            Insurance SME<NoCap>s</NoCap> Big 4 Consulting
          </figcaption>
        </FigureStructure1>
        <FigureStructure1 as={IconFigure}>
          <StyledIcon as={Placeholder} />
          <figcaption>Silicon Valley Technologists</figcaption>
        </FigureStructure1>
        <FigureStructure1 as={IconFigure}>
          <StyledIcon as={Placeholder} />
          <figcaption>Offshore Scale</figcaption>
        </FigureStructure1>
      </FiguresRight>
    </HeroSection>
    <Section top="20rem">
      <div>
        <SectionH2>Founding Team</SectionH2>
        <SectionParagraph>
          We bring experience over 35 years of insurance experience from carrier
          and consultancy perspectives (PwC, Deloitte, EY), and combined it with
          tech expertise from Apple&nbsp;and&nbsp;Oracle.
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
          enabled customer experience. Our combination of business and
          engineering talent can deliver technology services in
          several&nbsp;key&nbsp;areas.
        </SectionParagraph>
      </TextRight>
      <FiguresLeft>
        <FigureStructure3 as={IconFigure}>
          <StyledIcon as={Placeholder} />
          <figcaption>Insurance Machine Learning Solutions</figcaption>
        </FigureStructure3>
        <FigureStructure3 as={IconFigure}>
          <StyledIcon as={Placeholder} />
          <figcaption>Technology Services</figcaption>
        </FigureStructure3>
        <FigureStructure3 as={IconFigure}>
          <StyledIcon as={Placeholder} />
          <figcaption>Customer Experience Solutions</figcaption>
        </FigureStructure3>
      </FiguresLeft>
    </Section>
    <Section top="20rem">
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
