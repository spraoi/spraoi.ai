import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
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
import { ReactComponent as BgCxSolutions } from '../../images/icons/bg-cx-solutions.svg';
import { ReactComponent as Chatbot } from '../../images/icons/chatbot.svg';
import { ReactComponent as CoBrowsing } from '../../images/icons/co-browsing.svg';
import { ReactComponent as Factory } from '../../images/icons/factory.svg';
import { ReactComponent as Group } from '../../images/icons/group.svg';
import { ReactComponent as Lifebuoy } from '../../images/icons/lifebuoy.svg';
import { ReactComponent as Map } from '../../images/icons/map.svg';
import { ReactComponent as Multiplatform } from '../../images/icons/multiplatform.svg';

const HeroBg = styled(BgCxSolutions)`
  position: absolute;
  top: -21rem;
  right: -10rem;
  width: 40rem;
  z-index: -1;
`;

const ThreeLeft = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(1) {
      top: -3rem;
      right: 0;
    }

    &:nth-of-type(2) {
      top: 2rem;
      left: 2.6rem;
    }

    &:nth-of-type(3) {
      top: 9rem;
      right: 0;
    }
  }
`;

const FourRight = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(1) {
      top: -3rem;
      left: -1.5rem;
    }

    &:nth-of-type(2) {
      top: -3rem;
      right: 4.2rem;
    }

    &:nth-of-type(3) {
      top: 9rem;
      left: -1.5rem;
    }

    &:nth-of-type(4) {
      top: 9rem;
      right: 4.2rem;
    }
  }
`;

const Screenshot = styled.div`
  box-shadow: ${p => p.theme.boxShadows.md};
  border-radius: ${p => p.theme.radii.lg};
`;

const CustomerExperienceSolutions = ({ location: { pathname } }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "screens/kwikcover.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={({ file }) => (
      <>
        <SEO
          description="Microservices architected customer experience portal solution."
          pathname={pathname}
          title="Customer Experience Solutions"
        />
        <HeroSection single>
          <HeroBg />
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
        <Section top="11rem">
          <Order2>
            <SectionH2>Solutions</SectionH2>
            <SectionParagraph>
              Our portal supports agent and d2c models with a single,
              easy-to-use and consistent interface that spans the insurance
              lifecycle and can easily be integrated with several administration
              platforms&nbsp;as&nbsp;a&nbsp;veneer.
            </SectionParagraph>
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
        <Section single top="13rem">
          <SectionParagraph as="div" center>
            <SectionH3 white={0}>Group &amp; Voluntary Benefits</SectionH3>
            <p>
              Our group benefits and voluntary enrollment solution is developed
              on our Kwikcover TM portal environment. It features case setup,
              enrollment and service functionality, and comes pre- integrated
              with our machine learning capability to predict an individual’s
              propensity to purchase particular&nbsp;products.
            </p>
          </SectionParagraph>
        </Section>
        <Section single top="2rem">
          <SectionParagraph as="div" center>
            <SectionH3 white={0}>Life Insurance</SectionH3>
            <p>
              Our retail life and annuities solution, when coupled with our
              third party administration (TPA) partnership, provides a
              comprehensive offering and reduced time to market for carriers
              looking to enable a direct to&nbsp;consumer&nbsp;strategy.
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
          <Screenshot
            alt="Kwikcover Screenshot"
            as={Img}
            fluid={file.childImageSharp.fluid}
          />
        </Section>
        <Section bottom={{ md: '7rem' }} top="11.5rem">
          <div>
            <SectionH2>Capabilities</SectionH2>
            <SectionParagraph>
              Our solutions provide the plug and play digital experience
              consumers have come to expect, with a microservices architecture
              that enables ease&nbsp;of&nbsp;integration.
            </SectionParagraph>
          </div>
          <Figures>
            <FourRight as={IconFigure}>
              <StyledIcon as={Multiplatform} />
              <figcaption>Multi-Platform Veneering</figcaption>
            </FourRight>
            <FourRight as={IconFigure}>
              <StyledIcon as={Map} />
              <figcaption>ML-Driven Insights</figcaption>
            </FourRight>
            <FourRight as={IconFigure}>
              <StyledIcon as={Chatbot} />
              <figcaption>Chatbot</figcaption>
            </FourRight>
            <FourRight as={IconFigure}>
              <StyledIcon as={CoBrowsing} />
              <figcaption>Co-Browsing</figcaption>
            </FourRight>
          </Figures>
        </Section>
      </>
    )}
  />
);

CustomerExperienceSolutions.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomerExperienceSolutions;
