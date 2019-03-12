import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

const GenericTags = ({ author, description, language, title, url }) => (
  <Helmet>
    <html lang={language} />
    <title>{title}</title>
    <link href={url} rel="canonical" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content={description} name="description" />
    <meta content={author} name="author" />
  </Helmet>
);

GenericTags.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GenericTags;
