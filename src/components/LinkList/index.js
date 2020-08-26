import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Avatar from '../Avatar';
import noOrphan from '../../utilities/no-orphan';
import Section from '../Section';

const LinkList = ({ items }) => (
  <Section sx={{ px: [null, null, 7] }}>
    <Box
      as="ul"
      sx={{
        bg: 'white',
        borderRadius: [null, null, 2],
        boxShadow: 1,
        overflow: 'hidden',
      }}
    >
      {items.map((item) => (
        <Box
          key={item.link}
          as="li"
          sx={{
            '&:first-of-type': { borderTopStyle: 'none' },
            borderColor: 'border',
            borderTopStyle: 'solid',
            borderWidth: '1px',
          }}
        >
          <Box
            as={Link}
            sx={{
              '&:hover': { '.title': { color: 'accentDark' }, bg: 'bodyLight' },
              display: 'block',
              p: 6,
              position: 'relative',
              transition: 'background 0.2s',
            }}
            to={item.link}
          >
            <Box
              sx={{
                alignItems: ['flex-start', null, 'center'],
                display: 'flex',
                flexDirection: ['column', null, 'row'],
              }}
            >
              <Avatar image={item.image} size={['2rem', null, null, '3rem']} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: ['column-reverse', null, 'column'],
                  ml: [null, null, 4, 5],
                  mt: [1, null, 0],
                }}
              >
                <Box
                  as="h2"
                  className="title"
                  sx={{
                    fontSize: [2, null, null, 3],
                    lineHeight: 1,
                    maxWidth: 'maxWidths.paragraph',
                    mt: [1, null, null, 0],
                    transition: 'color 0.2s',
                  }}
                >
                  {noOrphan(item.title)}
                </Box>
                <Box
                  sx={{
                    color: 'text.subtle',
                    fontSize: [1, null, null, 2],
                    fontWeight: 'semibold',
                    mt: 2,
                  }}
                >
                  {item.subText}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  </Section>
);

LinkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      floatText: PropTypes.node,
      image: PropTypes.shape({}).isRequired,
      link: PropTypes.string.isRequired,
      subText: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LinkList;
