import PropTypes from 'prop-types';
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PeopleContainer from '../PeopleContainer';

const ArticlesContainer = ({ children }) => (
  <PeopleContainer>
    {people => (
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
        `}
        render={({ allMarkdownRemark: { edges: articles } }) =>
          children(
            articles.map(article => ({
              ...article.node,
              author: people.find(
                person => person.id === article.node.frontmatter.author
              ),
            }))
          )
        }
      />
    )}
  </PeopleContainer>
);

ArticlesContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ArticlesContainer;
