import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import styles from '../css/clueMenu.module.css';

const CluesMenu = ({ wordsData, handleSectionClick }) => {
  const menu = wordsData.map((language) => (
    <div key={language.id}>
      <h2 className={styles.languageHeader}>
        {language.name.charAt(0).toUpperCase() + language.name.slice(1)}
      </h2>
      {language.data.map((category) => (
        <ul key={category.id}>
          <li className={styles.subMenuWrap}>
            <h3 className={styles.categoryHeader}>
              {category.category.charAt(0).toUpperCase() + category.category.slice(1)}
            </h3>

            <ul className={styles.subMenu}>
              {category.data.map((group) => {
                const menuObj = {
                  language: language.language,
                  category: category.category,
                  group: group.id,
                };

                return (
                  <li key={group.id}>
                    <button
                      className={styles.button}
                      type="button"
                      onClick={() => handleSectionClick('clues', menuObj)}
                    >
                      {group.name}
                    </button>
                  </li>
                );
              })}
            </ul>

          </li>

        </ul>
      ))}
    </div>
  ));

  return (
    <Layout
      header="Clues Menu"
      handleSectionClick={handleSectionClick}
    >
      <nav className={styles.nav}>
        {menu}
      </nav>
    </Layout>
  );
};

CluesMenu.propTypes = {
  wordsData: PropTypes.arrayOf(PropTypes.object),
  handleSectionClick: PropTypes.func,
};

export default CluesMenu;
