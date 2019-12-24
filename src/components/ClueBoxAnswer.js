import React from 'react';
import PropTypes from 'prop-types';

import ClueBoxAnswerLetter from './ClueBoxAnswerLetter';

import styles from '../css/clueBoxAnswer.module.css';

const ClueBoxAnswer = ({ answerWordArray, handleAnswerClick }) => {
  const answerLetters = answerWordArray.map((letter) => (
    <ClueBoxAnswerLetter key={letter.id} letter={letter} handleAnswerClick={handleAnswerClick} />
  ));

  return (
    <div className={styles.container}>
      {answerLetters}
    </div>
  );
};

ClueBoxAnswer.propTypes = {
  answerWordArray: PropTypes.arrayOf(PropTypes.object),
  handleAnswerClick: PropTypes.func,
};

export default ClueBoxAnswer;
