import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/clueBoxChoiceLetter.module.css';

const ClueLetter = ({ children }) => {

  return (
    <div className={styles.wrap}>
      <span>{children}</span>
    </div>
  );
};

ClueLetter.propTypes = {
  children: PropTypes.string,
};

export default ClueLetter;
