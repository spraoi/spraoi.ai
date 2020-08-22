export const getSiteTitle = (pathname, siteName, title) =>
  pathname === '/' ? title : `${title} - ${siteName}`;

export const getSocialUrls = ({ instagram, twitter, facebook, linkedIn }) => {
  const socialUrls = [];
  if (instagram) socialUrls.push(`https://www.instagram.com/${instagram}`);
  if (twitter) socialUrls.push(`https://twitter.com/${twitter}`);
  if (facebook) socialUrls.push(`https://www.facebook.com/${facebook}`);
  if (linkedIn) socialUrls.push(`https://www.linkedin.com/company/${linkedIn}`);
  return socialUrls;
};

export const getStructuredBreadcrumbs = ({
  canonicalUrl,
  isArticle,
  isPerson,
  location,
  siteName,
  siteUrl,
  title,
}) => {
  const breadcrumbItems = [
    { '@type': 'ListItem', item: siteUrl, name: siteName, position: 1 },
  ];

  if (isArticle) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      item: `${siteUrl}/perspectives/`,
      name: 'Articles',
      position: 2,
    });

    breadcrumbItems.push({
      '@type': 'ListItem',
      item: canonicalUrl,
      name: title,
      position: 3,
    });

    return breadcrumbItems;
  }

  if (isPerson) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      item: `${siteUrl}/people/`,
      name: 'People',
      position: 2,
    });

    breadcrumbItems.push({
      '@type': 'ListItem',
      item: canonicalUrl,
      name: title,
      position: 3,
    });

    return breadcrumbItems;
  }

  if (location.pathname !== '/') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      item: canonicalUrl,
      name: title,
      position: 2,
    });

    return breadcrumbItems;
  }

  return breadcrumbItems;
};
