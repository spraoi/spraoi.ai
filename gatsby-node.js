const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type !== 'MarkdownRemark') return;
  const slug = createFilePath({ basePath: 'pages', getNode, node });
  createNodeField({ name: 'slug', node, value: slug });
};

exports.createPages = ({ actions: { createPage, createRedirect }, graphql }) =>
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
            frontmatter {
              isAnnouncement
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
      const prefix = node.frontmatter.isAnnouncement
        ? 'announcements'
        : 'perspectives';

      createPage({
        component: path.resolve('src/components/ArticleLayout/index.js'),
        context: { slug: node.fields.slug },
        path: `/${prefix}${node.fields.slug}`,
      });

      if (!node.frontmatter.isAnnouncement) {
        createRedirect({
          fromPath: `/articles${node.fields.slug}`,
          isPermanent: true,
          toPath: `/${prefix}${node.fields.slug}`,
        });
      }
    });

    result.data.allPeopleYaml.edges.forEach(({ node }) => {
      createPage({
        component: path.resolve('src/components/PersonLayout/index.js'),
        context: { slug: `/${node.id}` },
        path: `/people/${node.id}`,
      });
    });

    createRedirect({
      fromPath: '/machine-learning-solutions/',
      isPermanent: true,
      toPath: '/machine-learning/',
    });

    createRedirect({
      fromPath: '/customer-experience-solutions/',
      isPermanent: true,
      toPath: '/customer-experience/',
    });

    createRedirect({
      fromPath: '/about_us/',
      isPermanent: true,
      toPath: '/about-us/',
    });

    createRedirect({
      fromPath: '/articles/',
      isPermanent: true,
      toPath: '/perspectives/',
    });

    createRedirect({
      fromPath: '/eis-and-spraoi-partnership/',
      isPermanent: true,
      toPath: '/announcements/eis-and-spraoi-partner/',
    });

    createRedirect({
      fromPath: '/articles/exciting-development/',
      isPermanent: true,
      toPath: '/announcements/exciting-development/',
    });
  });
