import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

import styles from '../css/layout.module.css';

const Layout = ({ handleSectionClick, children }) => (
  <div className={styles.container}>
    <Header handleSectionClick={handleSectionClick} />
    <main className={styles.main}>
      <div className={styles.inner}>
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
