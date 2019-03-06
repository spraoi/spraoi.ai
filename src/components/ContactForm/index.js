import React from 'react';
import styled from 'styled-components';
import { Box, Button, Input, TextArea } from '@spraoi/base';
import { FORM_ERROR } from 'final-form';
import { Field, Form as FinalForm } from 'react-final-form';
import { composeValidations, email, required } from '@spraoi/validations';
import { SectionParagraph } from '../Section';

const Form = styled.form`
  flex-shrink: 0;
  margin-top: ${p => p.theme.space.lg};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin-top: 0;
    margin-left: ${p => p.theme.space.xxl};
  }
`;

const InlineInputs = styled.div`
  display: flex;

  & > * {
    margin-top: 0;
    margin-right: ${p => p.theme.space.md};

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const ContactForm = () => (
  <FinalForm
    initialValues={{
      _format: 'plain',
    }}
    onSubmit={async values => {
      try {
        const url = 'https://formspree.io/messages@spraoi.ai';

        const body = {
          ...values,
          _subject: `Spraoi Inquiry From ${values.first_name}`,
        };

        await fetch(url, {
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
        });
      } catch (e) {
        return { [FORM_ERROR]: e.message };
      }
    }}
    render={formContext => (
      <Form onSubmit={formContext.handleSubmit}>
        <InlineInputs>
          <Field
            component={Input}
            disabled={formContext.submitSucceeded}
            label="First Name"
            name="first_name"
            validate={required}
          />
          <Field
            component={Input}
            disabled={formContext.submitSucceeded}
            label="Last Name"
            name="last_name"
            validate={required}
          />
        </InlineInputs>
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
          rows="3"
          validate={required}
        />
        {formContext.submitSucceeded ? (
          <Box as={SectionParagraph} mt="md" textAlign="center">
            Thanks for your interest in Spraoi!
            <br />
            We&rsquo;ll get back to you ASAP.
          </Box>
        ) : (
          <Box
            as={Button}
            disabled={formContext.submitSucceeded}
            mt="lg"
            mx="auto"
            secondary
            submitting={formContext.submitting}
            type="submit"
          >
            Send
          </Box>
        )}
      </Form>
    )}
  />
);

export default ContactForm;
