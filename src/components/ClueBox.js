import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ClueAnswerLetters from './ClueBoxAnswer';
import ClueChoiceLetters from './ClueBoxChoice';

import styles from '../css/clueBox.module.css';

const ClueBox = ({ word, clue }) => {
  const answerWordArray = Array.from(word).map((letter, index) => (
    {
      id: index,
      letter,
      value: '',
      fromId: '',
    }
  ));

  const choiceWordArray = Array.from(word).map((letter, index) => (
    {
      id: index,
      letter,
      value: '',
      fromId: '',
    }
  ));

  console.log(answerWordArray);

  return (
    <div className={styles.container}>
      <p>{clue}</p>
      <ClueAnswerLetters answerWordArray={answerWordArray} />
      <ClueChoiceLetters choiceWordArray={choiceWordArray} />
    </div>
  );
};

ClueBox.propTypes = {
  word: PropTypes.string,
  clue: PropTypes.string,
};

export default ClueBox;
