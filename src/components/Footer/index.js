import Box from '@spraoi/base/Box';
import React from 'react';
import styled from 'styled-components';
import NavList from '../NavList';
import Facebook from '../../images/icons/facebook.svg';
import Instagram from '../../images/icons/instagram.svg';
import LinkedIn from '../../images/icons/linkedin.svg';
import Twitter from '../../images/icons/twitter.svg';

const StyledFooter = styled.footer`
  width: 100%;
  margin-top: ${(p) => p.theme.space[8]};
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.white};
`;

const FooterContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${(p) => p.theme.space[8]} ${(p) => p.theme.space[5]};
  max-width: ${(p) => p.theme.sizes.maxWidths.content};

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    display: flex;
    justify-content: space-between;
    padding: ${(p) => p.theme.space[8]} ${(p) => p.theme.space[6]};
  }

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`;

const SocialSection = styled.div`
  margin-top: ${(p) => p.theme.space[7]};

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    margin-top: 0;
  }

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    margin-left: 25%;
  }
`;

const SocialList = styled.ul`
  display: flex;
`;

const SocialLink = styled.a`
  margin-right: ${(p) => p.theme.space[6]};
`;

const SocialIcon = styled.div`
  width: 2rem;
  height: 2rem;
  fill: ${(p) => p.theme.colors.accent};
`;

const Footer = () => (
  <StyledFooter>
    <FooterContent>
      <nav>
        <NavList secondary />
      </nav>
      <SocialSection>
        <Box as="h2" mb={5}>
          Follow Us
        </Box>
        <SocialList>
          <li>
            <SocialLink href="https://twitter.com/spraoit">
              <SocialIcon alt="Twitter" as={Twitter} />
            </SocialLink>
          </li>
          <li>
            <SocialLink href="https://www.instagram.com/spraoi_tech">
              <SocialIcon alt="Instagram" as={Instagram} />
            </SocialLink>
          </li>
          <li>
            <SocialLink href="https://www.linkedin.com/company/spraoi.ai">
              <SocialIcon alt="LinkedIn" as={LinkedIn} />
            </SocialLink>
          </li>
          <li>
            <SocialLink href="https://www.facebook.com/spraoisoftware">
              <SocialIcon alt="Facebook" as={Facebook} />
            </SocialLink>
          </li>
        </SocialList>
      </SocialSection>
    </FooterContent>
  </StyledFooter>
);

export default Footer;
