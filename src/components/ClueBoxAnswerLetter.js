import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/clueBoxAnswerLetter.module.css';

const ClueBoxAnswerLetter = ({ letter, handleAnswerClick }) => {
  const answerObj = {
    positionId: letter.id,
    choiceId: letter.choiceId,
    choiceLetter: letter.letter,
  };

  if (letter.choiceLetter !== '') {
    return (
      <div className={styles.wrap}>
        <button className={styles.button} type="button" onClick={() => handleAnswerClick(answerObj)}>{letter.choiceLetter}</button>
      </div>
    );
  }
  return (
    <div className={styles.wrap}>
      <span>{letter.choiceLetter}</span>
    </div>
  );
};

ClueBoxAnswerLetter.propTypes = {
  letter: PropTypes.shape(),
  handleAnswerClick: PropTypes.func,
};

export default ClueBoxAnswerLetter;
