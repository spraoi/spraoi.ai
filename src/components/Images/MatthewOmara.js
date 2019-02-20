import Image from 'gatsby-image';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const MatthiewOmara = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "people/matthew-omara.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 220) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
  >
    {({ file }) => <Image alt="" fluid={file.childImageSharp.fluid} />}
  </StaticQuery>
);

export default MatthiewOmara;
