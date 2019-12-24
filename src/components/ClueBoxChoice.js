import React from 'react';
import PropTypes from 'prop-types';

import ClueBoxChoiceLetter from './ClueBoxChoiceLetter';

import styles from '../css/clueBoxChoice.module.css';

const ClueBoxChoice = ({ word }) => {
  function shuffle(array) {
    const oldArray = array;
    let tmpArray = [];
    const newArray = [];

    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));

      tmpArray = oldArray.splice(j, 1);
      newArray.push(tmpArray[0]);
    }

    newArray.push(oldArray[0]);
    return newArray;
  }

  let wordArray = Array.from(word);
  wordArray = shuffle(wordArray);
  const letterObjects = wordArray.map((letter, index) => ({ id: index, letter }));

  const choiceLetters = letterObjects.map((letter) => (
    <ClueBoxChoiceLetter key={letter.id}>{letter.letter}</ClueBoxChoiceLetter>
  ));

  return (
    <div className={styles.container}>
      {choiceLetters}
    </div>
  );
};

ClueBoxChoice.propTypes = {
  word: PropTypes.string,
};

export default ClueBoxChoice;
