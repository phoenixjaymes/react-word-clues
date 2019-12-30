import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import ClueBoxContainer from './ClueBoxContainer';

const CluesMain = ({ wordList, handleSectionClick }) => (
  <Layout
    header="Clues Main"
    handleSectionClick={handleSectionClick}
  >
    <ClueBoxContainer wordList={wordList} />
  </Layout>
);

CluesMain.propTypes = {
  wordList: PropTypes.arrayOf(PropTypes.object),
  handleSectionClick: PropTypes.func,
};

export default CluesMain;
