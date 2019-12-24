import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/clueBoxAnswerLetter.module.css';

const ClueBoxAnswerLetter = ({ letter, handleAnswerClick }) => {
  if (letter.value !== '') {
    return (
      <div className={styles.wrap}>
        <button className={styles.button} type="button" onClick={() => handleAnswerClick({ id: '2' })}>{letter.value}</button>
      </div>
    );
  }
  return (
    <div className={styles.wrap}>
      <span>{letter.value}</span>
    </div>
  );
};

ClueBoxAnswerLetter.propTypes = {
  letter: PropTypes.shape(),
  handleAnswerClick: PropTypes.func,
};

export default ClueBoxAnswerLetter;
