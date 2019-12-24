import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

import '../css/layout.module.css';

const Layout = ({ handleSectionClick, children }) => (
  <div>
    <Header handleSectionClick={handleSectionClick} />
    <main>
      <div className="inner-container">
        {children}
      </div>
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
