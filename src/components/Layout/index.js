import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { App } from '@spraoi/base';
import Header from '../Header/index';
import config from '../../config';
import theme from '../../theme';

const Content = styled.main`
  margin: 0 auto;
  padding: ${p => p.theme.space.md};
  max-width: ${p => p.theme.maxWidths.content};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    padding: ${p => p.theme.space.lg};
  }
`;

const Layout = ({ children, ...rest }) => (
  <App config={config} theme={theme}>
    <Header />
    <Content>
      {typeof children === 'function' ? children(rest) : children}
    </Content>
  </App>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

export default Layout;
