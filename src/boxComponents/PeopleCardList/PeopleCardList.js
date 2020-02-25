import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';
import { Link } from 'gatsby';
import '../styles/peopleCardList.css';

const PeopleCard = ({ name, title, icon, id }) => {
  return (
    <div key={name}>
      <Link to={`/people/${id}/`}>
        <Box className="peopleCard" m={2} p={4} width="18rem">
          <img alt={name} className="animateRound img" src={icon} />
          <div className="content">
            <Box as="h4" style={{ textTransform: 'uppercase' }}>
              {name}
            </Box>
            <Box as="p" style={{ textTransform: 'uppercase' }}>
              {title}
            </Box>
          </div>
        </Box>
      </Link>
    </div>
  );
};

PeopleCard.propTypes = {
  icon: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

PeopleCard.defaultProps = {
  icon: null,
  id: '',
  name: '',
  title: '',
};

const PeopleCardList = ({ data }) => {
  const iconCardList = data.reduce((res, row) => {
    res.push(
      <PeopleCard
        icon={row.icon}
        id={row.id}
        name={row.name}
        title={row.title}
      />
    );
    return res;
  }, []);
  return (
    <div className="iconCardList">
      <Box display="flex" flexDirection="row" flexWrap="wrap" p={4}>
        {iconCardList}
      </Box>
    </div>
  );
};

PeopleCardList.propTypes = {
  data: PropTypes.arrayOf({
    description: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string,
  }),
};

PeopleCardList.defaultProps = {
  data: [],
};

export default PeopleCardList;
