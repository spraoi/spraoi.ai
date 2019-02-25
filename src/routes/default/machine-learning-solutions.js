import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Content from '../../components/Content';
import MlProcessImg from '../../components/Images/MlProcessImg';
import SEO from '../../components/SEO';
import {
  Figures,
  HeroSection,
  IconFigure,
  Order2,
  ProcessFigure,
  Section,
  SectionH1,
  SectionH2,
  SectionH3,
  SectionParagraph,
  StyledIcon,
} from '../../components/Section';
import { ReactComponent as Barrel } from '../../images/brand/barrel-logo.svg';
import { ReactComponent as BgSolutions } from '../../images/icons/bg-solutions.svg';
import { ReactComponent as Buy } from '../../images/icons/buy.svg';
import { ReactComponent as Delivery } from '../../images/icons/delivery.svg';
import { ReactComponent as Disability } from '../../images/icons/disability.svg';
import { ReactComponent as Fraud } from '../../images/icons/fraud.svg';
import { ReactComponent as Observable } from '../../images/icons/observable.svg';
import { ReactComponent as Placeholder } from '../../images/icons/placeholder.svg';
import { ReactComponent as Scalable } from '../../images/icons/scalable.svg';
import { ReactComponent as Standardized } from '../../images/icons/standardized.svg';
import { ReactComponent as Traceable } from '../../images/icons/traceable.svg';
import { ReactComponent as Transparent } from '../../images/icons/transparent.svg';

const HeroBg = styled(BgSolutions)`
  position: absolute;
  top: -41rem;
  right: -53rem;
  width: 80rem;
  opacity: 0.8;
  z-index: -1;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    top: -43rem;
    right: -53rem;
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    top: -41rem;
    right: -51rem;
  }
`;

const FigureStructure1 = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(2) {
      top: -2rem;
      left: 12.5rem;
    }

    &:nth-of-type(3) {
      top: 12.5rem;
      left: 2.5rem;
    }

    &:nth-of-type(4) {
      top: 10.5rem;
      right: 0;
    }
  }
`;

const BannerSection = styled(Section)`
  left: 50%;
  width: 100vw;
  transform: translateX(-50%);
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
`;

const BannerContent = styled(Content)`
  padding-top: 0;
  padding-bottom: 0;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    padding-top: 0;
    padding-bottom: 0;
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

const BannerHeading = styled(SectionH3)`
  letter-spacing: ${p => p.theme.letterSpacings.lg};
  line-height: ${p => p.theme.lineHeights.lg};
  text-transform: uppercase;
`;

const BannerLeft = styled.div`
  padding: ${p => p.theme.space.xl} 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    padding: ${p => p.theme.space.xl} ${p => p.theme.space.xxl}
      ${p => p.theme.space.xl} 0;
  }
`;

const BannerRight = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  margin-left: -${p => p.theme.space.md};
  padding: ${p => p.theme.space.xl} ${p => p.theme.space.md};
  background-color: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    margin-left: -${p => p.theme.space.lg};
    padding: ${p => p.theme.space.xl} ${p => p.theme.space.lg};
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    justify-content: center;
    top: -${p => p.theme.space.md};
    bottom: -${p => p.theme.space.md};
    left: calc(55%);
    width: calc(45%);
    margin-left: 0;
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
  }
`;

const StyledBarrel = styled(Barrel)`
  width: 12rem;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin-left: ${p => p.theme.space.lg};
  }

  @media (min-width: ${p => p.theme.breakpoints.lg}) {
    margin-left: 0;
  }
`;

const FigureStructure2 = styled.figure`
  margin: ${p => p.theme.space.md} ${p => p.theme.space.md} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin: 0 ${p => p.theme.space.md} ${p => p.theme.space.md} 0;

    &:nth-of-type(1) {
      margin-top: -4rem;
    }

    &:nth-of-type(2) {
      margin-top: -2rem;
    }

    &:nth-of-type(4) {
      margin-top: -4rem;
    }

    &:nth-of-type(5) {
      margin-top: -2rem;
    }

    &:nth-of-type(3n + 3) {
      margin-right: 0;
    }
  }
`;

const MachineLearningSolutions = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Our machine learning suite is a comprehensive set of machine learning algorithms tailored to optimize functions across the value chain using a SaaS delivery model."
      pathname={pathname}
      title="Machine Learning Solutions"
    />
    <HeroSection single>
      <HeroBg />
      <SectionH1 wrap={1}>
        Machine
        <br />
        Learning Solutions
      </SectionH1>
      <SectionParagraph>
        We have addressed specific insurance machine learning solutions
        leveraging our patent pending, comprehensive platform. They have been
        proven through production implementations.
      </SectionParagraph>
    </HeroSection>
    <Section top="11rem">
      <Order2>
        <SectionH2>Solutions</SectionH2>
        <SectionParagraph>
          Our team of analysts, data scientists and engineers have developed
          machine learning SaaS that can be delivered via API or with our user
          experience.
        </SectionParagraph>
      </Order2>
      <Figures left shift={false}>
        <FigureStructure1 as={IconFigure}>
          <StyledIcon as={Fraud} />
          <figcaption>Disability Fraud Finder</figcaption>
        </FigureStructure1>
        <FigureStructure1 as={IconFigure}>
          <StyledIcon as={Disability} />
          <figcaption>Disability Claims Suite</figcaption>
        </FigureStructure1>
        <FigureStructure1 as={IconFigure}>
          <StyledIcon as={Buy} />
          <figcaption>Enrollment Propensity To Buy</figcaption>
        </FigureStructure1>
        <FigureStructure1 as={IconFigure}>
          <StyledIcon as={Delivery} />
          <figcaption>Continuous Delivery</figcaption>
        </FigureStructure1>
      </Figures>
    </Section>
    <BannerSection single top="22.5rem">
      <BannerContent>
        <BannerRight>
          <StyledBarrel alt="Barrel" />
        </BannerRight>
        <BannerLeft>
          <BannerHeading>Our Patent Pending Infrastructure</BannerHeading>
          <SectionParagraph>
            We offer continuous delivery of machine learning models and enable
            observability in production to allow machine learning teams (e.g.
            data engineers, data scientists and dev ops)
            to&nbsp;scale&nbsp;effectively.
          </SectionParagraph>
        </BannerLeft>
      </BannerContent>
    </BannerSection>
    <Section top="14rem">
      <Order2>
        <SectionH2>Benefits</SectionH2>
        <SectionParagraph>
          Harmonious co-existence of desired capabilities for data scientists,
          engineers and dev-ops. We enable execution of models in the same place
          without human intervention, maximizing time spent ideating
          and&nbsp;developing.
        </SectionParagraph>
      </Order2>
      <Figures left shift={false} small>
        <FigureStructure2 as={IconFigure} small>
          <StyledIcon as={Scalable} />
          <figcaption>Scalable</figcaption>
        </FigureStructure2>
        <FigureStructure2 as={IconFigure} small>
          <StyledIcon as={Transparent} />
          <figcaption>Transparent</figcaption>
        </FigureStructure2>
        <FigureStructure2 as={IconFigure} small>
          <StyledIcon as={Traceable} />
          <figcaption>Traceable</figcaption>
        </FigureStructure2>
        <FigureStructure2 as={IconFigure} small>
          <StyledIcon as={Observable} />
          <figcaption>Observable</figcaption>
        </FigureStructure2>
        <FigureStructure2 as={IconFigure} small>
          <StyledIcon as={Standardized} />
          <figcaption>Standardized</figcaption>
        </FigureStructure2>
        <FigureStructure2 as={IconFigure} small>
          <StyledIcon as={Placeholder} />
          <figcaption>Idempotent</figcaption>
        </FigureStructure2>
      </Figures>
    </Section>
    <Section top="8.5rem">
      <div>
        <SectionH2>Process</SectionH2>
        <SectionParagraph>
          Have an idea for another machine learning model? Our team and proven
          process can rapidly develop a model (with optional UX) within 10-16
          weeks.
        </SectionParagraph>
      </div>
      <ProcessFigure>
        <MlProcessImg />
      </ProcessFigure>
    </Section>
  </>
);

MachineLearningSolutions.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default MachineLearningSolutions;
