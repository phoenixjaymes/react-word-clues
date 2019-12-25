import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ClueBoxAnswer from './ClueBoxAnswer';
import ClueBoxChoice from './ClueBoxChoice';

import styles from '../css/clueBox.module.css';

const ClueBox = ({ word, clue }) => {
  const answerArray = Array.from(word).map((letter, index) => (
    {
      id: index,
      letter,
      choiceLetter: '',
      choiceId: '',
    }
  ));

  const choiceArray = Array.from(word).map((letter, index) => (
    {
      id: index,
      letter,
      value: '',
      isDisabled: false,
    }
  ));

  const [answerWordArray, setAnswerWordArray] = useState(answerArray);
  const [choiceWordArray, setChoiceWordArray] = useState(choiceArray);

  const handleAnswerClick = (answerObj) => {
    const tempAnswerArray = [];
    const tempChoiceArray = [];

    // Answer word
    for (let i = 0; i < answerWordArray.length; i += 1) {
      if (answerWordArray[i].id === answerObj.positionId) {
        const obj = {
          ...answerWordArray[i],
          choiceLetter: '',
          choiceId: '',
        };

        tempAnswerArray.push(obj);
      } else {
        tempAnswerArray.push(answerWordArray[i]);
      }
    }

    // Choice word
    for (let i = 0; i < choiceWordArray.length; i += 1) {
      if (choiceWordArray[i].id === answerObj.choiceId) {
        const obj = {
          ...choiceWordArray[i],
          isDisabled: false,
        };

        tempChoiceArray.push(obj);
      } else {
        tempChoiceArray.push(choiceWordArray[i]);
      }
    }

    setAnswerWordArray(tempAnswerArray);
    setChoiceWordArray(tempChoiceArray);
  };

  function handleChoiceClick(choiceObj) {
    const tempAnswerArray = [];
    const tempChoiceArray = [];
    let emptyAnswerFound = false;

    // Answer words
    for (let i = 0; i < answerWordArray.length; i += 1) {
      if (answerWordArray[i].choiceLetter === '' && emptyAnswerFound === false) {
        const obj = {
          ...answerWordArray[i],
          choiceLetter: choiceObj.choiceLetter,
          choiceId: choiceObj.choiceId,
        };

        tempAnswerArray.push(obj);
        emptyAnswerFound = true;
      } else {
        tempAnswerArray.push(answerWordArray[i]);
      }
    }

    // Choice words
    for (let i = 0; i < choiceWordArray.length; i += 1) {
      if (choiceWordArray[i].id === choiceObj.choiceId) {
        const obj = {
          ...choiceWordArray[i],
          isDisabled: true,
        };

        tempChoiceArray.push(obj);
      } else {
        tempChoiceArray.push(choiceWordArray[i]);
      }
    }

    setAnswerWordArray(tempAnswerArray);
    setChoiceWordArray(tempChoiceArray);
  }

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
