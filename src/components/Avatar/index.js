import Box from '@spraoi/base/Box';
import Img from 'gatsby-image/index';
import PropTypes from 'prop-types';
import React from 'react';

const Avatar = ({ image, size, sx, ...rest }) => (
  <Box
    as={Img}
    fluid={image}
    sx={{
      borderRadius: '50%',
      boxShadow: 1,
      display: 'block',
      flexShrink: 0,
      height: size,
      width: size,
      ...sx,
    }}
    {...rest}
  />
);

Avatar.propTypes = {
  image: PropTypes.shape({}).isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  sx: PropTypes.shape({}),
};

Avatar.defaultProps = {
  size: '4rem',
  sx: {},
};

export default Avatar;
