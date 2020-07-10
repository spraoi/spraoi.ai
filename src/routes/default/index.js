import React from 'react';
import styled from 'styled-components';
import BarrelLogo from '../../images/icons/barrel-logo.svg';
import BgLanding from '../../images/icons/bg-landing.svg';
import Bridge from '../../images/icons/bridge.svg';
import Hand from '../../images/icons/hand.svg';
import KcLogo from '../../images/icons/kc-logo.svg';
import Offshore from '../../images/icons/offshore.svg';
import SEO from '../../components/SEO';
import ServicesLogo from '../../images/icons/services.svg';
import { Card, CardList, Icon, Section, SectionH2 } from '../../boxComponents';
import {
  Figure,
  Figures,
  HeroSection,
  IconFigure,
  SectionBg,
  SectionH1,
  SectionParagraph,
  StyledIcon,
} from '../../components/Section';

const ThreeRight = styled(Figure)`
  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    top: -${(p) => p.theme.space[7]};
    left: ${(p) => p.theme.space[4]};
    margin-bottom: ${(p) => p.theme.space[6]};
    margin-left: ${(p) => p.theme.space[6]};

    &:nth-of-type(2) {
      top: ${(p) => p.theme.space[6]};
    }

    &:nth-of-type(3) {
      margin-bottom: -${(p) => p.theme.space[7]};
    }
  }
`;

const Index = () => (
  <>
    <SEO
      description="Spraoi was founded by Big Four Insurance Consulting and Silicon Valley leaders to bring disruptive capabilities to insurance consumers, agents and carriers."
      title="Spraoi - an insurtech solutions provider with a focus on ML"
    />
    <HeroSection top>
      <div>
        <SectionBg as={BgLanding} left="-31.5rem" top="-30.5rem" />
        <SectionH1>About Spraoi</SectionH1>
        <SectionParagraph>
          The insurance industry has spent decades and billions of dollars
          replacing policy and claims administration complexes, but largely
          failed to address the real needs of their distribution partners and
          policyholders. We at Spraoi have built specific technology solutions
          to optimize administration complexes. Our machine learning platform
          leverages the troves of carrier data to generate insights while our
          customer experience infrastructure normalizes and improves the
          purchase, service and claims processes for stakeholders.
        </SectionParagraph>
      </div>
      <Figures>
        <ThreeRight as={IconFigure}>
          <StyledIcon as={Hand} />
          <figcaption>INSURANCE SUBJECT MATTER EXPERTISE</figcaption>
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
    <Section center single>
      <SectionH2>Solution & Services</SectionH2>
      <SectionParagraph center>
        We have grown rapidly in since our inception in June 2017, bringing two
        platforms to production to enable carriers to best leverage their
        investments in core administration systems. Our team and intellectual
        property span the major lines of insurance. (property/casualty,
        life/annuities and voluntary benefits)
      </SectionParagraph>
      <CardList>
        <Card>
          <Icon
            icon={BarrelLogo}
            id="/machine-learning-solutions/"
            left
            title="OUR INSURANCE MACHINE LEARNING PLATFORM"
          />
        </Card>
        <Card>
          <Icon
            icon={KcLogo}
            id="/customer-experience-solutions/"
            left
            title="OUR CUSTOMER SERVICE INFRASTRUCTURE"
          />
        </Card>
        <Card>
          <Icon
            icon={ServicesLogo}
            id="/services/"
            left
            title="TECHNOLOGY SOLUTIONS AND SERVICES"
          />
        </Card>
      </CardList>
    </Section>
  </>
);

export default Index;
