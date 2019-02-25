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
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    author
                    banner
                    dateModified(formatString: "YYYY-MM-DD")
                    datePublished(formatString: "YYYY-MM-DD")
                    description
                    keywords
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
