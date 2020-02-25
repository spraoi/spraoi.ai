import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';
import '../styles/iconCardList.css';

const IconCard = ({ title, description, icon, list }) => {
  const listItems = list.reduce((res, row, ix) => {
    res.push(<p key={ix}>{row}</p>);
    return res;
  }, []);
  return (
    <div className="iconCard">
      <Box height="13rem" m={2} p={1} width="18rem">
        <div className="front">
          <div className="icon">
            <Box as={icon} height="5rem" width="5rem" />
          </div>
          <div className="title">
            <Box as="h3" style={{ textTransform: 'uppercase' }}>
              {title}
            </Box>
          </div>
        </div>
        <div className="back">
          {description && <p>{description}</p>}
          {listItems.length > 0 && (
            <Box as="div" p={1} style={{ textTransform: 'uppercase' }}>
              {listItems}
            </Box>
          )}
        </div>
      </Box>
    </div>
  );
};

IconCard.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

IconCard.defaultProps = {
  description: '',
  list: [],
  title: '',
};

const IconCardList = ({ data }) => {
  const iconCardList = data.reduce((res, row, ix) => {
    res.push(
      <IconCard
        key={ix}
        description={row.description}
        icon={row.icon}
        list={row.list}
        title={row.title}
      />
    );
    return res;
  }, []);
  return (
    <div className="iconCardList">
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        p={4}
      >
        {iconCardList}
      </Box>
    </div>
  );
};

IconCardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      icon: PropTypes.func,
      title: PropTypes.string,
    })
  ),
};

IconCardList.defaultProps = {
  data: [],
};

export default IconCardList;
