import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SEO from '../SEO';

const ArticleLayout = ({ pageContext }) => (
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
        ({ node }) => node.fields.slug === pageContext.slug
      ).node;

      const author = people.find(({ node }) => node.id === frontmatter.author)
        .node;

      return (
        <article>
          <SEO article={{ ...frontmatter, author: author.name }} />
          <header>
            <h1>{frontmatter.title}</h1>
            <h2>
              Posted by {author.name} on {frontmatter.datePublished}
            </h2>
          </header>
          <main dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      );
    }}
  />
);

export default ArticleLayout;
