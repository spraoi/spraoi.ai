import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../../components/SEO';

const ServicesPage = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Innovation, integration and data services to support transformative initiatives."
      pathname={pathname}
      title="Services"
    />
  </>
);

ServicesPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServicesPage;
