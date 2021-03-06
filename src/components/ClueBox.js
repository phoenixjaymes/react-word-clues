import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ClueBoxAnswer from './ClueBoxAnswer';
import ClueBoxChoice from './ClueBoxChoice';

import styles from '../css/clueBox.module.css';

const ClueBox = ({ word, clue }) => {
  const lowerCaseWord = word.toLowerCase();
  const answerArray = Array.from(lowerCaseWord).map((letter, index) => (
    {
      id: index,
      letter,
      choiceLetter: '',
      choiceId: '',
      isCorrect: false,
    }
  ));

  const choiceArray = Array.from(lowerCaseWord).map((letter, index) => (
    {
      id: index,
      letter,
      value: '',
      isDisabled: false,
    }
  ));

  const shuffle = (array) => {
    const oldArray = [...array];
    const newArray = [];

    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));

      const tempArray = oldArray.splice(j, 1);
      newArray.push(tempArray[0]);
    }

    newArray.push(oldArray[0]);
    return newArray;
  };

  const [answerWordArray, setAnswerWordArray] = useState(answerArray);
  const [choiceWordArray, setChoiceWordArray] = useState(shuffle(choiceArray));
  const [isCheckingAnswer, setIsCheckingAnswer] = useState(false);
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);

  const checkAnswer = () => {
    let filledLetterCount = 0;
    let numberCorrect = 0;
    const wordLength = answerWordArray.length;

    // loop over answer and check choice letter != '', add to cntr,
    for (let i = 0; i < wordLength; i += 1) {
      if (answerWordArray[i].choiceLetter !== '') {
        filledLetterCount += 1;
      }
    }

    if (filledLetterCount === wordLength) {
      setIsCheckingAnswer(true);

      const tempArray = answerWordArray.map((letter) => {
        if (letter.letter === letter.choiceLetter) {
          numberCorrect += 1;
          return {
            ...letter,
            isCorrect: true,
          };
        }
        return {
          ...letter,
          isCorrect: false,
        };
      });

      if (numberCorrect === wordLength) {
        setAnswerIsCorrect(true);
      }

      setAnswerWordArray(tempArray);
    } else {
      setIsCheckingAnswer(false);
    }
  };

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

  const handleChoiceClick = (choiceObj) => {
    const tempAnswerArray = [];
    const tempChoiceArray = [];
    let emptyAnswerFound = false;

    setIsCheckingAnswer(false);

    // Answer word
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

    // Choice word
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
  };

  const buttonClassName = answerIsCorrect ? styles.buttonCorrect : styles.button;
  const correctBoxClassName = answerIsCorrect ? `${styles.correctBox} ${styles.show}` : styles.correctBox;

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{clue}</h3>
      <ClueBoxAnswer
        answerIsCorrect={answerIsCorrect}
        answerWordArray={answerWordArray}
        isCheckingAnswer={isCheckingAnswer}
        handleAnswerClick={handleAnswerClick}
      />
      <ClueBoxChoice
        answerIsCorrect={answerIsCorrect}
        choiceWordArray={choiceWordArray}
        handleChoiceClick={handleChoiceClick}
      />

      <button className={buttonClassName} type="button" onClick={() => checkAnswer()}>Check</button>

      <div className={correctBoxClassName}>
        <h3>{word.charAt(0).toUpperCase() + word.slice(1)}</h3>
        <p>Your answer is correct</p>
      </div>
    </div>
  );
};

ClueBox.propTypes = {
  word: PropTypes.string,
  clue: PropTypes.string,
};

export default ClueBox;
