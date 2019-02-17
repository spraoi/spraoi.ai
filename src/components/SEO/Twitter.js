import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const Twitter = ({ desc, image, title, type, username }) => (
  <Helmet>
    {username && <meta content={`@${username}`} name="twitter:creator" />}
    <meta content={type} name="twitter:card" />
    <meta content={title} name="twitter:title" />
    <meta content={desc} name="twitter:description" />
    <meta content={image} name="twitter:image" />
    <meta content={desc} name="twitter:image:alt" />
  </Helmet>
);

export default Twitter;

Twitter.propTypes = {
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  username: PropTypes.string,
};

Twitter.defaultProps = {
  type: 'summary_large_image',
  username: null,
};
