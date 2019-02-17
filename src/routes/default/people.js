import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../../components/SEO';

const People = ({ location: { pathname } }) => (
  <>
    <SEO pathname={pathname} title="People" />
  </>
);

People.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default People;
