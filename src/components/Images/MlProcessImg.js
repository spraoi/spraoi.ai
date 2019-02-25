import Img from 'gatsby-image';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const MlProcessImg = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "diagrams/ml-process.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
  >
    {({ file }) => <Img alt="" fluid={file.childImageSharp.fluid} />}
  </StaticQuery>
);

export default MlProcessImg;
