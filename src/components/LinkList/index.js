import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Avatar from '../Avatar';
import noOrphan from '../../utilities/no-orphan';
import Icon from '../Icon';

const LinkList = ({ items, split, sx, titleAs }) => (
  <Box
    as="ul"
    sx={{
      bg: 'white',
      borderRadius: [null, null, 2],
      boxShadow: [null, null, 1],
      display: split ? [null, null, null, 'flex'] : null,
      flexWrap: 'wrap',
      overflow: 'hidden',
      ...sx,
    }}
  >
    {items.map((item) => (
      <Box
        key={item.link}
        as="li"
        sx={{
          '&:first-of-type': { borderTopStyle: 'none' },
          '&:last-of-type:nth-child(odd)': split
            ? {
                '.item-link': {
                  display: [null, null, null, 'flex'],
                  justifyContent: 'center',
                  width: '100%',
                },
                borderRightStyle: 'none',
                width: '100%',
              }
            : null,
          '&:nth-child(2)': split
            ? { borderTopStyle: [null, null, null, 'none'] }
            : null,
          '&:nth-child(odd)': split
            ? { borderRightStyle: [null, null, null, 'solid'] }
            : null,
          borderColor: 'border',
          borderTopStyle: 'solid',
          borderWidth: '1px',
          width: split ? [null, null, null, '50%'] : null,
        }}
      >
        <Box
          as={Link}
          className="item-link"
          sx={{
            '&:hover': { '.title': { color: 'accentDark' }, bg: 'offWhite' },
            display: 'block',
            p: 6,
            position: 'relative',
            transition: 'background 0.2s',
          }}
          to={item.link}
        >
          <Box
            sx={{
              alignItems: ['flex-start', null, null, 'center'],
              display: 'flex',
              flexDirection: ['column', null, null, 'row'],
            }}
          >
            {item.image && (
              <Avatar
                image={item.image}
                size={['2rem', null, null, '3rem']}
                sx={{ mr: [null, null, null, 5] }}
              />
            )}
            {item.icon && (
              <Icon
                svg={item.icon}
                sx={{ mr: [null, null, null, 6] }}
                width={['3rem', null, null, '4rem']}
              />
            )}
            <Box
              sx={{
                display: 'flex',
                flexDirection: ['column-reverse', null, null, 'column'],
                mt: [1, null, null, 0],
              }}
            >
              <Box
                as={titleAs}
                className="title"
                sx={{
                  color: 'accent',
                  fontSize: 3,
                  lineHeight: 1,
                  mt: [1, null, null, 0],
                  transition: 'color 0.2s',
                }}
              >
                {noOrphan(item.title)}
              </Box>
              <Box
                sx={{
                  color: 'text.subtle',
                  fontSize: 2,
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
);

LinkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      image: PropTypes.shape({}),
      link: PropTypes.string,
      subText: PropTypes.node,
      title: PropTypes.string,
    })
  ).isRequired,
  split: PropTypes.bool,
  sx: PropTypes.shape({}),
  titleAs: PropTypes.node,
};

LinkList.defaultProps = {
  split: false,
  sx: {},
  titleAs: 'div',
};

export default LinkList;
