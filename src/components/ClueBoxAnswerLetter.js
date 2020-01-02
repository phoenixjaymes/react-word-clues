import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/clueBoxAnswerLetter.module.css';

const ClueBoxAnswerLetter = ({
  letter,
  isCheckingAnswer,
  handleAnswerClick,
  answerIsCorrect,
}) => {
  const answerObj = {
    positionId: letter.id,
    choiceId: letter.choiceId,
    choiceLetter: letter.letter,
  };

  const btnClassName = (isCheckingAnswer && !letter.isCorrect) ? styles.buttonChecking : styles.button;

  if (answerIsCorrect) {
    return (
      <div className={styles.wrap}>
        <button className={styles.button} type="button" disabled>{letter.choiceLetter}</button>
      </div>
    );
  }

  if (letter.choiceLetter !== '') {
    return (
      <div className={styles.wrap}>
        <button className={btnClassName} type="button" onClick={() => handleAnswerClick(answerObj)}>{letter.choiceLetter}</button>
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
  answerIsCorrect: PropTypes.bool,
};

export default ClueBoxAnswerLetter;
