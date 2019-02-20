import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { App } from '@spraoi/base';
import Footer from '../Footer';
import Header from '../Header';
import config from '../../config';
import theme from '../../theme';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

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
    <Wrapper>
      <Header />
      <Content>
        {typeof children === 'function' ? children(rest) : children}
      </Content>
      <Footer />
    </Wrapper>
  </App>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

export default Layout;
