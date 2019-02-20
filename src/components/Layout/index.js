import React from 'react';

import './Layout.css';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

const Layout = props => (
  <div className="app__container">
    <Header className="app__header" />
    <Content {...props} className="app__content" />
    <Footer className="app__footer" />
  </div>
);

export default Layout;
