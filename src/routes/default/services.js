import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../../components/SEO';

const Services = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Simplified and accelerated technology service delivery that maintains traction through seamless transition from concept to implementation."
      pathname={pathname}
      title="Services"
    />
  </>
);

Services.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Services;
