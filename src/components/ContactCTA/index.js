import Box from '@spraoi/base/Box';
import Button from '@spraoi/base/Button';
import React from 'react';
import Section from '../Section';

const ContactCTA = () => (
  <Section sx={{ textAlign: 'center' }}>
    <Box as="p" sx={{ fontWeight: 'semibold', lineHeight: 2 }}>
      Interested in working with us?
    </Box>
    <Button link="/contact" sx={{ maxWidth: '14rem', mt: 4, mx: 'auto' }}>
      Let&rsquo;s talk
    </Button>
  </Section>
);

export default ContactCTA;
