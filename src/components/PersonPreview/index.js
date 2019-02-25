import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { Tooltip } from 'react-tippy';
import { StyledImage } from '../Section';
import 'react-tippy/dist/tippy.css';

const StyledPerson = styled(StyledImage)`
  width: 9.2rem;
  height: 9.2rem;
  margin: 0 ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 6.8rem;
    height: 6.8rem;
    margin: 0 ${p => p.theme.space.lg} ${p => p.theme.space.xl};

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
  padding: 0.25rem;
`;

const TooltipH3 = styled.h3`
  margin-bottom: 0.25rem;
  color: inherit;
`;

const TooltipH4 = styled.h4`
  margin-bottom: 0.25rem;
  color: inherit;
`;

const PersonPreview = ({ executive, id, image, name, position }) => (
  <StyledPerson clickable executive={executive}>
    <Link to={`/people/${id}/`}>
      <Tooltip
        distance={-10}
        duration={200}
        html={
          <TooltipHtml>
            <TooltipH3>{name}</TooltipH3>
            <TooltipH4>{position}</TooltipH4>
          </TooltipHtml>
        }
        position="bottom"
        size="big"
        theme="light"
        title={name}
      >
        <Img alt="" fluid={image} />
      </Tooltip>
    </Link>
  </StyledPerson>
);

PersonPreview.propTypes = {
  executive: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default PersonPreview;
