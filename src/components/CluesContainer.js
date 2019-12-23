import React from 'react';
import PropTypes from 'prop-types';

import ClueBox from './ClueBox';

const CluesContainer = ({ words }) => {
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

CluesContainer.propTypes = {
  words: PropTypes.arrayOf(PropTypes.object),
};

export default CluesContainer;
