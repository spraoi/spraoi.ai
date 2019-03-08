import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Content from '../../components/Content';
import MlProcessImg from '../../components/Images/MlProcessImg';
import SEO from '../../components/SEO';
import {
  Figure,
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
import Barrel from '../../images/brand/barrel-logo.svg';
import Buy from '../../images/icons/buy.svg';
import CxSolutions from '../../images/icons/cx-solutions.svg';
import Disability from '../../images/icons/disability.svg';
import Fraud from '../../images/icons/fraud.svg';
import Observable from '../../images/icons/observable.svg';
import Ruler from '../../images/icons/ruler.svg';
import Scalable from '../../images/icons/scalable.svg';
import Scales from '../../images/icons/scales.svg';
import Standardized from '../../images/icons/standardized.svg';

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

const SixLeft = styled(Figure)`
  @media (min-width: ${p => p.theme.breakpoints.md}) {
    left: -${p => p.theme.space.lg};
    margin-right: ${p => p.theme.space.lg};
    margin-bottom: ${p => p.theme.space.lg};

    &:nth-of-type(4),
    &:nth-of-type(5),
    &:nth-of-type(6) {
      margin-bottom: 0;
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
    display: flex;

    & > * {
      &:first-of-type {
        width: 36%;
      }

      &:last-of-type {
        width: 65%;
      }
    }
  }
`;

const BannerHeading = styled(SectionH3)`
  letter-spacing: ${p => p.theme.letterSpacings.lg};
  line-height: ${p => p.theme.lineHeights.lg};
  text-transform: uppercase;
`;

const BannerLeft = styled.div`
  padding: ${p => p.theme.space.xxl} 0;
`;

const BannerRight = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  margin-left: -${p => p.theme.space.md};
  padding: ${p => p.theme.space.xl} 0;
  background-color: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    margin-left: -${p => p.theme.space.lg};
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    justify-content: center;
    top: -${p => p.theme.space.md};
    bottom: -${p => p.theme.space.md};
    right: 0;
    margin-left: 0;
    padding: ${p => p.theme.space.xl} ${p => p.theme.space.lg};
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
  }
`;

const StyledBarrel = styled(Barrel)`
  width: 10rem;
  margin-left: ${p => p.theme.space.lg};
`;

const MachineLearningSolutions = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Patent-pending continuous delivery platform enabling insurance specific machine learning models."
      pathname={pathname}
      title="Machine Learning Solutions"
    />
    <HeroSection single>
      <SectionH1 wrap={1}>Machine Learning Solutions</SectionH1>
      <SectionParagraph>
        With our platform, we have addressed the impediments to accelerate the
        delivery of machine learning models. Our production solutions have
        proven this&nbsp;in&nbsp;the&nbsp;market.
      </SectionParagraph>
    </HeroSection>
    <Section>
      <Order2>
        <SectionH2>Solutions</SectionH2>
        <SectionParagraph>
          Our team of analysts, data scientists and engineers have developed
          machine learning SaaS solutions that can be delivered via API or with
          our user&nbsp;experience.
        </SectionParagraph>
      </Order2>
      <Figures left>
        <ThreeLeft as={IconFigure}>
          <StyledIcon as={Fraud} />
          <figcaption>Disability Fraud Finder</figcaption>
        </ThreeLeft>
        <ThreeLeft as={IconFigure}>
          <StyledIcon as={Disability} />
          <figcaption>Disability Claims Suite</figcaption>
        </ThreeLeft>
        <ThreeLeft as={IconFigure}>
          <StyledIcon as={Buy} />
          <figcaption>Enrollment Propensity To Buy</figcaption>
        </ThreeLeft>
      </Figures>
    </Section>
    <Section>
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Disability Fraud Finder</SectionH3>
        <p>
          We have an out of the box (OOB) machine learning driven disability
          claims fraud solution complete with a user experience to improve fraud
          detection and positively impact&nbsp;your&nbsp;reserves.
        </p>
      </SectionParagraph>
    </Section>
    <Section small>
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Disability Claims Suite</SectionH3>
        <p>
          Our disability claims suite offers a comprehensive machine learning
          enabled solution for disability claims. Capabilities include
          segmentation, assignment, auto adjudication, STD to LTD bridging,
          settlement recommendations, offsets and prediction of third party
          referral&nbsp;requirements.
        </p>
      </SectionParagraph>
    </Section>
    <Section small>
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Enrollment Propensity To Buy</SectionH3>
        <p>
          Our propensity to purchase solution provides the product
          recommendation capabilities to customers based on prior
          purchasing&nbsp;behaviors.
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
    <Section>
      <Order2>
        <SectionH2>Benefits</SectionH2>
        <SectionParagraph>
          Harmonious co-existence of desired capabilities for data scientists,
          engineers and dev-ops. We enable execution of models in the same place
          without human intervention, maximizing time spent ideating
          and&nbsp;developing.
        </SectionParagraph>
      </Order2>
      <Figures left>
        <SixLeft as={IconFigure} small>
          <StyledIcon as={Scales} small />
          <figcaption>Standardized</figcaption>
        </SixLeft>
        <SixLeft as={IconFigure} small>
          <StyledIcon as={CxSolutions} small />
          <figcaption>Repeatable</figcaption>
        </SixLeft>
        <SixLeft as={IconFigure} small>
          <StyledIcon as={Observable} small />
          <figcaption>Observable</figcaption>
        </SixLeft>
        <SixLeft as={IconFigure} small>
          <StyledIcon as={Ruler} small />
          <figcaption>Measurable</figcaption>
        </SixLeft>
        <SixLeft as={IconFigure} small>
          <StyledIcon as={Standardized} small />
          <figcaption>Experimentable</figcaption>
        </SixLeft>
        <SixLeft as={IconFigure} small>
          <StyledIcon as={Scalable} small />
          <figcaption>Scalable</figcaption>
        </SixLeft>
      </Figures>
    </Section>
    <Section>
      <div>
        <SectionH2>Methodology</SectionH2>
        <SectionParagraph>
          Our team continues to develop solutions for our clients and add to our
          product and solutions portfolio. Our proven methodology can rapidly
          develop a model (with optional UX) within&nbsp;10-16&nbsp;weeks.
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
