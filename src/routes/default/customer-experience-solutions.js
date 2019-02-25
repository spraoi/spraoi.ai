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
  SectionParagraph,
  StyledIcon,
} from '../../components/Section';
import { ReactComponent as Placeholder } from '../../images/icons/placeholder.svg';

const FigureStructure1 = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(1) {
      top: -2rem;
      left: 12rem;
    }

    &:nth-of-type(2) {
      top: 10rem;
      left: 0;
    }

    &:nth-of-type(3) {
      top: 12.5rem;
      right: 0;
    }
  }
`;

const Screenshot = styled.div`
  box-shadow: ${p => p.theme.boxShadows.md};
  border-radius: ${p => p.theme.radii.lg};
`;

const FigureStructure2 = styled.figure`
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: absolute;
    margin: 0;

    &:nth-of-type(1) {
      top: -2rem;
      left: 2rem;
    }

    &:nth-of-type(2) {
      right: 0;
    }

    &:nth-of-type(3) {
      top: 10.5rem;
      left: -2rem;
    }

    &:nth-of-type(4) {
      top: 12.5rem;
      left: 11rem;
    }
  }
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
          description="Microservices architected sales, service and claims portal application, enabling intermediary-led and direct-to-consumer models with a plug and play digital experience."
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
            platform to develop specific solutions in several insurance industry
            sectors.
          </SectionParagraph>
        </HeroSection>
        <Section top="12rem">
          <Order2>
            <SectionH2>Solutions</SectionH2>
            <SectionParagraph>
              Our portal supports agent and D2C models with a single,
              easy-to-use and consistent interface that spans the insurance
              lifecycle and can easily be integrated with several administration
              platforms&nbsp;as&nbsp;a&nbsp;veneer.
            </SectionParagraph>
          </Order2>
          <Figures left shift={false}>
            <FigureStructure1 as={IconFigure}>
              <StyledIcon as={Placeholder} />
              <figcaption>Life Insurance</figcaption>
            </FigureStructure1>
            <FigureStructure1 as={IconFigure}>
              <StyledIcon as={Placeholder} />
              <figcaption>Group/VB</figcaption>
            </FigureStructure1>
            <FigureStructure1 as={IconFigure}>
              <StyledIcon as={Placeholder} />
              <figcaption>Small Commercial</figcaption>
            </FigureStructure1>
          </Figures>
        </Section>
        <Section single top="18.5rem">
          <Screenshot
            alt="Kwikcover Screenshot"
            as={Img}
            fluid={file.childImageSharp.fluid}
          />
        </Section>
        <Section bottom={{ md: '10rem', xl: '10rem' }} top="12rem">
          <div>
            <SectionH2>Capabilities</SectionH2>
            <SectionParagraph>
              Our solutions provide the plug and play digital experience
              consumers have come to expect, with a microservices architecture
              that enables ease&nbsp;of&nbsp;integration.
            </SectionParagraph>
          </div>
          <Figures shift={false}>
            <FigureStructure2 as={IconFigure}>
              <StyledIcon as={Placeholder} />
              <figcaption>ML-Driven Insights</figcaption>
            </FigureStructure2>
            <FigureStructure2 as={IconFigure}>
              <StyledIcon as={Placeholder} />
              <figcaption>Multi-Platform Veneering</figcaption>
            </FigureStructure2>
            <FigureStructure2 as={IconFigure}>
              <StyledIcon as={Placeholder} />
              <figcaption>Chatbot</figcaption>
            </FigureStructure2>
            <FigureStructure2 as={IconFigure}>
              <StyledIcon as={Placeholder} />
              <figcaption>Co-Browsing</figcaption>
            </FigureStructure2>
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