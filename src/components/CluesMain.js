import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import ClueBoxContainer from './ClueBoxContainer';

const CluesMain = ({ words, handleSectionClick }) => (
  <Layout
    header="Clues Main"
    handleSectionClick={handleSectionClick}
  >
    <ClueBoxContainer words={words} />
  </Layout>
);

CluesMain.propTypes = {
  words: PropTypes.arrayOf(PropTypes.object),
  handleSectionClick: PropTypes.func,
};

export default CluesMain;
