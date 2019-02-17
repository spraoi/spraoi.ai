import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

const Facebook = ({ desc, image, locale, name, title, type, url }) => (
  <Helmet>
    {name && <meta content={name} property="og:site_name" />}
    <meta content={locale} property="og:locale" />
    <meta content={url} property="og:url" />
    <meta content={type} property="og:type" />
    <meta content={title} property="og:title" />
    <meta content={desc} property="og:description" />
    <meta content={image} property="og:image" />
    <meta content={desc} property="og:image:alt" />
  </Helmet>
);

Facebook.propTypes = {
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  url: PropTypes.string.isRequired,
};

Facebook.defaultProps = {
  name: null,
  type: 'website',
};

export default Facebook;
