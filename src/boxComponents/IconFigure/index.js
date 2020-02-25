import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';

const IconFigure = ({ children, small, smallOnMedium }) => {
  const rest = {
    bg: 'primary',
    borderRadius: 2,
    boxShadow: 1,
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 2,
    fontWeight: 'semibold',
    height: '9.8rem',
    justifyContent: 'space-between',
    letterSpacing: 2,
    lineHeight: 1,
    padding: 5,
    textTransform: 'uppercase',
  };

  if (small || smallOnMedium) {
    rest.width = '7.4rem';
    rest.height = '7.4rem';
    rest.justifyContent = 'center';
    rest.alignItems = 'center';
    rest.p = 4;
    rest.fontSize = 1;
    rest.textAlign = 'center';
  }

  return (
    <Box as="figure" {...rest}>
      {children}
    </Box>
  );
};

IconFigure.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  small: PropTypes.bool,
  smallOnMedium: PropTypes.bool,
};

IconFigure.defaultProps = {
  children: [],
  small: false,
  smallOnMedium: false,
};

export default IconFigure;
