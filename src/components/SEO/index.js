import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from '@reach/router';
import FacebookCard from './components/FacebookCard';
import GenericTags from './components/GenericTags';
import StructuredData from './components/StructuredData';
import TwitterCard from './components/TwitterCard';
import getSiteTitle from './utilities/get-site-title';
import getSocialUrls from './utilities/get-social-urls';
import getStructuredBreadcrumbs from './utilities/get-structured-breadcrumbs';
import useMetadata from '../../effects/use-metadata';

const SEO = ({ article, person, ...overrides }) => {
  const location = useLocation();
  const siteMetadata = useMetadata();
  const ref = (type, id) => ({ '@id': id, '@type': type });
  const data = { ...siteMetadata, ...overrides };
  const canonicalUrl = `${data.siteUrl}${location.pathname}`;
  const bannerUrl = `${data.siteUrl}${data.banner}`;
  const logoUrl = `${data.siteUrl}${data.logo}`;
  const organizationId = `${data.siteUrl}#organization`;
  let personId = null;
  if (person) personId = `${data.siteUrl}#${person.id}`;

  return (
    <>
      <GenericTags
        author={
          person
            ? `${person.givenName} ${person.familyName}`
            : siteMetadata.siteName
        }
        description={data.description}
        language={data.siteLanguage}
        title={getSiteTitle(location.pathname, data.siteName, data.title)}
        url={canonicalUrl}
      />
      <StructuredData
        about={siteMetadata.description}
        author={ref('Organization', organizationId)}
        id={siteMetadata.siteUrl}
        inLanguage={siteMetadata.siteLanguage}
        type="WebSite"
      />
      <StructuredData
        id={organizationId}
        logo={{ '@type': 'ImageObject', url: logoUrl }}
        name={siteMetadata.siteName}
        sameAs={getSocialUrls(siteMetadata)}
        type="Organization"
        url={siteMetadata.siteUrl}
      />
      {!!person && (
        <StructuredData
          familyName={person.familyName}
          givenName={person.givenName}
          id={personId}
          jobTitle={person.position}
          name={`${person.givenName} ${person.familyName}`}
          type="Person"
        />
      )}
      <StructuredData
        author={
          article
            ? ref('Person', personId)
            : ref('Organization', organizationId)
        }
        dateModified={data.dateModified}
        datePublished={data.datePublished}
        description={data.description}
        headline={data.title}
        id={canonicalUrl}
        image={bannerUrl}
        inLanguage={siteMetadata.siteLanguage}
        mainEntityOfPage={canonicalUrl}
        publisher={ref('Organization', organizationId)}
        type={article ? 'Article' : 'WebPage'}
        url={canonicalUrl}
      />
      <StructuredData
        id={`${data.siteUrl}#breadcrumbs`}
        itemListElement={getStructuredBreadcrumbs({
          canonicalUrl,
          isArticle: !!article,
          isPerson: !!person,
          location,
          siteName: data.siteName,
          siteUrl: data.siteUrl,
          title: data.title,
        })}
        type="BreadcrumbList"
      />
      <FacebookCard
        description={data.description}
        image={bannerUrl}
        locale={data.siteLocal}
        name={siteMetadata.title}
        title={data.title}
        type={article ? 'article' : 'website'}
        url={canonicalUrl}
      />
      <TwitterCard
        description={data.description}
        image={bannerUrl}
        title={data.title}
        username={data.twitter}
      />
    </>
  );
};

SEO.propTypes = {
  article: PropTypes.shape({}),
  person: PropTypes.shape({
    familyName: PropTypes.string,
    givenName: PropTypes.string,
    id: PropTypes.string,
    position: PropTypes.string,
  }),
};

SEO.defaultProps = {
  article: null,
  person: null,
};

export default SEO;
