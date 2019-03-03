import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { ReactComponent as RightArrow } from '../../images/icons/right-arrow.svg';

const BlockList = styled.ul`
  margin: 0 -${p => p.theme.space.md};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: ${p => p.theme.boxShadows.md};
  overflow: hidden;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    margin: 0;
  }
`;

const BlockLink = styled(Link)`
  display: block;
  padding: ${p => p.theme.space.lg} ${p => p.theme.space.md};
  border-top: solid 1px ${p => p.theme.colors.border};
  background-color: ${p => p.theme.colors.white};
  transition: background-color ${p => p.theme.transitionSpeeds.normal};
  font-size: ${p => p.theme.fontSizes.md};
  text-decoration: none;
  text-align: left;

  svg {
    transition: transform ${p => p.theme.transitionSpeeds.normal};
  }

  &:hover {
    background-color: ${p => p.theme.colors.body};

    svg {
      transform: translateX(0.5rem);
    }
  }

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    padding: ${p => p.theme.space.lg};
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const BlockDescription = styled.p`
  max-width: 33rem;
  margin-top: ${p => p.theme.space.xxs};
  color: ${p => p.theme.colors.textPrimary};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.lg};
`;

const BlockH2 = styled.h1`
  margin: 0;
  font-size: ${p => p.theme.fontSizes.md};
  color: ${p => p.theme.colors.textPrimary};
`;

const BlockCta = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${p => p.theme.space.md};
  color: ${p => p.theme.colors.accent};
  white-space: nowrap;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin-top: 0;
    margin-left: ${p => p.theme.space.lg};
  }
`;

const StyledRightArrow = styled(RightArrow)`
  height: 1.4rem;
  margin-left: ${p => p.theme.space.sm};
  fill: ${p => p.theme.colors.accent};
`;

const LinkList = ({ links }) => (
  <BlockList>
    {links.map(({ ctaText, description, link, title }) => (
      <li key={link}>
        <BlockLink to={link}>
          <div>
            <BlockH2>{title}</BlockH2>
            {!!description && (
              <BlockDescription>{description}</BlockDescription>
            )}
          </div>
          <BlockCta>
            {ctaText} <StyledRightArrow alt="" />
          </BlockCta>
        </BlockLink>
      </li>
    ))}
  </BlockList>
);

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      ctaText: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default LinkList;
