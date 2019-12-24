import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/clueBoxAnswerLetter.module.css';

const ClueBoxAnswerLetter = ({ children }) => {

  return (
    <div className={styles.wrap}>
      <span>{children}</span>
    </div>
  );
};

ClueBoxAnswerLetter.propTypes = {
  children: PropTypes.string,
};

export default ClueBoxAnswerLetter;
