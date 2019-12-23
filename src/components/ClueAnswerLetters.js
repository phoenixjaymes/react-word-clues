import React from 'react';
import PropTypes from 'prop-types';

import ClueLetter from './ClueLetter';

const CluesAnswerLetters = ({ word }) => {
  const wordArray = Array.from(word);
  const letterObjects = wordArray.map((letter, index) => ({ id: index, letter }));

  const answerLetters = letterObjects.map((letter) => {
    return (
      <ClueLetter key={letter.id}>{letter.letter}</ClueLetter>
    );
  });

  return (
    <div>
      {answerLetters}
    </div>
  );
};

CluesAnswerLetters.propTypes = {
  word: PropTypes.string,
};

export default CluesAnswerLetters;
