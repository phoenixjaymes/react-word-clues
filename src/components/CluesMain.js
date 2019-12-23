import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';

const CluesMain = ({ handleSectionClick }) => (
  <Layout handleSectionClick={handleSectionClick}>
    <h1>Clues main</h1>
    <p>test</p>
  </Layout>
);

CluesMain.propTypes = {
  handleSectionClick: PropTypes.func,
};

export default CluesMain;
