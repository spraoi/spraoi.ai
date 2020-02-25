import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';

const Section = ({ center, children, single, small, top }) => {
  const rest = {
    mt: 8,
    position: 'relative',
  };

  if (!small) {
    rest.mt = { _: 6, md: 9 };
  }

  if (!single) {
    rest.display = { md: 'flex' };
  }
  if (!top) {
    rest.alignItems = { md: 'center' };
  }
  if (center) {
    rest.textAlign = 'center';
  }
  return (
    <Box as="section" {...rest}>
      {children}
    </Box>
  );
};

Section.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  single: PropTypes.bool,
  small: PropTypes.bool,
  top: PropTypes.bool,
};

Section.defaultProps = {
  center: false,
  children: [],
  single: false,
  small: false,
  top: false,
};

export default Section;
