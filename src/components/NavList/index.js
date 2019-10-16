import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import PartialLink from '../PartialLink';

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    flex-direction: row;

    ${p =>
      p.secondary &&
      css`
        flex-direction: column;
      `};
  }
`;

const NavItem = styled.li`
  @media (min-width: ${p => p.theme.breakpoints.md}) {
    &:last-of-type {
      margin-right: -${p => p.theme.space[4]};
    }
  }
`;

const NavLink = styled(PartialLink)`
  display: block;
  padding: ${p => p.theme.space[4]} ${p => p.theme.space[5]};
  color: ${p => p.theme.colors.text.primary};
  line-height: ${p => p.theme.lineHeights[1]};
  letter-spacing: ${p => p.theme.letterSpacings[0]};
  transition: color 0.2s;
  font-weight: ${p => p.theme.fontWeights.semibold};
  text-decoration: none;
  text-transform: uppercase;

  &:hover,
  &.active {
    color: ${p => p.theme.colors.accent};
  }

  ${p =>
    p.secondary &&
    css`
      padding: ${p => p.theme.space[3]} 0;
      color: ${p => p.theme.colors.white};
      font-size: ${p => p.theme.fontSizes[2]};
    `};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    padding: ${p => p.theme.space[4]};

    ${p =>
      p.secondary &&
      css`
        padding: ${p => p.theme.space[3]} 0;
      `};
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    padding: ${p => p.theme.space[5]} ${p => p.theme.space[4]};
    font-size: ${p => p.theme.fontSizes[2]};

    ${p =>
      p.secondary &&
      css`
        padding: ${p => p.theme.space[3]} 0;
      `};
  }
`;

const NavList = ({ onLinkClick, secondary }) => (
  <StyledNavList secondary={secondary ? 1 : 0}>
    {[
      ['/customer-experience-solutions/', 'Customer Experience Solutions'],
      ['/machine-learning-solutions/', 'Machine Learning Solutions'],
      ['/services/', 'Services'],
      ['/people/', 'People'],
      ['/articles/', 'Articles'],
      ['/contact/', 'Contact Us'],
    ].map(([link, text]) => (
      <NavItem key={link} secondary={secondary ? 1 : 0}>
        <NavLink
          activeClassName="active"
          onClick={e => {
            window.scrollTo(0, 0);
            if (onLinkClick) onLinkClick(e);
          }}
          secondary={secondary ? 1 : 0}
          to={link}
        >
          {text}
        </NavLink>
      </NavItem>
    ))}
  </StyledNavList>
);

NavList.propTypes = {
  onLinkClick: PropTypes.func,
  secondary: PropTypes.bool,
};

NavList.defaultProps = {
  onLinkClick: null,
  secondary: false,
};

export default NavList;
