import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Avatar from '../../components/Avatar';
import ContactCTA from '../../components/ContactCTA';
import Icon from '../../components/Icon';
import LinkList from '../../components/LinkList';
import Map from '../../components/Map';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import landMap from '../../data/maps/land.json';
import usePeople from '../../effects/use-people';

const AboutUsPage = ({ location: { pathname } }) => {
  const people = usePeople();

  return (
    <>
      <SEO
        description="Spraoi is an insurance technology solutions provider with a focus on machine learning."
        pathname={pathname}
        title="About Us"
      />
      <Section>
        <h1>About Spraoi</h1>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box as="p" sx={{ fontSize: 4, lineHeight: 1, mt: 5 }}>
            We are a solution focused technology firm that has grown
            significantly since our inception in June 2017. Our deep domain
            expertise, that enables us to distinguish between individual,
            annuities, group benefits, voluntary and worksite requirements in
            different market segments, has allowed us to develop significant
            technology IP. We believe transformational results are delivered
            within the carrier’s existing eco-system using a data-centric
            machine learning approach to provide insights at key decision
            points.
          </Box>
          <Icon
            svg="team-spirit"
            sx={{
              display: ['none', null, null, 'block'],
              flexShrink: 0,
              ml: 7,
            }}
            width="14rem"
          />
        </Box>
      </Section>
      <Section sx={{ textAlign: [null, null, 'center'] }}>
        <h2>Reach</h2>
        <Box
          as="p"
          sx={{
            lineHeight: 2,
            maxWidth: 'maxWidths.paragraph',
            mt: 4,
            mx: 'auto',
          }}
        >
          We have a global team with an established onsite/offshore delivery
          model. US practitioners reside across the country. We have a
          technology center in Bengaluru, with scale partners in
          Mumbai&nbsp;and&nbsp;Mysore.
        </Box>
      </Section>
      <Section sx={{ display: [null, null, 'flex'], pt: 0 }}>
        <Box as="figure" sx={{ mr: [null, null, 6, 7], mt: 7, width: '100%' }}>
          <Map
            annotationColor="accentSecondary"
            geography={landMap}
            markers={[
              /* {
                annotationProps: { dx: 40, dy: 0 },
                annotationTextProps: { x: 10 },
                coordinates: [-122.4194, 37.7749],
                name: 'San Fransisco',
              }, */
              {
                annotationProps: { dx: 40, dy: 0 },
                annotationTextProps: { x: 10 },
                coordinates: [-122.681427, 45.516022],
                name: 'Portland',
              },
              {
                annotationProps: { curve: 1, dx: -30, dy: -40 },
                annotationTextProps: { textAnchor: 'end', x: -10 },
                coordinates: [-74.005974, 40.712776],
                name: 'New York',
              },
              {
                annotationProps: { curve: -1, dx: -25, dy: 25 },
                annotationTextProps: { textAnchor: 'end', x: -10 },
                coordinates: [-75.165619, 39.951061],
                name: 'Philadelphia',
              },
              {
                annotationProps: { dx: -40, dy: 0 },
                annotationTextProps: { textAnchor: 'end', x: -10 },
                coordinates: [-84.387985, 33.748997],
                name: 'Atlanta',
              },
              {
                annotationProps: { curve: -1, dx: -40, dy: 25 },
                annotationTextProps: { textAnchor: 'end', x: -10 },
                coordinates: [-87.629799, 41.878113],
                name: 'Chicago',
              },
              {
                annotationProps: { curve: 1, dx: -37, dy: -40 },
                annotationTextProps: { textAnchor: 'end', x: -10 },
                coordinates: [-87.909416, 43.041069],
                name: 'Milwaukee',
              },
              {
                annotationProps: { curve: 1, dx: -40, dy: 0 },
                annotationTextProps: { textAnchor: 'end', x: -10 },
                coordinates: [-96.796989, 32.776665],
                name: 'Dallas',
              },
            ]}
            projectionConfig={{
              center: [-98, 38],
              scale: 700,
            }}
            viewHeight={400}
            viewWidth={720}
          />
        </Box>
        <Box as="figure" sx={{ mt: 7, width: '100%' }}>
          <Map
            geography={landMap}
            markers={[
              {
                annotationProps: { dx: -40, dy: 0 },
                annotationTextProps: { textAnchor: 'end', x: -10 },
                coordinates: [72.877655, 19.075983],
                name: 'Mumbai',
              },
              {
                annotationProps: { dx: -40, dy: 0 },
                annotationTextProps: { textAnchor: 'end', x: -10 },
                coordinates: [76.653931, 12.30844],
                name: 'Mysuru',
              },
              {
                annotationProps: { dx: 40, dy: 0 },
                annotationTextProps: { x: 10 },
                coordinates: [77.594566, 12.971599],
                name: 'Bengaluru',
              },
            ]}
            projectionConfig={{
              center: [78, 17],
              scale: 700,
            }}
            viewHeight={400}
            viewWidth={720}
          />
        </Box>
      </Section>
      <Section sx={{ textAlign: [null, null, 'center'] }}>
        <h2>Founders</h2>
        <Box
          as="p"
          sx={{
            lineHeight: 2,
            maxWidth: 'maxWidths.paragraph',
            mt: 4,
            mx: 'auto',
          }}
        >
          Our founders are an accurate representation of our team, representing
          the confluence of Insurance subject matter expertise and Silicon
          Valley technological&nbsp;acumen.
        </Box>
      </Section>
      <Section
        as="ul"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: [null, null, 'center', 'space-between'],
          pt: 0,
        }}
      >
        {people
          .filter((p) => p.executive > 0 && p.active === 'y')
          .sort((a, b) => (a.executive > b.executive ? 1 : -1))
          .map((person) => (
            <Box
              key={person.id}
              as="li"
              sx={{ '&:nth-of-type(2)': { ml: [null, null, 7, 0] } }}
            >
              <Box
                key={person.id}
                as={Link}
                sx={{
                  '&:hover': {
                    '.founder-image': {
                      boxShadow: 2,
                      transform: 'scale(1.01)',
                    },
                    '.founder-name': { color: 'accentDark' },
                  },
                  alignItems: 'center',
                  display: 'flex',
                  mt: 7,
                }}
                to={`/people/${person.id}/`}
              >
                <Avatar
                  alt={`${person.givenName} ${person.familyName}`}
                  className="founder-image"
                  image={person.image}
                  size={['4rem', null, null, '7rem']}
                  sx={{
                    display: 'block',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                  }}
                />
                <Box sx={{ ml: [4, null, null, 5] }}>
                  <Box
                    as="h3"
                    className="founder-name"
                    sx={{
                      color: 'accent',
                      fontSize: 3,
                      transition: 'color 0.2s',
                    }}
                  >
                    {person.givenName} {person.familyName}
                  </Box>
                  <Box
                    sx={{
                      color: 'text.subtle',
                      fontSize: 2,
                      fontWeight: 'semibold',
                      mt: 2,
                    }}
                  >
                    {person.position}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
      </Section>
      <Section sx={{ textAlign: [null, null, 'center'] }}>
        <h2>Alliances &amp; Eminence</h2>
        <Box
          as="p"
          sx={{
            lineHeight: 2,
            maxWidth: 'maxWidths.paragraphWider',
            mt: 4,
            mx: 'auto',
          }}
        >
          We have developed formal relationships with leading firms to expand
          our presence. We have been recognized by the industry, conducted
          board-level presentations for client sponsors and are recognized
          leaders in the insurance market.
        </Box>
      </Section>
      <Section sx={{ px: [null, null, 7] }}>
        <LinkList
          items={[
            {
              icon: 'insurance-cio-outlook-logo',
              link:
                'https://artificial-intelligence.insuranceciooutlook.com/vendors/top-artificial-intelligence-companies-2018.html',
              title: 'Top 10 AI Solution Providers',
            },
            {
              icon: 'limra-logo',
              link:
                'https://www.limra.com/en/events/conferences/2019/2019-enrollment-technology-strategy-seminar/',
              title: 'Main Stage Speaker on ML',
            },
            {
              icon: 'cio-applications-logo',
              link:
                'https://machine-learning.cioapplications.com/vendors/top-25-machine-learning-solution-companies-2019-rid-160.html',
              title: 'Top 25 ML Solutions Provider',
            },
            {
              icon: 'andesa-logo',
              link:
                'https://andesaservices.com/blog/lessons-for-the-new-normal-andesas-ninth-client-forum/',
              title: 'Speaker at User Conference',
            },
            {
              icon: 'insurance-cio-outlook-logo',
              link:
                'https://insurtech-startups.insuranceciooutlook.com/vendors/insurtech-startups.html',
              title: 'Top 10 Insurtech Startups',
            },
          ]}
          split
          titleAs="h3"
        />
      </Section>
      <Section sx={{ pt: 0, px: [0, null, 7] }}>
        <Box
          sx={{
            alignItems: 'center',
            bg: 'white',
            borderRadius: [null, null, 2],
            boxShadow: 3,
            display: [null, null, null, 'flex'],
            justifyContent: 'space-between',
            mt: ['1px', null, 7],
            p: [6, null, null, 7],
          }}
        >
          <Icon
            svg="west-monroe-logo"
            sx={{
              flexShrink: 0,
              mb: [3, null, null, 0],
              mr: [null, null, null, 7],
            }}
            width={['10rem', null, null, '13rem']}
          />
          <Box>
            <h3>West Monroe Partners</h3>
            <Box as="p" sx={{ color: 'text.subtle', lineHeight: 2, mt: 4 }}>
              Spraoi and West Monroe Partners has developed a relationship
              focused on driving results in the industry. West Monroe Partners
              provides business domain experts to augment Spraoi&rsquo;s next
              generation technology&nbsp;capabilities.
            </Box>
          </Box>
        </Box>
      </Section>
      <ContactCTA />
    </>
  );
};

AboutUsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutUsPage;
