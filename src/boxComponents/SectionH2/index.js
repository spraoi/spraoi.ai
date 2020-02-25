import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';

const SectionH2 = ({ children }) => {
  const rest = {
    fontSize: 5,
    lineHeight: '1.5em',
    mb: 5,
  };

  return (
    <Box as="h2" {...rest}>
      {children}
    </Box>
  );
};

SectionH2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

SectionH2.defaultProps = {
  children: [],
};

export default SectionH2;
