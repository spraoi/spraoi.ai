import PropTypes from 'prop-types';
import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import styled from 'styled-components';
import SEO from '../../components/SEO';
import {
  Figures,
  HeroSection,
  IconFigure,
  Order2,
  Section,
  SectionH1,
  SectionH2,
  SectionH3,
  SectionParagraph,
  StyledIcon,
} from '../../components/Section';
import { ReactComponent as Factory } from '../../images/icons/factory.svg';
import { ReactComponent as Group } from '../../images/icons/group.svg';
import { ReactComponent as Lifebuoy } from '../../images/icons/lifebuoy.svg';

const ThreeLeft = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(1) {
      top: 1rem;
      right: 0;
    }

    &:nth-of-type(2) {
      top: 6rem;
      left: 4.5rem;
    }

    &:nth-of-type(3) {
      top: 13rem;
      right: 0;
    }
  }
`;

const SectionSecondParagraph = styled(SectionParagraph)`
  margin-top: ${p => p.theme.space.md};
`;

const CustomerExperienceSolutions = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Microservices architected customer experience portal solution."
      pathname={pathname}
      title="Customer Experience Solutions"
    />
    <HeroSection single>
      <SectionH1 wrap={1}>
        Customer
        <br />
        Experience Solutions
      </SectionH1>
      <SectionParagraph>
        We have leveraged our Kwikcover&trade; customer experience portal
        platform to develop specific solutions across
        insurance&nbsp;industry&nbsp;sectors.
      </SectionParagraph>
    </HeroSection>
    <Section>
      <Order2>
        <SectionH2>Solutions</SectionH2>
        <div>
          <SectionParagraph>
            Our portal supports agent and d2c models with a single, easy-to-use
            and consistent interface that spans the insurance lifecycle and can
            easily be integrated with several administration
            platforms&nbsp;as&nbsp;a&nbsp;veneer.
          </SectionParagraph>
          <SectionSecondParagraph>
            Our solutions provide the plug and play digital experience consumers
            have come to expect, with a microservices architecture that enables
            ease&nbsp;of&nbsp;integration.
          </SectionSecondParagraph>
        </div>
      </Order2>
      <Figures left>
        <ThreeLeft as={IconFigure}>
          <StyledIcon as={Group} />
          <figcaption>Group &amp; Voluntary Benefits</figcaption>
        </ThreeLeft>
        <ThreeLeft as={IconFigure}>
          <StyledIcon as={Lifebuoy} />
          <figcaption>Life Insurance</figcaption>
        </ThreeLeft>
        <ThreeLeft as={IconFigure}>
          <StyledIcon as={Factory} />
          <figcaption>Small Commercial</figcaption>
        </ThreeLeft>
      </Figures>
    </Section>
    <Section single>
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Group &amp; Voluntary Benefits</SectionH3>
        <p>
          Our group benefits and voluntary enrollment solution is developed on
          our Kwikcover TM portal environment. It features case setup,
          enrollment and service functionality, and comes pre- integrated with
          our machine learning capability to predict an individual’s propensity
          to purchase particular&nbsp;products.
        </p>
      </SectionParagraph>
    </Section>
    <Section single top="2rem">
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Life Insurance</SectionH3>
        <p>
          Our retail life and annuities solution, when coupled with our third
          party administration (TPA) partnership, provides a comprehensive
          offering and reduced time to market for carriers looking to enable a
          direct to&nbsp;consumer&nbsp;strategy.
        </p>
      </SectionParagraph>
    </Section>
    <Section single top="2rem">
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Small Commercial</SectionH3>
        <p>
          Our small commercial portal solution comes pre-integrated with a
          comprehensive administration suite to provide an easy purchase,
          self-service (e.g. endorsements) and first notice of
          claim&nbsp;(FNOL)&nbsp;experience.
        </p>
      </SectionParagraph>
    </Section>
    <Section single>
      <ResponsiveEmbed
        allowFullScreen
        src="https://www.youtube.com/embed/-qL8iwaMmq4"
      />
    </Section>
  </>
);

CustomerExperienceSolutions.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomerExperienceSolutions;
