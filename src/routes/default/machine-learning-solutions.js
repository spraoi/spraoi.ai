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
import { ReactComponent as BgMlSolutions } from '../../images/icons/bg-ml-solutions.svg';
import { ReactComponent as Buy } from '../../images/icons/buy.svg';
import { ReactComponent as CxSolutions } from '../../images/icons/cx-solutions.svg';
import { ReactComponent as Delivery } from '../../images/icons/delivery.svg';
import { ReactComponent as Disability } from '../../images/icons/disability.svg';
import { ReactComponent as Fraud } from '../../images/icons/fraud.svg';
import { ReactComponent as Observable } from '../../images/icons/observable.svg';
import { ReactComponent as Placeholder } from '../../images/icons/placeholder.svg';
import { ReactComponent as Scalable } from '../../images/icons/scalable.svg';
import { ReactComponent as Standardized } from '../../images/icons/standardized.svg';

const HeroBg = styled(BgMlSolutions)`
  position: absolute;
  top: -32.5rem;
  right: -38.5rem;
  width: 65rem;
  z-index: -1;
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
      description="Patent-pending continuous delivery platform enabling insurance specific machine learning models."
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
        With our platform, we have addressed the impediments and accelerated the
        delivery of machine learning models. Our production solutions have
        proven this&nbsp;in&nbsp;the&nbsp;market.
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
    <Section single top="21.5rem">
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Disability Fraud Finder</SectionH3>
        <p>
          We have an out of the box (OOB) machine learning driven disability
          claims fraud solution complete with a user experience to improve fraud
          detection and positively impact&nbsp;your&nbsp;reserves.
        </p>
      </SectionParagraph>
    </Section>
    <Section single top="2rem">
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Disability Claims Suite</SectionH3>
        <p>
          Our disability claims suite offers a comprehensive machine learning
          enabled solution for disability claims. Capabilities include
          segmentation, assignment, auto adjudication, STD to LTD bridging,
          settlement recommendations, offsets and prediction of third
          party&nbsp;referral&nbsp;requirements.
        </p>
      </SectionParagraph>
    </Section>
    <Section single top="2rem">
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Continuous Delivery of ML</SectionH3>
        <p>
          Through our patent pending Barrel&trade; infrastructure solution, we
          offer continuous delivery of machine learning models and enable
          observability in production. This environment allows your data science
          teams to scale efficiently&nbsp;and&nbsp;effectively.
        </p>
      </SectionParagraph>
    </Section>
    <BannerSection single>
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
          <StyledIcon as={Placeholder} />
          <figcaption>Standardized</figcaption>
        </FigureStructure2>
        <FigureStructure2 as={IconFigure} small>
          <StyledIcon as={CxSolutions} />
          <figcaption>Repeatable</figcaption>
        </FigureStructure2>
        <FigureStructure2 as={IconFigure} small>
          <StyledIcon as={Observable} />
          <figcaption>Observable</figcaption>
        </FigureStructure2>
        <FigureStructure2 as={IconFigure} small>
          <StyledIcon as={Placeholder} />
          <figcaption>Measurable</figcaption>
        </FigureStructure2>
        <FigureStructure2 as={IconFigure} small>
          <StyledIcon as={Standardized} />
          <figcaption>Experiment</figcaption>
        </FigureStructure2>
        <FigureStructure2 as={IconFigure} small>
          <StyledIcon as={Scalable} />
          <figcaption>Scalable</figcaption>
        </FigureStructure2>
      </Figures>
    </Section>
    <Section top="8.5rem">
      <div>
        <SectionH2>Process</SectionH2>
        <SectionParagraph>
          Our team continues to develop solutions for our clients and add to our
          product and solutions portfolio. Our proven process can rapidly
          develop a model (with optional UX) within&nbsp;10-16&nbsp;weeks.
        </SectionParagraph>
      </div>
      <div>
        <ProcessFigure>
          <MlProcessImg />
        </ProcessFigure>
      </div>
    </Section>
  </>
);

MachineLearningSolutions.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default MachineLearningSolutions;
