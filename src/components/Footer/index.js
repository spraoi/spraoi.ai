import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  margin-top: ${p => p.theme.space.xxl};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`;

const FooterContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${p => p.theme.space.xxl} ${p => p.theme.space.md};
  max-width: ${p => p.theme.maxWidths.content};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    padding: ${p => p.theme.space.xxl} ${p => p.theme.space.lg};
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Footer = () => (
  <StyledFooter>
    <FooterContent>
      <div>
        <h2>Contact Us</h2>
      </div>
      <div>
        <h2>Follow Us</h2>
      </div>
    </FooterContent>
  </StyledFooter>
);

export default Footer;
