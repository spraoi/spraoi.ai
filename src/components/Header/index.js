import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { Squeeze } from 'react-burgers';
import Logo from '../../images/icons/spraoi-logo.svg';
import NavList from '../NavList';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: ${(p) => p.theme.space[5]};

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    padding: ${(p) => p.theme.space[6]};

    padding-bottom: 0;
  }

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    margin-bottom: ${(p) => p.theme.space[7]};
    padding-bottom: 0;
  }

  height: 6rem;
  background-color: #f8fbfe;
  z-index: 5;
  position: fixed;
  justify-content: space-around;
  opacity: 0.99;
  padding-top: ${(p) => p.theme.space[5]};
  border-bottom: 4px solid;
  padding-bottom: 0;
`;

const StyledLogo = styled(Logo)`
  position: relative;
  bottom: -0.1rem;
  width: 9rem;
  height: ${9 * 0.3104862332}rem;
`;

const NavToggle = styled(Squeeze)`
  &.Burger {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    padding: ${(p) => p.theme.space[5]};
    z-index: 2;

    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      padding: ${(p) => p.theme.space[6]};
    }

    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      display: none;
    }
  }

  .BurgerBox {
    height: 2.5rem;
  }
`;

const Nav = styled.nav`
  position: fixed;
  display: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(p) => p.theme.colors.body};
  z-index: 1;

  ${(p) =>
    p.mobileNavVisible &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      right: 0;
    `};

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    position: static;
    display: flex;
    background-color: transparent;
  }
`;

Nav.propTypes = {
  mobileNavVisible: PropTypes.bool.isRequired,
};

const Header = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const toggleMobileNav = () => setMobileNavVisible(!mobileNavVisible);
  const onLinkClick = mobileNavVisible ? toggleMobileNav : null;

  return (
    <StyledHeader>
      <Link onClick={onLinkClick} to="/">
        <StyledLogo alt="spraoi" />
      </Link>
      <Nav mobileNavVisible={mobileNavVisible}>
        <NavList onLinkClick={onLinkClick} />
      </Nav>
      <NavToggle
        active={mobileNavVisible}
        borderRadius={2}
        color="#000"
        lineHeight={2}
        lineSpacing={8}
        onClick={toggleMobileNav}
        padding={0}
        width={34}
      />
    </StyledHeader>
  );
};

export default Header;
