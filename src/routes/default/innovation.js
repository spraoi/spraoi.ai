import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import ContactCTA from '../../components/ContactCTA';
import Icon from '../../components/Icon';
import SEO from '../../components/SEO';
import Section from '../../components/Section';

const ServicesPage = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Innovation, integration and data services to support transformative initiatives."
      pathname={pathname}
      title="Services"
    />
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <Box as="h1" sx={{ fontSize: [5, null, null, 6] }}>
        Innovation as a Service
      </Box>
      <Box
        as="p"
        sx={{
          fontSize: 4,
          lineHeight: 1,
          maxWidth: 'maxWidths.paragraphWider',
          mt: 5,
          mx: 'auto',
        }}
      >
        Our innovation as a service approach provides technology strategy,
        management, design, development and deployment capabilities. When
        combined with our machine learning expertise, the result is data-forward
        engineering that can bring demonstrable change in&nbsp;mere&nbsp;weeks.
      </Box>
    </Section>
    {/* <Section sx={{ maxWidth: ['100%', null, null, '50%'], px: [0, null, 7] }}>
      <Box
        as="ul"
        sx={{
          display: 'grid',
          gridColumnGap: [null, null, 5],
          gridRowGap: [null, null, 5],
          gridTemplateColumns: [
            '1fr 1fr',
            null,
            '1fr 1fr 1fr',
            'repeat(3, 1fr)',
          ],
        }}
      >
        {[
          // { svg: 'pen-and-pad', text: 'Third Party Administration' },
          { svg: 'database', text: 'Data' },
          { svg: 'sigma', text: 'Integration' },
          { svg: 'light-bulb', text: 'Innovation' },
          // { svg: 'open', text: 'Build, Operate, Transfer' },
        ].map((item) => (
          <IconFigure
            key={item.text}
            as="li"
            iconWidth="2.5rem"
            size="8.5rem"
            svg={item.svg}
            sx={{
              bg: 'primary',
              borderRadius: [0, null, 2],
              boxShadow: 3,
              color: 'white',
              px: 5,
              width: '100%',
            }}
            text={item.text}
          />
        ))}
      </Box>
    </Section>
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <h2>Offerings</h2>
      <Box
        as="p"
        sx={{
          lineHeight: 2,
          maxWidth: 'maxWidths.paragraphWide',
          mt: 4,
          mx: 'auto',
        }}
      >
        We provide technology strategy, management, design, development and
        deployment capabilities. When combined with the depth of our technology
        talent and domain expertise we can bring demonstrable
        change&nbsp;in&nbsp;weeks.
      </Box>
    </Section> */}
    <Section sx={{ px: [0, null, 7] }}>
      <Box
        as="ul"
        sx={{
          borderRadius: [0, null, 2],
          boxShadow: 3,
          display: 'grid',
          gridRowGap: '1px',
          gridTemplateColumns: '1fr',
          maxWidth: 'maxWidths.paragraphWider',
          mx: 'auto',
          overflow: 'hidden',
        }}
      >
        {[
          {
            description: (
              <>
                We offer business outcome driven technology strategy services by
                working closely with our clients. Our subject matter experts
                bring industry best practices to the table to help improve
                organizational and operational effectiveness while keeping
                innovation as&nbsp;the&nbsp;focus.
              </>
            ),
            title: <>Technology Strategy Services</>,
          },
          {
            description: (
              <>
                Our data services include, but are not limited to, working with
                clients to outline their data strategy and translate strategies
                into implementable solutions. Our offerings include: data
                strategy, data lake implementation, data supply chain modeling
                and implementation, integration with legacy systems using common
                sense infrastructure, data replication, data backup, dataset
                tracking and&nbsp;data&nbsp;auditing.
              </>
            ),
            title: <>Data Services</>,
          },
          {
            description: (
              <>
                We provide the full gamut of software development services and
                support from concept and ideation to launch and maintenance. We
                do this while being agile and keeping our client’s requirements
                in&nbsp;the&nbsp;forefront.
              </>
            ),
            title: <>End to End Software Development</>,
          },
          /* {
            description: (
              <>
                With our alliance partners, we can handle the entire value chain
                from quote through administration, in both D2C and
                agent-assisted models for flexibility as consumer behaviors
                evolve. Our integrated technology and TPA services include, but
                are not&nbsp;limited&nbsp;to:
                <Box
                  as="ul"
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    mt: [5, null, 2],
                  }}
                >
                  {[
                    'Customer support',
                    'Service center operations',
                    'UW decision management',
                    'Billing',
                    'Collections',
                    'Commissions',
                    'Reconciliations',
                    'Data feeds/reporting',
                    'Service level agreements',
                    'Agent-assisted phone sales',
                  ].map((service) => (
                    <Box
                      key={service}
                      as="li"
                      sx={{
                        bg: 'grays.0',
                        borderRadius: 1,
                        color: 'text.primary',
                        fontSize: 0,
                        letterSpacing: 2,
                        lineHeight: 1,
                        mr: 4,
                        mt: 4,
                        px: 4,
                        py: 3,
                        textTransform: 'uppercase',
                      }}
                    >
                      {service}
                    </Box>
                  ))}
                </Box>
              </>
            ),
            title: <>Third Party Administration&nbsp;Services</>,
          },
          {
            description: (
              <>
                For clients that want to minimize vendor lock-in, we offer
                technology development capabilities from the ground up with the
                option to transition it over to our clients using our build,
                operate and transfer service&nbsp;model.
              </>
            ),
            title: <>Build, Operate &amp; Transfer&nbsp;Services</>,
          }, */
        ].map((item, i) => (
          <Box
            key={`service-items-${i}`}
            as="li"
            sx={{ bg: 'white', p: [6, null, null, 7], ...item.sx }}
          >
            <Box as="h3" sx={{ color: 'inherit' }}>
              {item.title}
            </Box>
            <Box
              as="p"
              sx={{
                color: 'text.subtle',
                fontSize: 2,
                lineHeight: 2,
                mt: 4,
                ...item.paragraphSx,
              }}
            >
              {item.description}
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <Box
        as="p"
        sx={{
          lineHeight: 2,
          maxWidth: 'maxWidths.paragraphWide',
          mt: 4,
          mx: 'auto',
        }}
      >
        We have the ability to accelerate the innovation agenda through our
        teams and solutions using our proven methodology. Our integrated
        analytical and engineering talent can deliver results
        in&nbsp;two&#8209;week&nbsp;sprints.
      </Box>
    </Section>
    <Section>
      <Icon
        svg="development-methodology"
        sx={{
          bg: 'primary',
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 'maxWidths.paragraphWider',
          mx: 'auto',
          px: [6, null, 9],
          py: [6, null, null, 7],
          width: '100%',
        }}
      />
    </Section>
    <ContactCTA />
  </>
);

ServicesPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServicesPage;
