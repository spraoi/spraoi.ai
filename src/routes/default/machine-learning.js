import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import ContactCTA from '../../components/ContactCTA';
import Icon from '../../components/Icon';
import IconFigure from '../../components/IconFigure';
import SEO from '../../components/SEO';
import Section from '../../components/Section';

const MachineLearningSolutionsPage = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Patent-pending continuous delivery platform enabling insurance specific machine learning models."
      pathname={pathname}
      title="Machine Learning"
    />
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <Icon
        svg="barrel-logo"
        sx={{
          mb: 5,
          mt: ['-1rem', null, '-1.6rem'],
          mx: [null, null, 'auto'],
        }}
        width={['5rem', null, '7rem']}
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
        Ingest, analyse, transform and visualize data in a single collaborative
        workspace. Barrel combines the features of a model building platform,
        transformations and pipeline tools into one intuitive infrastructure.
      </Box>
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
          { svg: 'ruler', text: 'Standardized' },
          { svg: 'repeat', text: 'Repeatable' },
          { svg: 'observer', text: 'Observable' },
          { svg: 'scale', text: 'Measurable' },
          { svg: 'sliders', text: 'Experimentation' },
          { svg: 'stairs', text: 'Scalable' },
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
        Our claims suite models can be fit to your data. While these function
        across lines of business, we also have developed specific models for
        production&nbsp;lines.
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
                Go beyond rules-based assignment to organization of at FNOL for
                the examiner that has the best experience adjudicating claims of
                this&nbsp;complexity.
              </>
            ),
            svg: 'pie-chart',
            title: <>Segmentation &amp; Assignment</>,
          },
          {
            description: (
              <>
                Adjudicate claims minimizing human intervention through
                recognition of those with predictable outcomes for resolution
                without adjuster&nbsp;participation.
              </>
            ),
            svg: 'gear',
            title: 'Auto Adjudication',
          },
          {
            description: (
              <>
                Identify fraudulent claims faster and/or those
                previously&nbsp;unidentified.
              </>
            ),
            svg: 'thief',
            title: 'Fraud Identification',
          },
          {
            description: (
              <>Identify claims for predicting settlement&nbsp;outcomes.</>
            ),
            svg: 'scale',
            title: 'Settlement',
          },
          {
            description: (
              <>
                Identify STD claims at appropriate points in the process to be
                bridged over to LTD case&nbsp;management.
              </>
            ),
            svg: 'bridge',
            title: 'Bridging',
          },
          {
            description: (
              <>
                Identify claims with likelihood of positive social security, a
                pension and/or workers comp&nbsp;considerations.
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
              justifyContent: 'center',
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
                Purchase predictor insight into product and customer alignment
                to appropriately direct and increase likelihood of purchase and
                offer better product&nbsp;fit.
              </>
            ),
            title: 'Purchase Predictor',
          },
          {
            description: (
              <>
                Application level fraud identifying patterns in applicants with
                a propensity to be fraudulent in the annuities&nbsp;space.
              </>
            ),
            title: <>Application Level&nbsp;Fraud</>,
          },
          {
            description: (
              <>
                Distribution fraud review policies and their distribution source
                to identify institutional fraud in the annuities&nbsp;space.
              </>
            ),
            title: 'Distribution Fraud',
          },
          {
            description: (
              <>
                Employee level fraud identify patterns of claims payments and
                disbursements for operational manipulation of the disbursement
                process in the annuities&nbsp;space.
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
              sx={{
                textAlign: [null, null, null, 'right'],
                whiteSpace: [null, null, null, 'nowrap'],
              }}
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
