import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';

const IconFigure = ({ as, iconWidth, size, svg, sx, text }) => (
  <Box
    as={as}
    sx={{
      alignItems: 'center',
      bg: 'white',
      borderRadius: 2,
      boxShadow: 3,
      color: 'text.subtle',
      display: 'flex',
      flexDirection: 'column',
      fontSize: 0,
      height: size,
      justifyContent: 'center',
      letterSpacing: 1,
      lineHeight: 1,
      textAlign: 'center',
      textTransform: 'uppercase',
      width: size,
      ...sx,
    }}
  >
    <Box sx={{ mb: 3, mx: 'auto', width: iconWidth }}>
      <Icon svg={svg} sx={{ height: '100%' }} />
    </Box>
    {text}
  </Box>
);

IconFigure.propTypes = {
  as: PropTypes.node,
  iconWidth: PropTypes.string,
  size: PropTypes.string,
  svg: PropTypes.string.isRequired,
  sx: PropTypes.shape({}),
  text: PropTypes.node.isRequired,
};

IconFigure.defaultProps = {
  as: 'div',
  iconWidth: '7rem',
  size: '9.5rem',
  sx: {},
};

export default IconFigure;
