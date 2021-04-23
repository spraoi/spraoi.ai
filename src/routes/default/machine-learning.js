import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import ContactCTA from '../../components/ContactCTA';
import Icon from '../../components/Icon';
import IconFigure from '../../components/IconFigure';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
// import ArrowLink from '../../components/ArrowLink';

const MachineLearningSolutionsPage = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Patent-pending continuous delivery platform enabling insurance specific machine learning models."
      pathname={pathname}
      title="Machine Learning"
    />
    <Section sx={{ pb: 0, textAlign: [null, null, 'center'] }}>
      <Icon
        svg="barrel-logo"
        sx={{
          mb: 5,
          mt: ['-1.5rem', null, '-2.25rem'],
          mx: [null, null, 'auto'],
        }}
        width={['7rem', null, '10rem']}
      />
      <Box as="h1" sx={{ fontSize: [5, null, null, 6] }}>
        Machine Learning Platform
      </Box>
      <Box
        as="p"
        sx={{
          fontSize: 4,
          lineHeight: 1,
          maxWidth: 'maxWidths.paragraphWidest',
          mt: 5,
          mx: 'auto',
        }}
      >
        Ingest, analyze, transform and visualize data in a single collaborative
        workspace. Barrel combines the features of a model building platform,
        transformations and pipeline tools into one intuitive infrastructure.
      </Box>
      <Box
        as={Link}
        sx={{
          '&:hover': {
            '&>span': { transform: 'translateX(5px)' },
            color: 'accentDark',
            textDecoration: 'underline',
          },
          color: 'text.link',
          cursor: 'pointer',
          display: 'inline-flex',
          fontSize: 4,
          mt: 6,
          mx: 'auto',
        }}
        to="/case-studies"
      >
        Read more about our Case Studies
        <Icon
          as="span"
          svg="right-arrow"
          sx={{
            display: ['none', null, 'block'],
            ml: 5,
            mt: 1,
            transition: 'transform 0.2s',
            width: '1.5rem',
          }}
        />
      </Box>
      {/* <ArrowLink link="/about-us" sx={{ mt: 6, display: 'inline-block' }}>
        Read more about our Case Studies
      </ArrowLink> */}
    </Section>
    <Section sx={{ px: [0, null, 7] }}>
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
            'repeat(6, 1fr)',
          ],
        }}
      >
        {[
          { svg: 'ruler', text: 'Standardize' },
          { svg: 'repeat', text: 'Repeat' },
          { svg: 'observer', text: 'Observe' },
          { svg: 'scale', text: 'Measure' },
          { svg: 'sliders', text: 'Experiment' },
          { svg: 'stairs', text: 'Scale' },
        ].map((item, i) => (
          <IconFigure
            key={item.text}
            as="li"
            iconWidth="2.5rem"
            size="8.5rem"
            svg={item.svg}
            sx={{
              bg: `accentScale.${i}`,
              borderRadius: [0, null, 2],
              boxShadow: 0,
              color: 'offWhite',
              width: '100%',
            }}
            text={item.text}
          />
        ))}
      </Box>
    </Section>
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <h2>Disability Claims&nbsp;Suite</h2>
      <Box
        as="p"
        sx={{
          lineHeight: 2,
          maxWidth: 'maxWidths.paragraphWider',
          mt: 4,
          mx: 'auto',
        }}
      >
        This solution can leverage existing claims data in any format from the
        vendor or proprietary system. While these functions are applicable
        across products lines, STD and LTD Disability claims have very specific
        business decision needs for which this ML model suite has been
        optimized.
      </Box>
    </Section>
    <Section sx={{ px: [0, null, 7] }}>
      <Box
        as="ul"
        sx={{
          display: 'grid',
          gridColumnGap: 5,
          gridRowGap: ['1px', null, 5],
          gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
        }}
      >
        {[
          {
            description: (
              <>
                Segments incoming short term and long term disability claims
                dynamically based on risk characteristics like diagnosis,
                co-morbidity factors and return to work likelihood matched with
                individual examiner experience and skill level for assignment.
              </>
            ),
            svg: 'pie-chart',
            title: <>Segmentation and Assignment</>,
          },
          {
            description: (
              <>
                Identifies short term disability claims like pregnancy with
                consistent, predictable benefit pattern that can be automated to
                adjudicate without examiner intervention.
              </>
            ),
            svg: 'gear',
            title: 'Auto Adjudication',
          },
          {
            description: (
              <>
                Identifies short term and long term disability claims with
                inconsistent patterns based on a number of factors such as
                diagnosis, job description, industry and return to work
                likelhood to flag for review by claims examiners.
              </>
            ),
            svg: 'thief',
            title: 'Fraud Identification',
          },
          {
            description: (
              <>
                Identifies long term disability claims with a higher propensity
                to settle based on historically settled claims pattern and the
                current claim characteristics.
              </>
            ),
            svg: 'scale',
            title: 'Settlement',
          },
          {
            description: (
              <>
                Identifies short term disability claims with a high propensity
                to become long term disability claims based on characteristics
                at the mid-point of the short term disability case cycle.
              </>
            ),
            svg: 'bridge',
            title: 'Bridging',
          },
          {
            description: (
              <>
                Identifies long term disability claims with a likelihood of
                positive social security outcome, a pension and/or workers
                compensation consideration.
              </>
            ),
            svg: 'seesaw',
            title: 'Offset',
          },
        ].map((item, i) => (
          <Box
            key={item.svg}
            as="li"
            sx={{
              bg: 'white',
              borderRadius: [null, null, 2],
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column',
              p: [6, null, null, 7],
            }}
          >
            <Icon
              svg={item.svg}
              sx={{
                bg: `accentScale.${i}`,
                borderRadius: '50%',
                color: 'offWhite',
                height: '4rem',
                p: '1rem',
                width: '4rem',
              }}
            />
            <Box as="h3" sx={{ mt: 5 }}>
              {item.title}
            </Box>
            <Box
              as="p"
              sx={{ color: 'text.subtle', fontSize: 2, lineHeight: 2, mt: 4 }}
            >
              {item.description}
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <h2>Additional Models</h2>
      <Box
        as="p"
        sx={{
          lineHeight: 2,
          maxWidth: 'maxWidths.paragraph',
          mt: 4,
          mx: 'auto',
        }}
      >
        We continue to extend models available within the Barrel framework.
        Below are others we have developed with&nbsp;clients.
      </Box>
    </Section>
    <Section sx={{ px: [0, null, 7] }}>
      <Box
        as="ul"
        sx={{
          display: 'grid',
          gridRowGap: ['1px', null, 5],
          gridTemplateColumns: '1fr',
        }}
      >
        {[
          {
            description: (
              <>
                Reviews over 100 data points related to the policy holder to
                predict lapse propensity and provide insight into relevant
                retention measures.
              </>
            ),
            title: 'Policyholder Lapse Retention Predictor',
          },
          {
            description: (
              <>
                Reviews applications to identify patterns that indicate a
                propensity of inconsistency within them.
              </>
            ),
            title: <>Application Level&nbsp;Fraud</>,
          },
          {
            description: (
              <>
                Reviews new business and service transactions for inconsistency
                at the individual advisor or institution level.
              </>
            ),
            title: 'Distribution Fraud',
          },
          {
            description: (
              <>
                Reviews disbursements and claims payments to identify patterns
                indicating operational inconsistencies.
              </>
            ),
            title: <>Employee Level&nbsp;Fraud</>,
          },
        ].map((item, i) => (
          <Box
            key={`model-${i}`}
            as="li"
            sx={{
              alignItems: 'center',
              bg: 'white',
              borderRadius: [null, null, 2],
              boxShadow: 3,
              display: [null, null, null, 'grid'],
              gridColumnGap: 7,
              gridTemplateColumns: '2fr 3.7fr',
              p: [6, null, null, 7],
            }}
          >
            <Box
              as="h3"
              /* sx={{
                textAlign: [null, null, null, 'right'],
                whiteSpace: [null, null, null, 'nowrap'],
              }} */
            >
              {item.title}
            </Box>
            <Box
              as="p"
              sx={{ color: 'text.subtle', fontSize: 2, lineHeight: 2, mt: 4 }}
            >
              {item.description}
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
    <ContactCTA />
  </>
);

MachineLearningSolutionsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default MachineLearningSolutionsPage;
