import Box from '@spraoi/base/Box';
import Button from '@spraoi/base/Button';
import React from 'react';
import Section from '../Section';

const ContactCTA = () => (
  <Section
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: ['column', null, 'row'],
      justifyContent: 'center',
      maxWidth: '100%',
    }}
  >
    <Box as="p" sx={{ fontWeight: 'semibold' }}>
      Interested in working with us?
    </Box>
    <Button link="/contact/" sx={{ ml: [null, null, 6], mt: [5, null, 0] }}>
      Let&rsquo;s talk
    </Button>
  </Section>
);

export default ContactCTA;
