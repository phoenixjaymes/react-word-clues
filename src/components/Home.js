import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';

const Home = ({ handleSectionClick }) => (
  <Layout handleSectionClick={handleSectionClick}>
    <h1>Home</h1>
  </Layout>
);

Home.propTypes = {
  handleSectionClick: PropTypes.func,
};

export default Home;
