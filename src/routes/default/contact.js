import Box from '@spraoi/base/Box';
import Button from '@spraoi/base/Button';
import Input from '@spraoi/base/Input';
import PropTypes from 'prop-types';
import React from 'react';
import TextArea from '@spraoi/base/TextArea';
import { FORM_ERROR } from 'final-form';
import { Field, Form as FinalForm } from 'react-final-form';
import { composeValidations, email, required } from '@spraoi/validations';
import Icon from '../../components/Icon';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import config from '../../config.json';

const Contact = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Want to start a conversation? We would love to hear from you regarding our product offerings and services."
      pathname={pathname}
      title="Let’s Talk"
    />
    <Section
      sx={{
        display: [null, null, null, 'flex'],
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Box as="h1" sx={{ color: 'text.primary' }}>
          Let&rsquo;s Talk
        </Box>
        <Box
          as="p"
          sx={{ fontSize: 4, lineHeight: 1, maxWidth: '30rem', mt: 4 }}
        >
          Whether it&rsquo;s about a business opportunity or a job inquiry,
          we&rsquo;d love to hear&nbsp;from&nbsp;you.
        </Box>
      </Box>
      <FinalForm
        onSubmit={async (values) => {
          try {
            await fetch(config.emailApi, {
              body: JSON.stringify(values),
              headers: { 'Content-Type': 'application/json' },
              method: 'POST',
            });
          } catch (e) {
            return { [FORM_ERROR]: e.message };
          }
        }}
        render={(formContext) => (
          <Box
            as="form"
            onSubmit={formContext.handleSubmit}
            sx={{ mt: [7, null, null, 0] }}
          >
            <Box
              sx={{
                display: 'grid',
                gridGap: 5,
                gridTemplateColumns: '1fr 1fr',
              }}
            >
              <Field
                component={Input}
                disabled={formContext.submitSucceeded}
                label="First Name"
                name="firstName"
                validate={required}
              />
              <Field
                component={Input}
                disabled={formContext.submitSucceeded}
                label="Last Name"
                name="lastName"
                validate={required}
                wrapperSx={{ mt: 0 }}
              />
            </Box>
            <Field
              component={Input}
              disabled={formContext.submitSucceeded}
              label="Email"
              name="email"
              validate={composeValidations(required, email)}
            />
            <Field
              component={TextArea}
              disabled={formContext.submitSucceeded}
              label="Message"
              name="message"
              rows={4}
              validate={required}
            />
            {formContext.submitSucceeded ? (
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 6,
                }}
              >
                <Box
                  as="span"
                  sx={{ fontSize: 4, fontWeight: 'semibold', mr: 6 }}
                >
                  Message sent!
                </Box>
                <Icon svg="mail-sent" sx={{ width: '2.583rem' }} />
              </Box>
            ) : (
              <Button
                secondary
                submitting={formContext.submitting}
                sx={{ mt: 6, width: '100%' }}
                type="submit"
              >
                Send message
              </Button>
            )}
          </Box>
        )}
      />
    </Section>
  </>
);

Contact.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
