import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import koln from './cologne-640.jpg';
import styles from '../css/home.module.css';

const Home = ({ handleSectionClick }) => (
  <Layout
    header=""
    handleSectionClick={handleSectionClick}
  >
    <div className={styles.container}>
      <img src={koln} alt="Köln at night" />
      <p>If you aren’t planning a trip anytime soon. You may need to brush up on you German of Dutch vocabulary? Specifcally food, clothing and other basics.</p>
      <p>Then this is the place to do it and have fun in the process. Practice here with this simple word scramble game.</p>
      <p>Simply figure out the clue and unscramble the letters. That's all that you have to do. Simple, easy and a little bit of fun.</p>
    </div>
  </Layout>
);

Home.propTypes = {
  handleSectionClick: PropTypes.func,
};

export default Home;
