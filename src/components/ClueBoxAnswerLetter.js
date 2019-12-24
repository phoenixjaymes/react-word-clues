import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/clueBoxAnswerLetter.module.css';

const ClueBoxAnswerLetter = ({ children }) => {
  if (children !== '') {
    return (
      <div className={styles.wrap}>
        <button className={styles.button} type="button">{children}</button>
      </div>
    );
  }
  return (
    <div className={styles.wrap}>
      <span>{children}</span>
    </div>
  );
};

ClueBoxAnswerLetter.propTypes = {
  children: PropTypes.string,
};

export default ClueBoxAnswerLetter;
