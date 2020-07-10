import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const partlyActive = (cn) => ({ isPartiallyCurrent }) => ({
  className: cn + (isPartiallyCurrent ? ` active` : ``),
});

const PartialLink = ({ className, ...rest }) => (
  <Link getProps={partlyActive(className)} {...rest} />
);

PartialLink.propTypes = {
  className: PropTypes.string,
};

PartialLink.defaultProps = {
  className: null,
};

export default PartialLink;
