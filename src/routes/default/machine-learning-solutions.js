import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../../components/SEO';

const MachineLearningSolutions = ({ location: { pathname } }) => (
  <>
    <SEO pathname={pathname} title="Machine Learning Solutions" />
  </>
);

MachineLearningSolutions.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default MachineLearningSolutions;
