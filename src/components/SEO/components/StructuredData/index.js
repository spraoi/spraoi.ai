import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

const StructuredData = ({ id, type, ...data }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'http://schema.org',
        '@id': id,
        '@type': type,
        ...data,
      })}
    </script>
  </Helmet>
);

StructuredData.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'Article',
    'BreadcrumbList',
    'Organization',
    'Person',
    'WebPage',
    'WebSite',
  ]).isRequired,
};

export default StructuredData;
