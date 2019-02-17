import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../../components/SEO';

const MlSolutions = ({ location: { pathname } }) => (
  <>
    <SEO pathname={pathname} title="Machine Learning Solutions" />
  </>
);

MlSolutions.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default MlSolutions;
