import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import { darken } from 'polished';
import Avatar from '../Avatar';
import LinkList from '../LinkList';
import SEO from '../SEO';
import Section from '../Section';
import newlineToSpace from '../../utilities/newline-to-space';
import noOrphan from '../../utilities/no-orphan';
import usePeople from '../../effects/use-people';

const PersonLayout = ({ location: { pathname }, pageContext: { slug } }) => {
  const people = usePeople();
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
      <Section sx={{ px: [0, null, 7] }}>
        <Box
          sx={{
            alignItems: isActive ? 'flex-start' : [null, null, null, 'center'],
            bg: darken(0.15, person.colors.darkMuted),
            borderRadius: [null, null, 2],
            display: 'flex',
            flexDirection: ['column-reverse', null, null, 'row'],
            justifyContent: 'space-between',
            px: [6, null, 7, 8],
            py: [7, null, null, 8],
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
              <Box
                as="h1"
                sx={{
                  color: person.colors.lightMuted,
                  fontSize: [4, null, 5, 6],
                  lineHeight: 0,
                  mb: isActive ? 0 : '-0.5rem',
                }}
              >
                {name}
              </Box>
              <Box
                as="h2"
                sx={{
                  color: person.colors.lightMuted,
                  fontSize: 1,
                  letterSpacing: 2,
                  mb: [1, null, null, 4],
                  textTransform: 'uppercase',
                }}
              >
                {isActive ? person.position : 'Spraoi Alumnus'}
              </Box>
            </Box>
            {isActive && (
              <Box
                as="p"
                sx={{
                  color: person.colors.lightMuted,
                  lineHeight: 2,
                  mb: '-1.5rem',
                  mt: 5,
                }}
              >
                {newlineToSpace(noOrphan(person.bio))}
              </Box>
            )}
          </Box>
          <Avatar
            alt={name}
            image={person.image}
            size={['4rem', null, null, isActive ? '9rem' : '7rem']}
            sx={{
              boxShadow: 2,
              mb: [6, null, null, 0],
              ml: [null, null, null, 8],
            }}
          />
        </Box>
      </Section>
      {!!person.articles.length && (
        <Section sx={{ px: [null, null, 7] }}>
          <LinkList
            items={person.articles.map((article) => ({
              image: person.image,
              link: `/perspectives${article.fields.slug}`,
              subText: (
                <>
                  {person.givenName} {person.familyName}
                  <Box as="span" sx={{ mx: 2 }}>
                    &middot;
                  </Box>
                  {article.frontmatter.datePublished}
                </>
              ),
              title: article.frontmatter.title,
            }))}
            titleAs="h3"
          />
        </Section>
      )}
    </>
  );
};

PersonLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonLayout;
