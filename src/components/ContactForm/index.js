import Box from '@spraoi/base/Box';
import Button from '@spraoi/base/Button';
import Input from '@spraoi/base/Input';
import React from 'react';
import TextArea from '@spraoi/base/TextArea';
import styled from 'styled-components';
import { FORM_ERROR } from 'final-form';
import { Field, Form as FinalForm } from 'react-final-form';
import { composeValidations, email, required } from '@spraoi/validations';
import { SectionParagraph } from '../Section';
import config from '../../config';

const Form = styled.form`
  flex-shrink: 0;
  margin-top: ${(p) => p.theme.space[6]};

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    margin-top: 0;
    margin-left: ${(p) => p.theme.space[8]};
  }
`;

const InlineInputs = styled.div`
  display: flex;

  & > * {
    width: 100%;
    margin-top: 0;
    margin-right: ${(p) => p.theme.space[5]};

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const ContactForm = () => (
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
      <Form onSubmit={formContext.handleSubmit}>
        <InlineInputs>
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
          rows={4}
          validate={required}
        />
        {formContext.submitSucceeded ? (
          <Box as={SectionParagraph} mt="md" textAlign="center">
            Thanks for your interest in Spraoi!
            <br />
            We&rsquo;ll get back to you ASAP.
          </Box>
        ) : (
          <Button
            disabled={formContext.submitSucceeded}
            mt={6}
            mx="auto"
            secondary
            submitting={formContext.submitting}
            type="submit"
            width={{ md: '12rem', none: '100%' }}
          >
            Send
          </Button>
        )}
      </Form>
    )}
  />
);

export default ContactForm;
