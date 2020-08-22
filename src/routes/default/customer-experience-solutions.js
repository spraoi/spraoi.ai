import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../../components/SEO';

const CustomerExperienceSolutionsPage = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Microservices architected customer experience portal solution."
      pathname={pathname}
      title="Customer Experience"
    />
  </>
);

CustomerExperienceSolutionsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomerExperienceSolutionsPage;
