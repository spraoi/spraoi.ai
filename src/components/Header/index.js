import React from 'react';
import styled from 'styled-components';
import { Box } from '@spraoi/base';
import { Link } from 'gatsby';
import { ReactComponent as Logo } from '../../images/brand/spraoi-logo.svg';

const StyledLogo = styled(Logo)`
  position: relative;
  bottom: -0.5rem;
  width: 6.2rem;
`;

const Header = () => (
  <Box as="header" maxWidth="content" mx="auto" p="md">
    <Link to="/">
      <StyledLogo alt="spraoi" />
    </Link>
  </Box>
);

export default Header;
