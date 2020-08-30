import { graphql, useStaticQuery } from 'gatsby';

const useMetadata = () => {
  const {
    site: { buildTime, siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        buildTime(formatString: "YYYY-MM-DD")
        siteMetadata {
          banner
          datePublished(formatString: "YYYY-MM-DD")
          facebook
          instagram
          linkedIn
          logo
          siteLanguage
          siteLocal
          siteName
          siteUrl
          twitter
        }
      }
    }
  `);

  return { ...siteMetadata, dateModified: buildTime };
};

export default useMetadata;
