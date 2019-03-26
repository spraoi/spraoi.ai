import PropTypes from 'prop-types';
import React from 'react';
import ContactForm from '../../components/ContactForm';
import SEO from '../../components/SEO';
import {
  HeroSection,
  SectionH1,
  SectionBg,
  SectionParagraph,
} from '../../components/Section';
import BgLanding from '../../images/icons/bg-landing.svg';

const Contact = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Want to start a conversation? We would love to hear from you regarding our product offerings and services."
      pathname={pathname}
      title="Contact Us"
    />
    <HeroSection top>
      <div>
        <SectionBg as={BgLanding} left="-31.5rem" top="-30.5rem" />
        <SectionH1>Contact Us</SectionH1>
        <SectionParagraph>
          Whether it&rsquo;s about a business opportunity or a job inquiry,
          we&rsquo;d love to hear&nbsp;from&nbsp;you.
        </SectionParagraph>
      </div>
      <ContactForm />
    </HeroSection>
  </>
);

Contact.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
