import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';

const Section = ({ as, children, sx }) => (
  <Box
    as={as}
    sx={{
      maxWidth: 'maxWidths.content',
      mx: 'auto',
      px: [6, null, 7],
      py: 7,
      ...sx,
    }}
  >
    {children}
  </Box>
);

Section.propTypes = {
  as: PropTypes.node,
  children: PropTypes.node.isRequired,
  sx: PropTypes.shape({}),
};

Section.defaultProps = {
  as: 'section',
  sx: {},
};

export default Section;
