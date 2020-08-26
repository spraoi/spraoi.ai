import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import { Facebook, Linkedin, Mail, Twitter } from 'react-social-sharing';
import Icon from '../Icon';

const ShareCTA = ({ link, title }) => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: ['column', null, 'row'],
      justifyContent: 'space-between',
      maxWidth: 'maxWidths.paragraph',
      mx: 'auto',
      pt: 7,
      width: '100%',
    }}
  >
    <Box as="h2" sx={{ display: 'flex', fontSize: 4, mr: [null, null, 3] }}>
      Share links
      <Icon
        svg="right-arrow"
        sx={{ display: ['none', null, 'block'], ml: 5, mt: 1, width: '1.5rem' }}
      />
    </Box>
    <Box sx={{ mt: [1, null, 0] }}>
      <Linkedin link={link} message={title} small solid />
      <Twitter link={link} message={title} small solid />
      <Facebook link={link} message={title} small solid />
      <Mail link={link} message={title} small solid />
    </Box>
  </Box>
);

ShareCTA.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ShareCTA;
