import Box from '@spraoi/base/Box';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Tooltip from '@spraoi/base/Tooltip';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { StyledImage } from '../Section';

const StyledPerson = styled(StyledImage)`
  width: 9.2rem;
  height: 9.2rem;

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    width: 6.8rem;
    height: 6.8rem;

    ${(p) =>
      p.executive &&
      css`
        width: 9.2rem;
        height: 9.2rem;
      `}
  }
`;

const PersonPreview = ({ executive, familyName, givenName, id, image }) => (
  <Box mb={{ _: 6, md: 0 }} ml={{ md: 6 }} mr={6} mt={{ md: 7 }}>
    <Tooltip
      data-tip={`${givenName} ${familyName}`}
      id={id}
      tooltipProps={{
        offset: { bottom: '10px' },
        place: 'bottom',
        sx: {
          '&.place-bottom:after': {
            borderBottomColor: (p) => `${p.colors.white}!important`,
          },
          bg: (p) => `${p.colors.white}!important`,
          color: (p) => `${p.colors.accent}!important`,
          fontSize: 3,
          fontWeight: 'bold',
        },
      }}
    >
      <StyledPerson as="h3" clickable executive={executive}>
        <Link to={`/people/${id}/`}>
          <Img alt={`${givenName} ${familyName}`} fluid={image} />
        </Link>
      </StyledPerson>
    </Tooltip>
  </Box>
);

PersonPreview.propTypes = {
  executive: PropTypes.number.isRequired,
  familyName: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
};

export default PersonPreview;
