import React from 'react';
import PropTypes from 'prop-types';

import ClueBox from './ClueBox';

const ClueBoxContainer = ({ wordList }) => {
  const words = wordList;

  const clueBoxes = words.map((word) => (
    <ClueBox
      key={word.id}
      word={word.word}
      clue={word.clue}
    />
  ));

  return (
    <div>
      {clueBoxes}
    </div>
  );
};

ClueBoxContainer.propTypes = {
  wordList: PropTypes.arrayOf(PropTypes.object),
};

export default ClueBoxContainer;
