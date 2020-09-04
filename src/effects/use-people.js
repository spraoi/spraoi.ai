import { graphql, useStaticQuery } from 'gatsby';

const usePeople = () => {
  const {
    allFile: { edges: images },
    allMarkdownRemark: { edges: articles },
    allPeopleYaml: { edges: people },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___datePublished] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              author
              dateModified(formatString: "MMMM DD, YYYY")
              datePublished(formatString: "MMMM DD, YYYY")
              description
              isAnnouncement
              title
            }
            html
          }
        }
      }
      allPeopleYaml {
        edges {
          node {
            active
            bio
            executive
            familyName
            givenName
            id
            position
          }
        }
      }
      allFile(
        filter: {
          extension: { regex: "/jpg/" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        edges {
          node {
            colors {
              ...GatsbyImageColors
            }
            childImageSharp {
              fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return people.map((p) => ({
    ...p.node,
    articles: articles
      .filter(
        (article) =>
          article.node.frontmatter.author === p.node.id &&
          !article.node.frontmatter.isAnnouncement
      )
      .map((article) => article.node),
    colors: images.find((i) =>
      i.node.childImageSharp.fluid.src.includes(p.node.id)
    ).node.colors,
    image: images.find((i) =>
      i.node.childImageSharp.fluid.src.includes(p.node.id)
    ).node.childImageSharp.fluid,
  }));
};

export default usePeople;
