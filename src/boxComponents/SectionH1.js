// position: relative;
//   left: -0.1rem;
//   margin-bottom: ${p => p.theme.space[4]};
//   color: ${p => p.theme.colors.primaryDark};
//   font-size: ${p => p.theme.fontSizes[5]};
//   line-height: 1.4em;
//   white-space: ${p => (p['data-wrap'] ? 'wrapLine' : 'nowrap')};

//   @media (min-width: ${p => p.theme.breakpoints.sm}) {
//     font-size: ${p => p.theme.fontSizes[6]};
//   }

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';

const SectionH1 = ({ children, dataWrap }) => {
  const rest = {
    color: 'primaryDark',
    fontSize: { _: 5, md: 6 },
    left: '-0.1rem',
    lineHeight: '1.4em',
    mb: 4,
    position: 'relative',
  };

  const style = {
    whiteSpace: dataWrap ? 'pre-line' : 'nowrap',
  };

  return (
    <Box as="h1" style={style} {...rest}>
      {children}
    </Box>
  );
};

SectionH1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  dataWrap: PropTypes.bool,
};

SectionH1.defaultProps = {
  children: [],
  dataWrap: false,
};

export default SectionH1;
