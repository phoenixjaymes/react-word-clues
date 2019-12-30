import React from 'react';

import styles from '../css/header.module.css';

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <small>{`\u00A9 ${currYear} PhoenixJaymes`}</small>
    </footer>
  );
};

export default Footer;
