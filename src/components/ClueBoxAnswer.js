import React from 'react';
import PropTypes from 'prop-types';

import ClueBoxAnswerLetter from './ClueBoxAnswerLetter';

import styles from '../css/clueBoxAnswer.module.css';

const ClueBoxAnswer = ({ answerWordArray, isCheckingAnswer, handleAnswerClick }) => {
  const answerLetters = answerWordArray.map((letter) => (
    <ClueBoxAnswerLetter
      key={letter.id}
      letter={letter}
      isCheckingAnswer={isCheckingAnswer}
      handleAnswerClick={handleAnswerClick}
    />
  ));

  return (
    <div className={styles.container}>
      {answerLetters}
    </div>
  );
};

ClueBoxAnswer.propTypes = {
  answerWordArray: PropTypes.arrayOf(PropTypes.object),
  isCheckingAnswer: PropTypes.bool,
  handleAnswerClick: PropTypes.func,
};

export default ClueBoxAnswer;
