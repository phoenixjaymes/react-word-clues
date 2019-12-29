import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

import styles from '../css/layout.module.css';

const Layout = ({ header, handleSectionClick, children }) => (
  <div className={styles.container}>
    <Header handleSectionClick={handleSectionClick} />
    <main className={styles.main}>
      <h1 className={styles.header}>{header}</h1>
      <div className={styles.inner}>
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  header: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  handleSectionClick: PropTypes.func,
};

export default Layout;
