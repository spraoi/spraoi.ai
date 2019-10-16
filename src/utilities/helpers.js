import React, { Fragment } from 'react';
import styled from 'styled-components';

const Newline = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[5]};
`;

export const newline2Space = text =>
  text.split('\n').map((item, key) => (
    <Fragment key={key}>
      {item}
      <Newline />
    </Fragment>
  ));

export const possessive = text =>
  text[text.length - 1] === 's' ? `${text}’` : `${text}’s`;
