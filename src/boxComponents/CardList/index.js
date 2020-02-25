import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';

const CardList = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        ml: 'auto',
        mr: 'auto',
        p: 5,
      }}
    >
      {children}
    </Box>
  );
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
