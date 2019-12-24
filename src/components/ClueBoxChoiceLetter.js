import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/clueBoxChoiceLetter.module.css';

const ClueLetter = ({ children, handleChoiceClick }) => {

  return (
    <div className={styles.wrap}>
      <button className={styles.button} type="button" onClick={() => handleChoiceClick({ id: '1' })}>{children}</button>
    </div>
  );
};

ClueLetter.propTypes = {
  children: PropTypes.string,
  handleChoiceClick: PropTypes.func,
};

export default ClueLetter;
