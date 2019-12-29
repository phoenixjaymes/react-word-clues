import React from 'react';
import PropTypes from 'prop-types';

import ClueBoxChoiceLetter from './ClueBoxChoiceLetter';

import styles from '../css/clueBoxChoice.module.css';

const ClueBoxChoice = ({ choiceWordArray, handleChoiceClick, answerIsCorrect }) => {
  function shuffle(array) {
    const oldArray = [...array];
    const newArray = [];

    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));

      const tempArray = oldArray.splice(j, 1);
      newArray.push(tempArray[0]);
    }

    newArray.push(oldArray[0]);
    return newArray;
  }

  const wordArray = shuffle(choiceWordArray);

  const choiceLetters = wordArray.map((letter) => (
    <ClueBoxChoiceLetter key={letter.id} letter={letter} handleChoiceClick={handleChoiceClick} />
  ));

  const classNames = !answerIsCorrect ? styles.container : `${styles.container} ${styles.hidden}`;

  return (
    <div className={classNames}>
      {choiceLetters}
    </div>
  );
};

ClueBoxChoice.propTypes = {
  choiceWordArray: PropTypes.arrayOf(PropTypes.object),
  handleChoiceClick: PropTypes.func,
  answerIsCorrect: PropTypes.bool,
};

export default ClueBoxChoice;
