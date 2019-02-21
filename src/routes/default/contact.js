import PropTypes from 'prop-types';
import React from 'react';
import ContactForm from '../../components/ContactForm';
import SEO from '../../components/SEO';
import {
  HeroSection,
  SectionH1,
  SectionParagraph,
} from '../../components/Section';

const Contact = ({ location: { pathname } }) => (
  <>
    <SEO pathname={pathname} title="Contact Us" />
    <HeroSection>
      <div>
        <SectionH1>Contact Us</SectionH1>
        <SectionParagraph>
          Whether it&rsquo;s about an opportunity or a job inquiry,
          we&rsquo;d&nbsp;love&nbsp;to&nbsp;hear&nbsp;from&nbsp;you.
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
