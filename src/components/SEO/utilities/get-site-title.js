const getSiteTitle = (pathname, siteName, title) =>
  pathname === '/' ? title : `${title} - ${siteName}`;

export default getSiteTitle;
