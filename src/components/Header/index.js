import Box from '@spraoi/base/Box';
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Squeeze } from 'react-burgers';
import Icon from '../Icon';

const Header = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const toggleMobileNav = () => setMobileNavVisible(!mobileNavVisible);
  const onLinkClick = mobileNavVisible ? toggleMobileNav : null;

  return (
    <Box
      as="header"
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: 'maxWidths.content',
        mx: 'auto',
        position: 'relative',
        px: [6, null, 7],
        py: 6,
        width: '100%',
        zIndex: 1,
      }}
    >
      <Link to="/">
        <Icon
          alt="spraoi"
          svg="spraoi-logo"
          sx={{ color: 'text.primary', mt: [2, null, 3], width: '10.25rem' }}
        />
      </Link>
      <Box
        as="nav"
        sx={{
          alignItem: 'center',
          bg: ['white', null, null, 'initial'],
          display: [mobileNavVisible ? 'flex' : 'none', null, null, 'block'],
          height: '100%',
          justifyContent: 'center',
          left: 0,
          position: ['fixed', null, null, 'relative'],
          top: 0,
          width: '100%',
        }}
      >
        <Box
          as="ul"
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: ['column', null, null, 'row'],
            justifyContent: ['center', null, null, 'flex-end'],
            width: ['100%', null, null, 'auto'],
          }}
        >
          {[
            ['/machine-learning-solutions/', 'Machine Learning'],
            ['/customer-experience-solutions/', 'Customer Experience'],
            ['/services/', 'Services'],
            ['/about-us/', 'About Us'],
            ['/perspectives/', 'Perspectives'],
          ].map(([link, text]) => (
            <Box
              key={link}
              as="li"
              sx={{ width: ['100%', null, null, 'auto'] }}
            >
              <Box
                activeClassName="active"
                as={Link}
                onClick={onLinkClick}
                partiallyActive
                sx={{
                  '&.active, &:hover': { color: 'accent' },
                  color: 'text.primary',
                  display: 'block',
                  fontFamily: ['secondary', null, null, 'primary'],
                  fontSize: [4, null, 5, 3],
                  fontWeight: ['bold', null, null, 'semibold'],
                  ml: [null, null, 6],
                  py: [6, null, null, 5],
                  textAlign: 'center',
                }}
                to={link}
              >
                {text}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: ['block', null, null, 'none'], mr: '-20px' }}>
        <Squeeze
          active={mobileNavVisible}
          borderRadius={2}
          color="#000"
          lineHeight={2}
          lineSpacing={8}
          onClick={toggleMobileNav}
          padding="20px"
          width={34}
        />
      </Box>
    </Box>
  );
};

export default Header;
