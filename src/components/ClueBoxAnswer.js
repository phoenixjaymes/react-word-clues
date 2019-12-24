import React from 'react';
import PropTypes from 'prop-types';

import ClueBoxAnswerLetter from './ClueBoxAnswerLetter';

import styles from '../css/clueBoxAnswer.module.css';

const ClueBoxAnswer = ({ answerWordArray }) => {
  const answerLetters = answerWordArray.map((letter) => (
    <ClueBoxAnswerLetter key={letter.id}>{letter.value}</ClueBoxAnswerLetter>
  ));

  return (
    <div className={styles.container}>
      {answerLetters}
    </div>
  );
};

ClueBoxAnswer.propTypes = {
  answerWordArray: PropTypes.arrayOf(PropTypes.object),
};

export default ClueBoxAnswer;
