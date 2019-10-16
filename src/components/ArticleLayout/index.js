/* eslint react/no-danger: off */

import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Facebook, Linkedin, Mail, Twitter } from 'react-social-sharing';
import ArticlesContainer from '../../containers/ArticlesContainer';
import MetadataContainer from '../../containers/MetadataContainer';
import SEO from '../SEO';
import { HeroSection, Section, SectionH1, StyledImage } from '../Section';
import 'prism-themes/themes/prism-vs.css';

const Details = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${p => p.theme.space[5]};
  line-height: ${p => p.theme.lineHeights[5]};
`;

const PersonImage = styled(StyledImage)`
  flex-shrink: 0;
  width: 4rem;
  height: 4rem;
  margin-right: ${p => p.theme.space[5]};
`;

const PersonName = styled(Link)`
  color: ${p => p.theme.colors.text.primary};
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.semibold};
  text-decoration: none;
`;

const ArticleSection = styled(Section)`
  letter-spacing: ${p => p.theme.letterSpacings[0]};
  line-height: ${p => p.theme.lineHeights[2]};

  h3,
  p,
  ul,
  blockquote {
    max-width: ${p => p.theme.sizes.maxWidths.paragraph};
  }

  h2 {
    margin-top: ${p => p.theme.space[7]};
    margin-bottom: ${p => p.theme.space[5]};
  }

  h3 {
    margin-top: ${p => p.theme.space[6]};
    margin-bottom: ${p => p.theme.space[1]};
    line-height: ${p => p.theme.lineHeights[1]};
  }

  p {
    margin-bottom: ${p => p.theme.space[6]};
  }

  ul {
    margin-bottom: ${p => p.theme.space[6]};
    margin-left: ${p => p.theme.space[5]};
    list-style: disc outside;

    @media (min-width: ${p => p.theme.breakpoints.sm}) {
      margin-left: ${p => p.theme.space[7]};
    }
  }

  blockquote {
    margin: 0 0 ${p => p.theme.space[6]};
    padding: ${p => p.theme.space[5]};
    border-left: solid ${p => p.theme.space[4]} ${p => p.theme.colors.border};
    background-color: ${p => p.theme.colors.white};

    p {
      margin: 0;
    }

    @media (min-width: ${p => p.theme.breakpoints.sm}) {
      margin: 0 0 ${p => p.theme.space[6]};
      padding: ${p => p.theme.space[5]} ${p => p.theme.space[6]};
    }
  }

  pre {
    border: solid 1px ${p => p.theme.colors.border};
  }

  hr {
    height: 1px;
    max-width: ${p => p.theme.sizes.maxWidths.paragraph};
    margin: 0;
    padding: 0;
    border: 0;
    border-top: 1px solid ${p => p.theme.colors.border};
  }

  .gatsby-resp-image-wrapper {
    margin: 0;
    border-radius: ${p => p.theme.radii[2]};
    overflow: hidden;
  }

  .gatsby-highlight {
    margin-bottom: ${p => p.theme.space[6]};
  }
`;

const ArticleFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${p => p.theme.space[8]};

  a {
    width: 100%;
    margin: ${p => p.theme.space[5]} ${p => p.theme.space[5]} 0 0;

    & > div {
      padding: ${p => p.theme.space[4]} ${p => p.theme.space[5]};
      border-radius: ${p => p.theme.radii[1]};
      box-shadow: ${p => p.theme.shadows[1]};
      transition: background-color 0.2s;
    }

    span {
      margin-left: ${p => p.theme.space[1]};
      font-family: ${p => p.theme.fonts.primary};
      font-size: ${p => p.theme.fontSizes[2]};
      font-weight: ${p => p.theme.fontWeights.semibold};
      letter-spacing: ${p => p.theme.letterSpacings[0]};
      text-transform: uppercase;
    }

    @media (min-width: ${p => p.theme.breakpoints.sm}) {
      width: auto;
    }
  }
`;

const ArticleLayout = ({ location: { pathname }, pageContext: { slug } }) => (
  <MetadataContainer>
    {({ banner, siteUrl }) => (
      <ArticlesContainer>
        {articles => {
          const { author, frontmatter, html } = articles.find(
            article => article.fields.slug === slug
          );

          const shareUrl = `${siteUrl}/articles${slug}`;
          const bannerRegex = /\/static\/[^"]+banner-1200x628\.(png|jpg)/;
          const [articleBanner] = html.match(bannerRegex) || [];

          return (
            <article>
              <SEO
                article={frontmatter}
                banner={articleBanner || banner}
                dateModified={frontmatter.dateModified}
                datePublished={frontmatter.datePublished}
                description={frontmatter.description}
                pathname={pathname}
                person={author}
                title={frontmatter.title}
              />
              <HeroSection single>
                <SectionH1 data-wrap>{frontmatter.title}</SectionH1>
                <Details>
                  <Link to={`/people/${author.id}`}>
                    <PersonImage clickable>
                      <Img alt="" fluid={author.image} />
                    </PersonImage>
                  </Link>
                  <ul>
                    <li>
                      <PersonName to={`/people/${author.id}`}>
                        {author.givenName} {author.familyName}
                      </PersonName>
                    </li>
                    <li>{frontmatter.datePublished}</li>
                  </ul>
                </Details>
              </HeroSection>
              <ArticleSection
                dangerouslySetInnerHTML={{ __html: html }}
                single
              />
              <ArticleFooter>
                <Twitter
                  big
                  link={shareUrl}
                  message={frontmatter.title}
                  solidcircle
                />
                <Facebook
                  big
                  link={shareUrl}
                  message={frontmatter.title}
                  solidcircle
                />
                <Linkedin
                  big
                  link={shareUrl}
                  message={frontmatter.title}
                  solidcircle
                />
                <Mail
                  big
                  link={shareUrl}
                  message={frontmatter.title}
                  solidcircle
                />
              </ArticleFooter>
            </article>
          );
        }}
      </ArticlesContainer>
    )}
  </MetadataContainer>
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
