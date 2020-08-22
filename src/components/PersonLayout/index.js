import Box from '@spraoi/base/Box';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import PeopleContainer from '../../containers/PeopleContainer';
import SEO from '../SEO';
import Section from '../Section';
import { newline2Space, possessive } from '../../utilities/helpers';

const PersonLayout = ({ location: { pathname }, pageContext: { slug } }) => (
  <PeopleContainer>
    {(people) => {
      const person = people.find((person) => slug.includes(person.id));
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
          <Section>
            <Img alt="" fluid={person.image} />
            <Box>{name}</Box>
            <Box>{isActive ? person.position : 'Spraoi Alumnus'}</Box>
            {isActive && <p>{newline2Space(person.bio)}</p>}
          </Section>
          {!!person.articles.length && (
            <Section>
              <h2>{possessive(person.givenName)} Articles</h2>
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
