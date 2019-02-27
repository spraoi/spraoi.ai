import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

const FacebookCard = ({
  description,
  image,
  locale,
  name,
  title,
  type,
  url,
}) => (
  <Helmet>
    <meta content={description} property="og:description" />
    <meta content={description} property="og:image:alt" />
    <meta content={image} property="og:image" />
    <meta content={locale} property="og:locale" />
    <meta content={title} property="og:title" />
    <meta content={type} property="og:type" />
    <meta content={url} property="og:url" />
    {name && <meta content={name} property="og:site_name" />}
  </Helmet>
);

FacebookCard.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['website', 'article']),
  url: PropTypes.string.isRequired,
};

FacebookCard.defaultProps = {
  name: null,
  type: 'website',
};

export default FacebookCard;
