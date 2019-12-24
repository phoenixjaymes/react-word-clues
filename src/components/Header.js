import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/header.module.css';

const Header = ({ handleSectionClick }) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <nav>
        <ul className={styles.ul}>
          <li><button className={styles.button} type="button" onClick={() => handleSectionClick('home')}>Home</button></li>
          <li><button className={styles.button} type="button" onClick={() => handleSectionClick('clues')}>Clues</button></li>
          <li><button className={styles.button} type="button">Language</button></li>
        </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  handleSectionClick: PropTypes.func,
};

export default Header;
