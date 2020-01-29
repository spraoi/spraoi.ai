import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';

const CardList = ({ children }) => {
  const rest = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    ml: 'auto',
    mr: 'auto',
    p: 5,
  };

  return <Box {...rest}>{children}</Box>;
};

CardList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

CardList.defaultProps = {
  children: [],
};

export default CardList;
