import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../../components/SEO';

const CxSolutions = ({ location: { pathname } }) => (
  <>
    <SEO pathname={pathname} title="Customer Experience Solutions" />
  </>
);

CxSolutions.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default CxSolutions;
