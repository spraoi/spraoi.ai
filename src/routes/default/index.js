import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PeopleContainer from '../../containers/PeopleContainer';
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
  StyledImage,
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
  top: -30.3rem;
  left: -50rem;
  width: 80rem;
  opacity: 0.8;
  z-index: -1;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    top: -28.3rem;
    left: -44.5rem;
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    top: -27.6rem;
    left: -43rem;
  }
`;

const SolutionsBg = styled(BgLanding)`
  position: absolute;
  top: -27.7rem;
  right: -54rem;
  width: 80rem;
  opacity: 0.8;
  z-index: -1;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    top: -15rem;
    right: -44.5rem;
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    top: -10.9rem;
    right: -43rem;
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    top: -14.2rem;
  }
`;

const FigureStructure1 = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(1) {
      left: 3rem;
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
      left: 12rem;
    }

    &:nth-of-type(2) {
      top: 12rem;
      left: 0;
    }

    &:nth-of-type(3) {
      top: 14.5rem;
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

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 17rem;
    height: 17rem;
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
  <PeopleContainer>
    {people => (
      <>
        <SEO />
        <HeroSection>
          <HeroBg />
          <div>
            <SectionH1>Who are we?</SectionH1>
            <SectionParagraph>
              Spraoi is an insurance technology solutions provider with a focus
              on machine learning. We work with leading insurers to solve
              business challenges and optimize outcomes through technology
              solutions and associated services.
            </SectionParagraph>
          </div>
          <Figures>
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
          </Figures>
        </HeroSection>
        <Section top="19rem">
          <div>
            <SectionH2>Founding Team</SectionH2>
            <SectionParagraph>
              We bring experience over 35 years of insurance experience from
              carrier and consultancy perspectives (PwC, Deloitte, EY), and
              combined it with tech expertise from Apple and Oracle.
            </SectionParagraph>
          </div>
          <Figures>
            {people
              .filter(p => p.executive > 0 && p.active === 'y')
              .sort((a, b) => (a.executive > b.executive ? 1 : -1))
              .map(({ id, image, name }) => (
                <FigureStructure2 key={id}>
                  <Link to={`/people/${id}/`}>
                    <StyledImage clickable>
                      <Img alt="" fluid={image} />
                    </StyledImage>
                  </Link>
                  <ImageFigureFigcaption>{name}</ImageFigureFigcaption>
                </FigureStructure2>
              ))}
          </Figures>
        </Section>
        <Section top="25rem">
          <SolutionsBg />
          <Order2>
            <SectionH2>Solutions & Services</SectionH2>
            <SectionParagraph>
              We have OOB solutions for machine learning and machine learning
              enabled customer experiences. Our combination of business and
              engineering talent can deliver technology services in several
              key&nbsp;areas.
            </SectionParagraph>
          </Order2>
          <Figures left>
            <FigureStructure3 as={IconFigure}>
              <StyledIcon as={Iml} />
              <figcaption>Machine Learning Solutions</figcaption>
            </FigureStructure3>
            <FigureStructure3 as={IconFigure}>
              <StyledIcon as={Services} />
              <figcaption>Technology Services</figcaption>
            </FigureStructure3>
            <FigureStructure3 as={IconFigure}>
              <StyledIcon as={CxSolutions} />
              <figcaption>Customer Experience Solutions</figcaption>
            </FigureStructure3>
          </Figures>
        </Section>
        <Section bottom={{ md: '13.5rem', xl: '11.5rem' }} top="21rem">
          <div>
            <SectionH2>Reach</SectionH2>
            <SectionParagraph>
              We have a global team of 26 (including delivery partners), and
              have established a repeatable onsite/offshore delivery mode and
              continue&nbsp;to&nbsp;optimize.
            </SectionParagraph>
          </div>
          <Figures>
            <FigureStructure4 as={IconRoundFigure}>
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
            </FigureStructure4>
            <FigureStructure4 as={IconRoundFigure}>
              <StyledReachIcon as={India} />
              <figcaption>
                <SectionH3>India</SectionH3>
                <ul>
                  <li>Bangalore</li>
                  <li>Mumbai</li>
                  <li>Mysore</li>
                </ul>
              </figcaption>
            </FigureStructure4>
          </Figures>
        </Section>
      </>
    )}
  </PeopleContainer>
);

export default Index;
