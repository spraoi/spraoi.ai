import React from 'react';
import {
  Section,
  SectionH2,
  SectionParagraph,
  Card,
  CardList,
  Icon,
} from '../boxComponents';
import BarrelLogo from '../images/icons/barrel-logo.svg';
import KcLogo from '../images/icons/kc-logo.svg';
import ServicesLogo from '../images/icons/services.svg';

const SolutionAndServices = () => (
  <>
    <Section center single>
      <SectionH2>Solution & Services</SectionH2>
      <SectionParagraph center>
        We have grown rapidly in since our inception in June 2017, bringing two
        platforms to production to enable carriers to best leverage their
        investments in core administration systems. Our team and intellectual
        property span the major lines of insurance (property/casualty,
        life/annuities and voluntary benefits.
      </SectionParagraph>
      <CardList>
        <Card>
          <Icon
            icon={BarrelLogo}
            id="/machine-learning-solutions/"
            left
            title="OUR INSURANCE MACHINE LEARNING PLATFORM"
          />
        </Card>
        <Card>
          <Icon
            icon={KcLogo}
            id="/customer-experience-solutions/"
            left
            title="OUR CUSTOMER SERVICE INFRASTRUCTURE"
          />
        </Card>
        <Card>
          <Icon
            icon={ServicesLogo}
            id="/services/"
            left
            title="TECHNOLOGY SOLUTIONS AND SERVICES"
          />
        </Card>
      </CardList>
    </Section>
  </>
);

export default SolutionAndServices;
