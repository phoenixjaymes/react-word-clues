import React from 'react';
import PropTypes from 'prop-types';

import ClueBoxChoiceLetter from './ClueBoxChoiceLetter';

import styles from '../css/clueBoxChoice.module.css';

const ClueBoxChoice = ({ choiceWordArray, handleChoiceClick, answerIsCorrect }) => {
  const choiceLetters = choiceWordArray.map((letter) => (
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
