import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';
import {
  HeroSection,
  SectionH1,
  SectionParagraph,
} from '../../components/Section';
import { ReactComponent as BgSolutions } from '../../images/icons/bg-solutions.svg';

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

const CustomerExperienceSolutions = () => (
  <>
    <SEO />
    <HeroSection single>
      <HeroBg />
      <SectionH1 wrap>
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
  </>
);

export default CustomerExperienceSolutions;
