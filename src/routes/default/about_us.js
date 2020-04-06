import PropTypes from 'prop-types';
import React from 'react';
import Box from '@spraoi/base/Box';
import SEO from '../../components/SEO';
import {
  Section,
  SectionH1,
  SectionH2,
  SectionParagraph,
  IconCardList,
  PeopleCardList,
  AllianceCardList,
} from '../../boxComponents';
import USA from '../../images/icons/usa.svg';
import India from '../../images/icons/india.svg';

import F1 from '../../images/people/santoash-rajaram.jpg';
import F2 from '../../images/people/karan-mishra.jpg';
import F3 from '../../images/people/matthew-omara.jpg';

import A1 from '../../images/alliance/insurance_cio.jpg';
import A2 from '../../images/alliance/eis_group.jpg';
import A3 from '../../images/alliance/limra.jpg';
import A4 from '../../images/alliance/cio_applications.jpg';
import A5 from '../../images/alliance/andesa_services.png';
import A6 from '../../images/alliance/insurtech.png';
import A7 from '../../images/alliance/wm_logo.png';

const Reach = () => {
  const data = [
    {
      icon: USA,
      list: [
        'Atlanta',
        'Chicago',
        'Dallas',
        'Milwaukee',
        'Philadelphia',
        'Portland',
        'San Fransisco',
        'New York',
      ],
      title: 'USA',
    },
    {
      icon: India,
      list: ['Bengaluru', 'Mumbai', 'Mysuru'],
      title: 'INDIA',
    },
  ];
  return <IconCardList data={data} />;
};

const Founders = () => {
  const data = [
    {
      icon: F3,
      id: 'matthew-omara',
      name: "Matthew O'Mara",
      title: 'Co-Founder',
    },
    {
      icon: F2,
      id: 'karan-mishra',
      name: 'Karan Mishra',
      title: 'Co-Founder',
    },
    {
      icon: F1,
      id: 'santoash-rajaram',
      name: 'Santoash Rajaram',
      title: 'Co-Founder',
    },
  ];
  return <PeopleCardList data={data} />;
};

const AllianceAndEminience = () => {
  const data = [
    {
      icon: A1,
      name: 'TOP 10 AI SOLUTION PROVIDERS',
      title: 'NOV 2018',
    },
    {
      icon: A2,
      name: 'SPEAKER AT USER CONFERENCE',
      title: 'FEB 2019',
    },
    {
      icon: A3,
      name: 'MAIN STAGE SPEAKER ON ML',
      title: 'FEB 2019',
    },
    {
      icon: A4,
      name: 'NAMED A TOP 25 ML SOLUTION PROVIDER',
      title: 'MAR 2019',
    },
    {
      icon: A5,
      name: 'SPEAKER AT USER CONFERENCE',
      title: 'SEP 2019',
    },
    {
      icon: A6,
      name: 'PANELIST AT CONFERENCE',
      title: 'SEP 2019',
    },
    {
      icon: A1,
      name: 'TOP 10 INSURTECH STARTUPS',
      title: 'OCT 2019',
    },
  ];

  return <AllianceCardList data={data} />;
};

const Alliances = () => {
  return (
    <>
      <Box display="flex" flexDirection={{ _: 'column', md: 'row' }}>
        <Box order={{ _: 2, md: 1 }}>
          <Box as="h3">EIS Group</Box>
          <SectionParagraph>
            Spraoi and EIS have integrated their solutions to enable group
            benefits and property casualty providers a modern, responsive
            experience for their customers.
          </SectionParagraph>
          <SectionParagraph>
            The combination of our firms ensure continuous innovation across
            user experience, administration and data leverage.{' '}
          </SectionParagraph>
          <SectionParagraph>
            The result is a functionally rich and technically superior
            technology ecosystem for carriers.
          </SectionParagraph>
        </Box>
        <Box ml={{ md: 'auto' }} order={{ _: 1, md: 2 }}>
          <Box>
            <img alt="eis" src={A2} />
          </Box>
        </Box>
      </Box>
      <Box m={8} />
      <Box display="flex" flexDirection={{ _: 'column', md: 'row' }}>
        <Box mr={{ md: 'auto' }}>
          <Box>
            <img alt="gt" src={A7} />
          </Box>
        </Box>
        <Box>
          <Box as="h3">West Monroe Partners</Box>
          <SectionParagraph>
            Spraoi and West Monroe Partners has developed a relationship focused
            on driving results in the industry.
          </SectionParagraph>
          <SectionParagraph>
            West Monroe Partners provides business domain experts to augment
            Spraoi’s next generation technology capabilities.
          </SectionParagraph>
        </Box>
      </Box>
    </>
  );
};

const AboutUs = ({ location: { pathname } }) => (
  <>
    <SEO description="About us" pathname={pathname} title="About us" />
    <Section center single>
      <SectionH1 center>ABOUT US</SectionH1>
      <SectionH2 center>REACH</SectionH2>
      <SectionParagraph center>
        We have a global team and established a repeatable onsite/offshore
        delivery model. US practitioners reside across the country. We have a
        technology center in Bengaluru, with scale partners in Mumbai and
        Mysore.
      </SectionParagraph>
      <Reach />
    </Section>
    <Section center single>
      <SectionH2>FOUNDERS</SectionH2>
      <Founders />
    </Section>

    <Section center single>
      <SectionH2>ALLIANCES AND EMINENCE</SectionH2>
      <SectionParagraph center>
        We have developed formal relationships with leading firms to expand our
        presence. We have been recognized by the industry, conducted board-level
        presentations for client sponsors and are recognized leaders in the
        insurance market.
      </SectionParagraph>
      <AllianceAndEminience />
    </Section>

    <Section center single>
      <SectionH2>Alliances</SectionH2>
      <Alliances />
    </Section>
  </>
);

AboutUs.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutUs;
