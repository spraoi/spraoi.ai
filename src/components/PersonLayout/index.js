import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import PeopleContainer from '../../containers/PeopleContainer';
import LinkList from '../LinkList';
import SEO from '../SEO';
import {
  HeroSection,
  Section,
  SectionH1,
  SectionH2,
  SectionParagraph,
  StyledImage,
} from '../Section';
import { newline2Space, possessive } from '../../utilities/helpers';

const PersonImage = styled(StyledImage)`
  flex-shrink: 0;
  margin-top: ${p => p.theme.space[3]};
  margin-bottom: ${p => p.theme.space[5]};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin-right: ${p => p.theme.space[7]};
  }
`;

const Name = styled(SectionH1)`
  margin-top: ${p => p.theme.space[6]};
  margin-bottom: ${p => p.theme.space[3]};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin-top: 0;
  }
`;

const Position = styled.div`
  margin-bottom: ${p => p.theme.space[6]};
  font-family: ${p => p.theme.fonts.secondary};
  font-size: ${p => p.theme.fontSizes[3]};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin-top: -${p => p.theme.space[3]};
  }
`;

const PersonLayout = ({ location: { pathname }, pageContext: { slug } }) => (
  <PeopleContainer>
    {people => {
      const person = people.find(person => slug.includes(person.id));
      const name = `${person.givenName} ${person.familyName}`;
      const isActive = person.active === 'y';

      return (
        <>
          <SEO
            description="Unique, global team of professionals delivering ensuring today&rsquo;s needs become tomorrow&rsquo;s results."
            pathname={pathname}
            person={person}
            title={name}
          />
          <HeroSection top>
            <PersonImage>
              <Img alt="" fluid={person.image} />
            </PersonImage>
            <div>
              <Name data-wrap>{name}</Name>
              <Position>
                {isActive ? person.position : 'Spraoi Alumnus'}
              </Position>
              {isActive && (
                <SectionParagraph>{newline2Space(person.bio)}</SectionParagraph>
              )}
            </div>
          </HeroSection>
          {!!person.articles.length && (
            <Section single>
              <SectionH2>{possessive(person.givenName)} Articles</SectionH2>
              <LinkList
                links={person.articles.map(article => ({
                  link: `/articles${article.fields.slug}`,
                  title: article.frontmatter.title,
                }))}
              />
            </Section>
          )}
        </>
      );
    }}
  </PeopleContainer>
);

PersonLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonLayout;
