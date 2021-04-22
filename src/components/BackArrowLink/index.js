import Button from '@spraoi/base/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';

const BackArrowLink = ({ children, link, sx }) => (
  <Button
    link={link}
    simple
    sx={{
      '&:hover': {
        '&>span': { transform: 'translateX(-5px)' },
        color: 'accentDark',
        textDecoration: 'underline',
      },
      color: 'text.link',
      fontSize: 2,
      fontWeight: 'semibold',
      letterSpacing: 1,
      mx: 2,
      py: 1,
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...sx,
    }}
  >
    <Icon
      as="span"
      svg="left-arrow"
      sx={{
        display: 'inline-block',
        fill: 'inherit',
        height: '0.9rem',
        position: 'relative',
        right: 2,
        top: '0.175rem',
        transition: 'transform 0.2s',
        width: '0.9rem',
      }}
    />
    {children}
  </Button>
);

BackArrowLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  sx: PropTypes.shape({}),
};

BackArrowLink.defaultProps = {
  sx: {},
};

export default BackArrowLink;
