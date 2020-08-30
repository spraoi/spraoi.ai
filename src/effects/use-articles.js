import { graphql, useStaticQuery } from 'gatsby';
import usePeople from './use-people';

const useArticles = () => {
  const people = usePeople();

  const {
    allMarkdownRemark: { edges: articles },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
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
              title
            }
            html
          }
        }
      }
    }
  `);

  return articles.map((article) => ({
    ...article.node,
    author: people.find(
      (person) => person.id === article.node.frontmatter.author
    ),
  }));
};

export default useArticles;
