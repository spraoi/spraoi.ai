import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../../components/SEO';

const Services = ({ location: { pathname } }) => (
  <>
    <SEO pathname={pathname} title="Services" />
  </>
);

Services.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Services;
