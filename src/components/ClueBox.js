import React from 'react';
import PropTypes from 'prop-types';

import ClueAnswerLetters from './ClueBoxAnswer';
import ClueChoiceLetters from './ClueBoxChoice';

import styles from '../css/clueBox.module.css';

const ClueBox = ({ word, clue }) => {

  return (
    <div className={styles.container}>
      <p>{clue}</p>
      <ClueAnswerLetters word={word} />
      <ClueChoiceLetters word={word} />
    </div>
  );
};

ClueBox.propTypes = {
  word: PropTypes.string,
  clue: PropTypes.string,
};

export default ClueBox;
