import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { ReactComponent as Logo } from '../../images/brand/spraoi-logo.svg';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${p => p.theme.maxWidths.content};
  margin: 0 auto;
  padding: ${p => p.theme.space.md};

  @media (min-width: ${p => p.theme.breakpoints.lg}) {
    padding: ${p => p.theme.space.xl} ${p => p.theme.space.md};
  }
`;

const StyledLogo = styled(Logo)`
  position: relative;
  bottom: -0.3em;
  width: 6.2rem;
`;

const NavList = styled.ul`
  display: flex;
`;

const NavLink = styled(Link)`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: ${p => p.theme.letterSpacings.sm};
  text-decoration: none;
  text-transform: uppercase;

  @media (min-width: ${p => p.theme.breakpoints.lg}) {
    margin-left: ${p => p.theme.space.lg};
  }
`;

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <StyledLogo alt="spraoi" />
    </Link>
    <nav>
      <NavList>
        {[
          ['/cx-solutions', 'Customer Experience Solutions'],
          ['/ml-solutions', 'Machine Learning Solutions'],
          ['/services', 'Services'],
          ['/people', 'People'],
          ['/contact', 'Contact Us'],
        ].map(([link, text]) => (
          <li key={link}>
            <NavLink to={link}>{text}</NavLink>
          </li>
        ))}
      </NavList>
    </nav>
  </StyledHeader>
);

export default Header;
