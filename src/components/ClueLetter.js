import React from 'react';
import PropTypes from 'prop-types';


const ClueBox = ({ children }) => {

  return (
    <p style={{ backgroundColor: '#ddd', display: 'inline-block', width: '50px', height: '50px', margin: '3px' }}>{children}</p>
  );
};

ClueBox.propTypes = {
  children: PropTypes.string,
};

export default ClueBox;
