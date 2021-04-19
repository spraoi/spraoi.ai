import { graphql, useStaticQuery } from 'gatsby';

const useCaseStudies = () => {
  const {
    allMarkdownRemark: { edges: caseStudies },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(case-studies)/" } }
        sort: { order: DESC, fields: [frontmatter___datePublished] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              readingTime {
                text
              }
              slug
            }
            frontmatter {
              author
              dateModified(formatString: "MMMM DD, YYYY")
              datePublished(formatString: "MMMM DD, YYYY")
              description
              icon
              isAnnouncement
              title
            }
            html
          }
        }
      }
    }
  `);

  return caseStudies.map((caseStudy) => ({
    ...caseStudy.node,
  }));
};

export default useCaseStudies;
