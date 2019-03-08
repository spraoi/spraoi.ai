import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const PeopleContainer = ({ children }) => (
  <StaticQuery
    query={graphql`
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
                banner
                dateModified(formatString: "MMMM DD, YYYY")
                datePublished(formatString: "MMMM DD, YYYY")
                description
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
              childImageSharp {
                fluid(maxWidth: 250) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    `}
    render={({
      allFile: { edges: images },
      allMarkdownRemark: { edges: articles },
      allPeopleYaml: { edges: people },
    }) =>
      children(
        people.map(p => ({
          ...p.node,
          articles: articles
            .filter(article => article.node.frontmatter.author === p.node.id)
            .map(article => article.node),
          image: images.find(i =>
            i.node.childImageSharp.fluid.src.includes(p.node.id)
          ).node.childImageSharp.fluid,
        }))
      )
    }
  />
);

PeopleContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default PeopleContainer;
