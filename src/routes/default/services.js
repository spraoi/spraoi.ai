import PropTypes from 'prop-types';
import React from 'react';
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
  SectionUnorderedList,
  StyledIcon,
} from '../../components/Section';
import { ReactComponent as BgServices } from '../../images/icons/bg-services.svg';
import { ReactComponent as BuildOperate } from '../../images/icons/build-operate.svg';
import { ReactComponent as Data } from '../../images/icons/data.svg';
import { ReactComponent as Innovation } from '../../images/icons/innovation.svg';
import { ReactComponent as Integration } from '../../images/icons/integration.svg';
import { ReactComponent as ThirdParty } from '../../images/icons/third-party.svg';

const HeroBg = styled(BgServices)`
  position: absolute;
  top: -29.3rem;
  right: -25rem;
  width: 55rem;
  z-index: -1;
`;

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
      description="Innovation, integration and data services to support transformative initiatives."
      pathname={pathname}
      title="Services"
    />
    <HeroSection single>
      <HeroBg />
      <SectionH1 wrap={1}>Services</SectionH1>
      <SectionParagraph>
        In addition to our solutions, the Spraoi team has several service areas
        where we provide accountability from concept through execution, thus
        eliminating technology as the impediment&nbsp;to&nbsp;progress.
      </SectionParagraph>
    </HeroSection>
    <Section top="11rem">
      <Order2>
        <SectionH2>Offerings</SectionH2>
        <SectionParagraph>
          We provide technology strategy, management, design, development and
          deployment capabilities. When combined with the depth of our
          technology talent and domain expertise we can bring demonstrable
          change&nbsp;in&nbsp;weeks.
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
          <figcaption>Build, Operate, Transfer</figcaption>
        </FigureStructure1>
      </Figures>
    </Section>
    <Section single top="11.5rem">
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Integration Services</SectionH3>
        <p>
          We offer advanced integration services leveraging best in class
          technologies. Our integration services include API implementations
          using AWS (via our API gateway infrastructure) to write custom
          integration to back the API quickly. We provide built-in auditing,
          logging and tracing and the ability to configure different
          authentication&nbsp;mechanisms.
        </p>
      </SectionParagraph>
    </Section>
    <Section single top="2rem">
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Data Services</SectionH3>
        <p>
          Our data services include, but are not limited to, working with
          clients to outline their data strategy and translate strategies into
          implementable solutions. Our offerings include: data strategy, data
          lake implementation, data supply chain modeling and implementation,
          integration with legacy systems using common sense infrastructure,
          data replication, data backup and dataset tracking
          and&nbsp;data&nbsp;auditing.
        </p>
      </SectionParagraph>
    </Section>
    <Section single top="2rem">
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Third Party Administration Services</SectionH3>
        <p>
          With our alliance partners, we can handle the entire value chain from
          quote through administration, in both D2C and agent-assisted models
          for flexibility as consumer behaviors evolve. Our integrated
          technology and TPA services include, but are not limited
          to&nbsp;the&nbsp;following:
        </p>
        <SectionUnorderedList>
          <li>Customer support</li>
          <li>Service center operations</li>
          <li>UW decision management</li>
          <li>Billing, collections, commissions, reconciliations</li>
          <li>Data feeds/reporting</li>
          <li>Service level agreements</li>
          <li>Agent-assisted phone sales</li>
        </SectionUnorderedList>
      </SectionParagraph>
    </Section>
    <Section single top="2rem">
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Build/Operate/Transfer Services</SectionH3>
        <p>
          For clients that want to minimize vendor lock-in, we offer technology
          development capabilities from the ground up with the option to
          transition it over to our clients using our build, operate and
          transfer service&nbsp;model.
        </p>
      </SectionParagraph>
    </Section>
    <Section single top="2rem">
      <SectionParagraph as="div" center>
        <SectionH3 white={0}>Innovation as a Service</SectionH3>
        <p>
          Our innovation as a service approach provides technology strategy,
          management, design, development and deployment capabilities. When
          combined with our machine learning expertise, the result is
          data-forward engineering that can bring demonstrable change
          in&nbsp;mere&nbsp;weeks.
        </p>
      </SectionParagraph>
    </Section>
  </>
);

Services.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Services;
