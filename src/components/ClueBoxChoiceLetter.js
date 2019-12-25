import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/clueBoxChoiceLetter.module.css';

const ClueLetter = ({ letter, handleChoiceClick }) => {
  const choiceObj = {
    choiceId: letter.id,
    choiceLetter: letter.letter,
  };

  return (
    <div className={styles.wrap}>
      <button
        className={styles.button}
        type="button"
        onClick={() => handleChoiceClick(choiceObj)}
        disabled={letter.isDisabled}
      >
        {letter.letter}
      </button>
    </div>
  );
};

ClueLetter.propTypes = {
  letter: PropTypes.shape(),
  handleChoiceClick: PropTypes.func,
};

export default ClueLetter;
