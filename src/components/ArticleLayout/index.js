/* eslint react/no-danger: off */

import PropTypes from 'prop-types';
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SEO from '../SEO';

const ArticleLayout = ({ location: { pathname }, pageContext: { slug } }) => (
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
        allPeopleYaml {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `}
    render={({
      allPeopleYaml: { edges: people },
      allMarkdownRemark: { edges: articles },
    }) => {
      const { frontmatter, html } = articles.find(
        ({ node }) => node.fields.slug === slug
      ).node;

      const author = people.find(({ node }) => node.id === frontmatter.author)
        .node;

      return (
        <article>
          <SEO
            article={{ ...frontmatter, author: author.name }}
            pathname={pathname}
          />
          <header>
            <h1>{frontmatter.title}</h1>
            <span>
              Posted by {author.name} on {frontmatter.datePublished}
            </span>
          </header>
          <main dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      );
    }}
  />
);

ArticleLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleLayout;
