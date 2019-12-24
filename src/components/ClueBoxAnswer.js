import React from 'react';
import PropTypes from 'prop-types';

import ClueBoxAnswerLetter from './ClueBoxAnswerLetter';

import styles from '../css/clueBoxAnswer.module.css';

const ClueBoxAnswer = ({ word }) => {
  const wordArray = Array.from(word);
  const letterObjects = wordArray.map((letter, index) => ({ id: index, letter }));

  const answerLetters = letterObjects.map((letter) => {
    return (
      <ClueBoxAnswerLetter key={letter.id}>{letter.letter}</ClueBoxAnswerLetter>
    );
  });

  return (
    <div className={styles.container}>
      {answerLetters}
    </div>
  );
};

ClueBoxAnswer.propTypes = {
  word: PropTypes.string,
};

export default ClueBoxAnswer;
