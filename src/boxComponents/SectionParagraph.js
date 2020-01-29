import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';

const SectionParagraph = ({ center, children }) => {
  const rest = {
    letterSpacing: 0,
    lineHeight: 2,
    maxWidth: 'maxWidths.paragraph',
    textAlign: 'justify',
  };

  if (center) {
    rest.mr = 'auto';
    rest.ml = 'auto';
  }

  return (
    <Box as="p" {...rest}>
      {children}
    </Box>
  );
};

SectionParagraph.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

SectionParagraph.defaultProps = {
  center: false,
  children: [],
};

export default SectionParagraph;
