const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type !== 'MarkdownRemark') return;
  const slug = createFilePath({ basePath: 'pages', getNode, node });
  createNodeField({ name: 'slug', node, value: slug });
};

exports.createPages = ({ actions: { createPage }, graphql }) =>
  graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___datePublished] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allPeopleYaml {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) return Promise.reject(result.errors);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        component: path.resolve('src/components/ArticleLayout/index.js'),
        context: { slug: node.fields.slug },
        path: `/perspectives${node.fields.slug}`,
      });
    });

    result.data.allPeopleYaml.edges.forEach(({ node }) => {
      createPage({
        component: path.resolve('src/components/PersonLayout/index.js'),
        context: { slug: `/${node.id}` },
        path: `/people/${node.id}`,
      });
    });
  });
