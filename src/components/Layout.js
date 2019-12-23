import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

import '../css/layout.css';

const Layout = ({ handleSectionClick, children }) => (
  <div>
    <Header handleSectionClick={handleSectionClick} />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  handleSectionClick: PropTypes.func,
};

export default Layout;
