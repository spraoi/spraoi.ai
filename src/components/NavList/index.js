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
      margin-right: -${p => p.theme.space.sm};
    }

    ${p =>
      !p.secondary &&
      css`
        &:first-of-type {
          display: none;
        }
      `};
  }
`;

const NavLink = styled(PartialLink)`
  display: block;
  padding: ${p => p.theme.space.sm} ${p => p.theme.space.md};
  color: ${p => p.theme.colors.textPrimary};
  line-height: ${p => p.theme.lineHeights.md};
  letter-spacing: ${p => p.theme.letterSpacings.sm};
  transition: color ${p => p.theme.transitionSpeeds.normal};
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
      padding: ${p => p.theme.space.xs} 0;
      color: ${p => p.theme.colors.white};
      font-size: ${p => p.theme.fontSizes.sm};
    `};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    padding: ${p => p.theme.space.sm};

    ${p =>
      p.secondary &&
      css`
        padding: ${p => p.theme.space.xs} 0;
      `};
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    padding: ${p => p.theme.space.md} ${p => p.theme.space.sm};
    font-size: ${p => p.theme.fontSizes.sm};

    ${p =>
      p.secondary &&
      css`
        padding: ${p => p.theme.space.xs} 0;
      `};
  }
`;

const NavList = ({ onLinkClick, secondary }) => (
  <StyledNavList secondary={secondary ? 1 : 0}>
    {[
      ['/', 'Home'],
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
