import Box from '@spraoi/base/Box';
import React from 'react';
import Section from '../../components/Section';
import Icon from '../../components/Icon';

const FourOhFour = () => (
  <Section
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: ['column', null, 'row'],
      justifyContent: 'center',
      textAlign: ['center', null, 'left'],
    }}
  >
    <Box as="h1" sx={{ color: 'accent' }}>
      404
    </Box>
    <Icon
      svg="playful-cat"
      sx={{ ml: [null, null, 7], mr: [null, null, 5], py: [7, null, 0] }}
      width="15rem"
    />
    <Box as="p" sx={{ color: 'text.subtle', lineHeight: 1 }}>
      This page doesn&rsquo;t exist,{' '}
      <Box as="span" sx={{ fontWeight: 'semibold' }}>
        but&nbsp;you&nbsp;found&nbsp;the&nbsp;cat.
      </Box>
    </Box>
  </Section>
);

export default FourOhFour;
