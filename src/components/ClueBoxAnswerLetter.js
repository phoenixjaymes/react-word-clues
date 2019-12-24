import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/clueBoxAnswerLetter.module.css';

const ClueBoxAnswerLetter = ({ children, handleAnswerClick }) => {
  if (children !== '') {
    return (
      <div className={styles.wrap}>
        <button className={styles.button} type="button" onClick={() => handleAnswerClick({ id: '2' })}>{children}</button>
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
  handleAnswerClick: PropTypes.func,
};

export default ClueBoxAnswerLetter;
