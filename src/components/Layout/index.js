import AppBase from '@spraoi/base/AppBase';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';
import config from '../../config';
import theme from '../../theme';
import '../../fonts/futura/700.css';
import '../../fonts/raleway/500.css';
import '../../fonts/raleway/600.css';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  overflow-x: hidden;
`;

const Layout = ({ children, ...rest }) => (
  <AppBase config={config} theme={theme}>
    <Wrapper>
      <Header />
      <Content>
        {typeof children === 'function' ? children(rest) : children}
      </Content>
      <Footer />
    </Wrapper>
  </AppBase>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

export default Layout;
