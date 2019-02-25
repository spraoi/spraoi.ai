import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ServicesProcessImg from '../../components/Images/ServicesProcessImg';
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
  SectionParagraph,
  StyledIcon,
} from '../../components/Section';
import { ReactComponent as BuildOperate } from '../../images/icons/build-operate.svg';
import { ReactComponent as Data } from '../../images/icons/data.svg';
import { ReactComponent as Innovation } from '../../images/icons/innovation.svg';
import { ReactComponent as Integration } from '../../images/icons/integration.svg';
import { ReactComponent as ThirdParty } from '../../images/icons/third-party.svg';

const FigureStructure1 = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(1) {
      top: -2rem;
    }

    &:nth-of-type(2) {
      top: -2rem;
      left: 8.7rem;
    }

    &:nth-of-type(3) {
      top: -2rem;
      right: 0;
    }

    &:nth-of-type(4) {
      top: 6.6rem;
      right: 11rem;
    }

    &:nth-of-type(5) {
      top: 6.6rem;
      right: 0;
    }
  }
`;

const Services = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Simplified and accelerated technology service delivery that maintains traction through seamless transition from concept to implementation."
      pathname={pathname}
      title="Services"
    />
    <HeroSection single>
      <SectionH1 wrap={1}>Services</SectionH1>
      <SectionParagraph>
        In addition to our products, the Spraoi team has several service areas
        where we provide accountability from concept through execution, thus
        eliminating technology as the impediment&nbsp;to&nbsp;progress.
      </SectionParagraph>
    </HeroSection>
    <Section top="11rem">
      <Order2>
        <SectionH2>Offering</SectionH2>
        <SectionParagraph>
          We provide technology strategy, management, design, development and
          deployment capabilities. When combined with the depth of our
          technology talent and domain expertise we can bring demonstrable
          change in&nbsp;mere&nbsp;weeks.
        </SectionParagraph>
      </Order2>
      <Figures left shift={false}>
        <FigureStructure1 as={IconFigure} smallOnMedium>
          <StyledIcon as={Innovation} />
          <figcaption>Innovation</figcaption>
        </FigureStructure1>
        <FigureStructure1 as={IconFigure} smallOnMedium>
          <StyledIcon as={Integration} />
          <figcaption>Integration</figcaption>
        </FigureStructure1>
        <FigureStructure1 as={IconFigure} smallOnMedium>
          <StyledIcon as={Data} />
          <figcaption>Data</figcaption>
        </FigureStructure1>
        <FigureStructure1 as={IconFigure}>
          <StyledIcon as={ThirdParty} />
          <figcaption>Third Party Administration</figcaption>
        </FigureStructure1>
        <FigureStructure1 as={IconFigure}>
          <StyledIcon as={BuildOperate} />
          <figcaption>Build, Operate &amp; Transfer</figcaption>
        </FigureStructure1>
      </Figures>
    </Section>
    <Section top="12.5rem">
      <div>
        <SectionH2>Process</SectionH2>
        <SectionParagraph>
          Be the disrupter, or get disrupted. Analytical and engineering tiger
          teams Iterative deliveries in two-week&nbsp;sprints.
        </SectionParagraph>
      </div>
      <ProcessFigure>
        <ServicesProcessImg />
      </ProcessFigure>
    </Section>
  </>
);

Services.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Services;
