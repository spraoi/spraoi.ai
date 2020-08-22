import Box from '@spraoi/base/Box';
import React from 'react';
import Icon from '../Icon';
import Section from '../Section';

const Footer = () => (
  <Box as="footer" sx={{ bg: 'primaryBg', mt: 7 }}>
    <Section
      as="div"
      sx={{
        alignItems: ['center', null, 'flex-start'],
        display: 'flex',
        flexDirection: ['column', null, 'row'],
        justifyContent: 'space-between',
      }}
    >
      <Box as="h2" sx={{ display: 'flex', mr: [null, null, 4] }}>
        We&rsquo;re online
        <Icon
          svg="right-arrow"
          sx={{ display: ['none', null, 'block'], ml: 5, mt: 1, width: '2rem' }}
        />
      </Box>
      <Box as="ul" sx={{ display: 'flex', mt: 4 }}>
        {[
          {
            alt: 'on Twitter',
            icon: 'twitter',
            link: 'https://twitter.com/spraoit',
          },
          {
            alt: 'on Instagram',
            icon: 'instagram',
            link: 'https://www.instagram.com/spraoi_tech',
          },
          {
            alt: 'on LinkedIn',
            icon: 'linkedin',
            link: 'https://www.linkedin.com/company/spraoi.ai',
          },
          {
            alt: 'on Facebook',
            icon: 'facebook',
            link: 'https://www.facebook.com/spraoisoftware',
          },
        ].map((item) => (
          <Box
            key={item.link}
            as="li"
            sx={{ ml: [4, null, 5], mr: [4, null, 0] }}
          >
            <Box
              as="a"
              href={item.link}
              sx={{
                '&:hover': { color: 'accentDark' },
                color: 'accent',
                transition: 'color 0.2s',
              }}
            >
              <Icon alt={item.alt} svg={item.icon} sx={{ width: '1.5rem' }} />
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  </Box>
);

export default Footer;
