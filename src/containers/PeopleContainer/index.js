import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const PeopleContainer = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allPeopleYaml {
          edges {
            node {
              active
              bio
              executive
              id
              name
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
                fluid(maxWidth: 220) {
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
      allPeopleYaml: { edges: people },
    }) =>
      children(
        people.map(p => ({
          ...p.node,
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
