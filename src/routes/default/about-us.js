import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../../components/SEO';

const AboutUsPage = ({ location: { pathname } }) => (
  <>
    <SEO description="Food bar." pathname={pathname} title="About Us" />
  </>
);

AboutUsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutUsPage;
