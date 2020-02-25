import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';

const Figures = ({ children, left }) => {
  const rest = {
    display: 'flex',
    flexDirection: { _: 'column', md: 'row' },
    flexWrap: 'wrap',
    mt: { _: '0px', md: 3 },
    position: 'relative',
  };

  if (left) {
    rest.flexDirection = 'rowReverse';
  }
  return (
    <Box as="div" {...rest}>
      {children}
    </Box>
  );
};

Figures.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  left: PropTypes.bool,
};

Figures.defaultProps = {
  children: [],
  left: false,
};

export default Figures;
