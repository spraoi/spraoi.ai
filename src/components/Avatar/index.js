import Box from '@spraoi/base/Box';
import Img from 'gatsby-image/index';
import PropTypes from 'prop-types';
import React from 'react';

const Avatar = ({ alt, image, size, sx }) => (
  <Box
    alt={alt}
    as={Img}
    fluid={image}
    sx={{
      borderRadius: '50%',
      boxShadow: 2,
      display: 'block',
      flexShrink: 0,
      height: size,
      width: size,
      ...sx,
    }}
  />
);

Avatar.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.shape({}).isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  sx: PropTypes.shape({}),
};

Avatar.defaultProps = {
  alt: '',
  size: '4rem',
  sx: {},
};

export default Avatar;
