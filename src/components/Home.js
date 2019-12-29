import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';

const Home = ({ handleSectionClick }) => (
  <Layout
    header="Home"
    handleSectionClick={handleSectionClick}
  >
    <p>Stuff</p>
  </Layout>
);

Home.propTypes = {
  handleSectionClick: PropTypes.func,
};

export default Home;
