import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import RightArrow from '../../images/icons/right-arrow.svg';

const BlockList = styled.ul`
  margin: 0 -${(p) => p.theme.space[5]};
  border-top: solid 1px ${(p) => p.theme.colors.border};
  border-bottom: solid 1px ${(p) => p.theme.colors.border};
  overflow: hidden;

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    margin: 0;
    border-style: none;
    border-radius: ${(p) => p.theme.radii[2]};
    box-shadow: ${(p) => p.theme.shadows[1]};
  }
`;

const BlockItem = styled.li`
  border-top: solid 1px ${(p) => p.theme.colors.border};

  &:first-of-type {
    border: none;
  }
`;

const BlockLink = styled(Link)`
  display: block;
  padding: ${(p) => p.theme.space[6]} ${(p) => p.theme.space[5]};
  background-color: ${(p) => p.theme.colors.white};
  transition: background-color 0.2s;
  font-size: ${(p) => p.theme.fontSizes[3]};
  text-decoration: none;
  text-align: left;

  svg {
    transition: transform 0.2s;
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.body};

    svg {
      transform: translateX(0.5rem);
    }
  }

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    padding: ${(p) => p.theme.space[6]};
  }

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const BlockTitle = styled.h3`
  margin: 0;
  font-size: ${(p) => p.theme.fontSizes[3]};

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    color: ${(p) => p.theme.colors.text.primary};
  }
`;

const BlockDescription = styled.p`
  max-width: ${(p) => p.theme.sizes.maxWidths.paragraph};
  margin-top: ${(p) => p.theme.space[2]};
  color: ${(p) => p.theme.colors.text.primary};
  font-size: ${(p) => p.theme.fontSizes[2]};
  line-height: ${(p) => p.theme.lineHeights[2]};
`;

const BlockCta = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${(p) => p.theme.space[2]};
  color: ${(p) => p.theme.colors.accent};
  white-space: nowrap;

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    display: flex;
    margin-top: 0;
    margin-left: ${(p) => p.theme.space[6]};
  }
`;

const StyledRightArrow = styled(RightArrow)`
  width: 1.6rem;
  height: 1.6rem;
  margin-left: ${(p) => p.theme.space[4]};
  fill: ${(p) => p.theme.colors.text.primary};
`;

const LinkList = ({ links }) => (
  <BlockList>
    {links.map(({ ctaText, description, link, title }) => (
      <BlockItem key={link}>
        <BlockLink to={link}>
          <div>
            <BlockTitle>{title}</BlockTitle>
            {!!description && (
              <BlockDescription>{description}</BlockDescription>
            )}
          </div>
          <BlockCta>
            {ctaText} <StyledRightArrow alt="" />
          </BlockCta>
        </BlockLink>
      </BlockItem>
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
