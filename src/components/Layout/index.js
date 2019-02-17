import PropTypes from 'prop-types';
import React from 'react';
import { App, Box } from '@spraoi/base';
import Header from '../Header/index';
import config from '../../config';
import theme from '../../theme';

const Layout = ({ children, ...rest }) => (
  <App config={config} theme={theme}>
    <Header />
    <Box maxWidth="content" mx="auto" px="md" py="md">
      {typeof children === 'function' ? children(rest) : children}
    </Box>
  </App>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

export default Layout;
