import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { Squeeze } from 'react-burgers';
import { ReactComponent as Logo } from '../../images/brand/spraoi-logo.svg';
import NavList from '../NavList';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${p => p.theme.maxWidths.content};
  margin: 0 auto;
  padding: ${p => p.theme.space.md};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    padding: ${p => p.theme.space.lg};
  }

  @media (min-width: ${p => p.theme.breakpoints.lg}) {
    padding: ${p => p.theme.space.xl} ${p => p.theme.space.lg};
  }
`;

const StyledLogo = styled(Logo)`
  position: relative;
  bottom: -0.1rem;
  height: 2.5rem;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    height: 2rem;
  }
`;

const NavToggle = styled(Squeeze)`
  &.Burger {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    padding: ${p => p.theme.space.md};
    z-index: 2;

    @media (min-width: ${p => p.theme.breakpoints.sm}) {
      padding: ${p => p.theme.space.lg};
    }

    @media (min-width: ${p => p.theme.breakpoints.md}) {
      display: none;
    }
  }

  .BurgerBox {
    height: 2.5rem;
  }
`;

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
  padding: 5%;
  background-color: ${p => p.theme.colors.primaryBg};
  transition: visibility ${p => p.theme.transitionSpeeds.slow},
    opacity ${p => p.theme.transitionSpeeds.slow},
    transform ${p => p.theme.transitionSpeeds.slow};
  transform: translateX(-2%);
  visibility: hidden;
  opacity: 0;
  z-index: 1;

  ${p =>
    p.mobileNavVisible &&
    css`
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
    `};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: initial;
    display: initial;
    width: auto;
    height: auto;
    padding: 0;
    background-color: initial;
    transform: translateX(0);
    visibility: visible;
    opacity: 1;
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
        color={mobileNavVisible ? '#fff' : '#000'}
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