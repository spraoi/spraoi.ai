import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../../components/SEO';

const MachineLearningSolutionsPage = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Patent-pending continuous delivery platform enabling insurance specific machine learning models."
      pathname={pathname}
      title="Machine Learning"
    />
  </>
);

MachineLearningSolutionsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default MachineLearningSolutionsPage;
