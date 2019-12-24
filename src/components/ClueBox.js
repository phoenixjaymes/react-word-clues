import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ClueBoxAnswer from './ClueBoxAnswer';
import ClueBoxChoice from './ClueBoxChoice';

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
      isDisabled: false,
    }
  ));

  const handleAnswerClick = (answerObj) => {

    console.log(answerObj);
  };

  const handleChoiceClick = (choiceObj) => {

    console.log(choiceObj);
  };

  return (
    <div className={styles.container}>
      <h3>{clue}</h3>
      <ClueBoxAnswer answerWordArray={answerWordArray} handleAnswerClick={handleAnswerClick} />
      <ClueBoxChoice choiceWordArray={choiceWordArray} handleChoiceClick={handleChoiceClick} />
    </div>
  );
};

ClueBox.propTypes = {
  word: PropTypes.string,
  clue: PropTypes.string,
};

export default ClueBox;
