import React from 'react';
import PropTypes from 'prop-types';

import ClueLetter from './ClueLetter';

import styles from '../css/cluesChoiceLetters.module.css';

const CluesChoiceLetters = ({ word }) => {
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
    <ClueLetter key={letter.id}>{letter.letter}</ClueLetter>
  ));

  return (
    <div className={styles.container}>
      {choiceLetters}
    </div>
  );
};

CluesChoiceLetters.propTypes = {
  word: PropTypes.string,
};

export default CluesChoiceLetters;
