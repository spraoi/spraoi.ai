import Box from '@spraoi/base/Box';
import Button from '@spraoi/base/Button';
import React from 'react';
import { Link } from 'gatsby';
import ArrowLink from '../../components/ArrowLink';
import ContactCTA from '../../components/ContactCTA';
import Icon from '../../components/Icon';
import IconFigure from '../../components/IconFigure';
import SEO from '../../components/SEO';
import Section from '../../components/Section';

const Index = () => (
  <>
    <SEO
      description="Spraoi was founded by Big Four Insurance Consulting and Silicon Valley leaders to bring disruptive capabilities to insurance consumers, agents and carriers."
      title="Spraoi - an insurtech solutions provider with a focus on ML"
    />
    <Section
      sx={{
        display: [null, null, null, 'flex'],
        justifyContent: 'space-between',
        position: 'relative',
        textAlign: [null, null, 'center', 'left'],
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Icon
          svg="logo-background"
          sx={{
            left: ['-19rem', null, '-6rem', '-19rem'],
            opacity: 0.2,
            position: 'absolute',
            top: '-17rem',
            width: '50rem',
            zIndex: -1,
          }}
        />
        <h1>Why Spraoi?</h1>
        <Box
          as="p"
          sx={{
            fontSize: 4,
            lineHeight: 1,
            maxWidth: 'maxWidths.paragraphWide',
            my: 5,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          ut aliquip&nbsp;ex.&nbsp;
          <ArrowLink link="/about-us">Read more</ArrowLink>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', null, 'row'],
            justifyContent: ['center', null, null, 'flex-start'],
            pt: 2,
          }}
        >
          <Button
            link="/eis-and-spraoi-partnership/"
            sx={{ maxWidth: [null, null, 'auto'], mr: [null, null, 5] }}
            variant="buttons.secondary"
          >
            Latest press release
          </Button>
          <Button
            link="/contact/"
            sx={{ maxWidth: [null, null, 'auto'], mt: [5, null, 0] }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
      <Box
        as="ul"
        sx={{
          display: 'flex',
          flexShrink: 0,
          flexWrap: 'wrap',
          justifyContent: [null, null, 'center', 'flex-start'],
          mb: [null, null, null, '-0.5rem'],
          ml: ['-0.5rem', null, 0, 6],
          mr: [null, null, null, '-1.25rem'],
          mt: [null, null, null, '-2.5rem'],
          pt: [7, null, null, 0],
          width: [null, null, null, '22.5rem'],
        }}
      >
        <IconFigure
          as="li"
          iconWidth="6.5rem"
          svg="certificate"
          sx={{ m: [3, null, 4] }}
          text={
            <>
              Insurance Subject
              <br />
              Matter Expertise
            </>
          }
        />
        <IconFigure
          as="li"
          iconWidth="7rem"
          svg="golden-gate-bridge"
          sx={{
            m: [3, null, 4],
            position: 'relative',
            top: [null, null, null, '5rem'],
          }}
          text={
            <>
              Silicon Valley
              <br />
              Technologists
            </>
          }
        />
        <IconFigure
          as="li"
          iconWidth="7rem"
          svg="connected-world"
          sx={{ m: [3, null, 4] }}
          text="Offshore Scale"
        />
      </Box>
    </Section>
    <Section>
      <Box sx={{ textAlign: [null, null, 'center'] }}>
        <h2>Solutions &amp; Services</h2>
        <Box
          as="p"
          sx={{
            lineHeight: 2,
            maxWidth: 'maxWidths.paragraphWide',
            mt: 4,
            mx: 'auto',
          }}
        >
          We&rsquo;ve brought two platforms to production that enable carriers
          to leverage their investments in core administration systems. Our team
          and intellectual property span the major lines of
          insurance&mdash;property/casualty, life/annuities &amp; voluntary
          benefits.
        </Box>
      </Box>
    </Section>
    <Section sx={{ px: [null, null, 7] }}>
      <ul>
        {[
          {
            description: (
              <>
                Insurance specific, reusable rules, schemas and processes to
                speed the machine learning model development&nbsp;process.
              </>
            ),
            icon: 'barrel-logo',
            iconSx: { mt: '-0.25rem', width: ['5rem', null, null, '7rem'] },
            link: '/machine-learning/',
            title: <>Machine learning&nbsp;platform</>,
          },
          {
            description: (
              <>
                We have leveraged our customer experience portal platform to
                develop specific solutions across insurance
                industry&nbsp;sectors.
              </>
            ),
            icon: 'kc-logo',
            iconSx: { mt: '0.75rem', width: ['9rem', null, null, '12rem'] },
            link: '/customer-experience/',
            title: <>Customer experience infrastructure</>,
          },
          {
            description: (
              <>
                We take delivery accountability from concept through
                execution—eliminating technology as the
                impediment&nbsp;to&nbsp;progress.
              </>
            ),
            icon: 'programmer',
            iconSx: { width: ['5rem', null, null, '7rem'] },
            link: '/services/',
            title: <>Technology solutions&nbsp;&amp;&nbsp;services</>,
          },
        ].map((item) => (
          <Box
            key={item.link}
            as="li"
            sx={{ '&:first-of-type': { mt: 0 }, mt: ['1px', null, 7] }}
          >
            <Box
              as={Link}
              sx={{
                '&:hover': {
                  '.title': { color: 'accentDark' },
                  boxShadow: [null, null, 2],
                  transform: 'scale(1.01)',
                },
                alignItems: [null, null, null, 'center'],
                bg: 'white',
                borderRadius: [null, null, 2],
                boxShadow: [null, null, 1],
                color: 'text.primary',
                display: 'flex',
                flexDirection: ['column-reverse', null, null, 'row'],
                justifyContent: 'space-between',
                p: [6, null, null, 7],
                textAlign: [null, null, 'center', 'left'],
                transition: 'box-shadow 0.3s, transform 0.3s',
              }}
              to={item.link}
            >
              <Box sx={{ position: 'relative' }}>
                <Box
                  as="h3"
                  className="title"
                  sx={{
                    color: 'accent',
                    fontSize: [3, null, null, 4],
                    transition: 'color 0.3s',
                  }}
                >
                  {item.title}
                </Box>
                <Box
                  as="p"
                  sx={{
                    color: 'text.subtle',
                    fontSize: [2, null, null, 3],
                    lineHeight: 2,
                    maxWidth: '33rem',
                    mt: 4,
                  }}
                >
                  {item.description}
                </Box>
              </Box>
              <Icon
                svg={item.icon}
                sx={{
                  mb: [4, null, null, 0],
                  mx: [null, null, 'auto', 0],
                  ...item.iconSx,
                }}
              />
            </Box>
          </Box>
        ))}
      </ul>
    </Section>
    <ContactCTA />
  </>
);

export default Index;
