import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/clueBoxAnswerLetter.module.css';

const ClueBoxAnswerLetter = ({ letter, isCheckingAnswer, handleAnswerClick }) => {
  const answerObj = {
    positionId: letter.id,
    choiceId: letter.choiceId,
    choiceLetter: letter.letter,
  };

  const wrapClassName = (isCheckingAnswer && !letter.isCorrect) ? styles.wrapChecking : styles.wrap;

  if (letter.choiceLetter !== '') {
    return (
      <div className={wrapClassName}>
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
  isCheckingAnswer: PropTypes.bool,
  handleAnswerClick: PropTypes.func,
};

export default ClueBoxAnswerLetter;
