import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../../components/SEO';

const Contact = ({ location: { pathname } }) => (
  <>
    <SEO pathname={pathname} title="Contact Us" />
  </>
);

Contact.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
