const getStructuredBreadcrumbs = ({
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
      name: 'Perspectives',
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
      item: `${siteUrl}/about-us/`,
      name: 'About Us',
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

export default getStructuredBreadcrumbs;
