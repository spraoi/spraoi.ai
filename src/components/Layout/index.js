import AppBase from '@spraoi/base/AppBase';
import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import '../../fonts/futura/700.css';
import '../../fonts/raleway/500.css';
import '../../fonts/raleway/600.css';
import Footer from '../Footer';
import Header from '../Header';
import config from '../../config';
import theme from '../../theme';

const Layout = ({ children, ...rest }) => (
  <AppBase config={config} theme={theme}>
    <Box
      sx={{
        left: 0,
        overflowX: 'hidden',
        position: 'relative',
        top: 0,
        width: '100%',
      }}
    >
      <Header />
      {typeof children === 'function' ? children(rest) : children}
      <Footer />
    </Box>
  </AppBase>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

export default Layout;
