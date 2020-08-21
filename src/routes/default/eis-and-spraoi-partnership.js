import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';
import React from 'react';
import SEO from '../../components/SEO';
import {
  HeroSection,
  SectionH1,
  SectionParagraph,
} from '../../components/Section';
import SectionH2 from '../../boxComponents/SectionH2';

const CustomerExperienceSolutions = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Integration of Spraoi’s machine learning-enabled portal technology with EIS’ core and digital platform follows EIS’ expanding open ecosystem partner model."
      pathname={pathname}
      title="EIS & Spraoi Partnership"
    />
    <HeroSection single>
      <SectionH1 data-wrap>
        EIS and Spraoi Partner to Enhance the Dental and Ancillary Benefits
        Customer Experience
      </SectionH1>
      <Box sx={{ color: 'grays.2', mt: 6 }}>
        San Francisco, CA and Ardmore, PA
      </Box>
      <Box sx={{ color: 'grays.2', mb: 6, mt: 2 }}>August 20, 2020</Box>
      <SectionParagraph>
        Integration of Spraoi’s machine learning-enabled portal technology with
        EIS’ core and digital platform follows EIS’ expanding open ecosystem
        partner model
      </SectionParagraph>
    </HeroSection>
    <br />
    <SectionParagraph>
      EIS, a core and digital platform provider for insurers, and Spraoi, a
      provider of digital services and consulting, have integrated their
      solutions to provide dental and group and voluntary benefits insurers a
      quicker path to digital transformation of their product development and
      distribution while also optimizing their customer experience.
    </SectionParagraph>
    <br />
    <SectionParagraph>
      As insurers step up the pace of digital transformation to meet market
      expectations, they need to overcome the hurdles of having multiple
      products on separate product platforms and a customer experience that is
      compromised as a result.
    </SectionParagraph>
    <br />
    <SectionParagraph>
      The collaboration between <a href="https://www.eisgroup.com/">EIS</a> and{' '}
      <a href="https://spraoi.ai/">Spraoi</a> is designed to accelerate the
      simplification of systems and the customer experience and quickly enable
      new product offerings, distribution, and AI-assisted customer journeys.
      EIS and Spraoi work as open ecosystem partners. EIS provides a
      comprehensive, industry-leading set of open APIs that expose the quoting,
      rating, policy administration, billing, claims, and customer management
      capabilities within the EIS Suite™ of core applications. Spraoi connects
      to those APIs to build out customer and agent portals within its Kwikcover
      solution and delivers machine learning models to improve operating
      outcomes from quote to claim.
    </SectionParagraph>
    <br />
    <SectionParagraph>
      The integration has already been deployed by{' '}
      <a href="https://renaissancefamily.com/">Renaissance</a>, a nationwide
      provider of dental, vision, life, disability and accident products to
      support a diverse product portfolio and deliver a next-gen distribution
      and customer experience.
    </SectionParagraph>
    <br />
    <SectionParagraph>
      “Through our ongoing partnership with Spraoi, we are taking another step
      toward helping insurers become the agile and customer-centered
      organizations that the future of insurance demands of them,” said Tony
      Grosso, head of marketing at EIS. “EIS is executing an open ecosystem
      strategy that leverages the native openness of our platform to connect
      quickly with complementary solutions and compound the business value of
      carriers’ digital transformations. Insurers can benefit immensely from
      technology partners that are aligned technically and culturally when
      building platforms that are responsive to the market.”
    </SectionParagraph>
    <br />
    <SectionParagraph>
      In addition to its portal technology, Spraoi’s machine learning models can
      also positively influence many core processes enabled through the EIS®
      platform. For example, to improve propensity to buy, as consumers engage
      with the platform, the solution can deliver recommendations on what
      products are most relevant to them through EIS Suite to the end consumer,
      based on their persona. In the claims process, Spraoi delivers machine
      learning models through to the adjusters and various stakeholders for
      segmentation, assignment, auto adjudication, and fraud detection. The
      integration of EIS and Spraoi solution is available to the
      property/casualty and group/voluntary benefits spaces.
    </SectionParagraph>
    <br />
    <SectionParagraph>
      “Spraoi is excited by our progressive partnership with EIS because we
      share a vision of how new generation technologies should be delivered to
      carriers,” says Karan Mishra, co-founder, Spraoi. “We have a natural fit.
      Spraoi solutions take maximum advantage of EIS’ fully digital core to
      provide an enhanced and adaptive user experience. This means insurers get
      maximum value from their digital transformation investment.”
    </SectionParagraph>
    <br />
    <SectionH2>About EIS</SectionH2>
    <SectionParagraph>
      EIS is an insurance software company that enables leading insurers to
      innovate and operate like a tech company: fast, simple, agile. Founded in
      2008, EIS provides a platform for high-velocity insurance. This open,
      flexible platform of core systems and digital solutions liberates insurers
      to accelerate and scale innovation, launch products faster, deliver new
      revenue channels, and create insurance experiences the world will love.
      And with thousands of open APIs, the platform gives insurers the freedom
      to connect to a vast ecosystem of insurtech and emerging technologies.
      Headquartered in San Francisco, EIS powers premium growth for insurers in
      all lines of business worldwide. For more information, visit{' '}
      <a href="https://www.eisgroup.com/">EISGroup.com</a> or follow{' '}
      <a href="https://twitter.com/eisgroupltd?lang=en">@EISGroupLtd</a> on
      Twitter and{' '}
      <a href="https://www.linkedin.com/company/eisgroupltd/">LinkedIn</a>.
    </SectionParagraph>
    <br />
    <SectionH2>About Spraoi</SectionH2>
    <SectionParagraph>
      Spraoi is an insurance technology solutions provider combining Big 4
      Insurance consulting experience with Silicon Valley technology acumen and
      offshore scale. We focus on assisting carrier clients with the two most
      pressing needs confronting them today: how to leverage their data to
      optimize outcomes using our patent pending platform and how to better
      engage customers throughout the lifecycle using our customer engagement
      infrastructure. Beyond our solutions, we have created an innovation
      framework that provides accountability from concept through execution,
      eliminating technology as the impediment to progress. Visit us at{' '}
      <a href="https://spraoi.ai">Spraoi.ai</a>.
    </SectionParagraph>
  </>
);

CustomerExperienceSolutions.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomerExperienceSolutions;
