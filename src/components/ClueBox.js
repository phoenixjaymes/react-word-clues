import React from 'react';
import PropTypes from 'prop-types';

import ClueAnswerLetters from './ClueAnswerLetters';
import ClueChoiceLetters from './ClueChoiceLetters';

const ClueBox = ({ word, clue }) => {

  return (
    <div style={{ backgroundColor: '#fcf' }}>
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
