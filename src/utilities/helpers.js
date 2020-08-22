import Box from '@spraoi/base/Box';
import React, { Fragment } from 'react';

export const newline2Space = (text) =>
  text.split('\n').map((item, key) => (
    <Fragment key={key}>
      {item}
      <Box as="span" sx={{ display: 'block', mb: 5 }} />
    </Fragment>
  ));

export const possessive = (text) =>
  text[text.length - 1] === 's' ? `${text}’` : `${text}’s`;
