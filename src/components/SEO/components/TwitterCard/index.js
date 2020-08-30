import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

const TwitterCard = ({ description, image, title, type, username }) => (
  <Helmet>
    <meta content={description} name="twitter:description" />
    <meta content={description} name="twitter:image:alt" />
    <meta content={image} name="twitter:image" />
    <meta content={title} name="twitter:title" />
    <meta content={type} name="twitter:card" />
    {username && <meta content={`@${username}`} name="twitter:creator" />}
  </Helmet>
);

TwitterCard.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['summary_large_image']),
  username: PropTypes.string,
};

TwitterCard.defaultProps = {
  type: 'summary_large_image',
  username: null,
};

export default TwitterCard;
