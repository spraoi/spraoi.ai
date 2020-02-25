import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';

const Card = ({ bg, children, color }) => {
  const rest = {
    bg,
    boxShadow: 0,
    color,
    display: 'flex',
    justifyContent: 'center',
    m: 2,
    shadow: 1,
  };

  return (
    <Box as="div" style={{ borderRadius: '1rem' }} {...rest}>
      {children}
    </Box>
  );
};

Card.propTypes = {
  bg: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  color: PropTypes.string,
};

Card.defaultProps = {
  bg: 'grays.0',
  children: [],
  color: 'primary',
};

export default Card;
