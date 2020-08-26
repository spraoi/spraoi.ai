import Box from '@spraoi/base/Box';
import React, { Fragment } from 'react';

const newlineToSpace = (text) =>
  text.split('\n').map((item, key) => (
    <Fragment key={key}>
      {item}
      <Box as="span" sx={{ display: 'block', mb: 5 }} />
    </Fragment>
  ));

export default newlineToSpace;
