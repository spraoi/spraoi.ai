import Button from '@spraoi/base/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';

const ArrowLink = ({ children, link }) => (
  <Button
    link={link}
    simple
    sx={{
      '&:hover': {
        '&>span': { transform: 'translateX(5px)' },
        color: 'accentDark',
        textDecoration: 'underline',
      },
      color: 'text.link',
      fontSize: 1,
      fontWeight: 'semibold',
      letterSpacing: 1,
      mx: 2,
      py: 1,
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
    <Icon
      as="span"
      svg="right-arrow"
      sx={{
        display: 'inline-block',
        fill: 'inherit',
        left: 2,
        position: 'relative',
        top: '0.175rem',
        transition: 'transform 0.2s',
        width: '0.9rem',
      }}
    />
  </Button>
);

ArrowLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default ArrowLink;
