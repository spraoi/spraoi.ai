import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Tippy from '@tippy.js/react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { StyledImage } from '../Section';
import 'tippy.js/themes/light.css';

const StyledPerson = styled(StyledImage)`
  width: 9.2rem;
  height: 9.2rem;
  margin: 0 ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 6.8rem;
    height: 6.8rem;
    margin: ${p => p.theme.space.xl} ${p => p.theme.space.lg} 0
      ${p => p.theme.space.lg};

    ${p =>
      p.executive &&
      css`
        width: 9.2rem;
        height: 9.2rem;
      `}
  }
`;

const TooltipHtml = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

const PersonPreview = ({ executive, familyName, givenName, id, image }) => (
  <Tippy
    content={
      <TooltipHtml>
        {givenName} {familyName}
      </TooltipHtml>
    }
    distance={-10}
    placement="bottom"
    theme="light"
  >
    <StyledPerson as="h3" clickable executive={executive}>
      <Link to={`/people/${id}/`}>
        <Img alt={`${givenName} ${familyName}`} fluid={image} />
      </Link>
    </StyledPerson>
  </Tippy>
);

PersonPreview.propTypes = {
  executive: PropTypes.number.isRequired,
  familyName: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
};

export default PersonPreview;
