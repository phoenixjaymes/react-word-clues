import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/clueBoxChoiceLetter.module.css';

const ClueLetter = ({ children }) => {

  return (
    <div className={styles.wrap}>
      <button className={styles.button} type="button">{children}</button>
    </div>
  );
};

ClueLetter.propTypes = {
  children: PropTypes.string,
};

export default ClueLetter;
