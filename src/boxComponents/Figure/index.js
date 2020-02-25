import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';

const Figure = ({ children }) => {
  const rest = {
    m: { _: '0px', md: 5 },
    position: { _: 'relative' },
  };

  return (
    <Box as="figure" {...rest}>
      {children}
    </Box>
  );
};

Figure.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Figure.defaultProps = {
  children: [],
};

export default Figure;
