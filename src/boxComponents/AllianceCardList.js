import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';
import './styles/allianceCard.css';

const AllianceCard = ({ name, title, icon }) => {
  return (
    <div key={name}>
      <Box m={2} p={4} width="12rem">
        <figure className="aimg">
          <img alt={name} className="animateRound" src={icon} />
          <div className="title">
            <h4>{name}</h4>
          </div>
          <p>{title}</p>
        </figure>
      </Box>
    </div>
  );
};

AllianceCard.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string,
  title: PropTypes.string,
};

AllianceCard.defaultProps = {
  icon: null,
  name: '',
  title: '',
};

const AllianceCardList = ({ data }) => {
  const iconCardList = data.reduce((res, row) => {
    res.push(
      <AllianceCard icon={row.icon} name={row.name} title={row.title} />
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

AllianceCardList.propTypes = {
  data: PropTypes.arrayOf({
    description: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string,
  }),
};

AllianceCardList.defaultProps = {
  data: [],
};

export default AllianceCardList;
