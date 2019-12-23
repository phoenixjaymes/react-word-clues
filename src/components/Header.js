import React from 'react';
import PropTypes from 'prop-types';

import '../css/header.css';

const Header = ({ handleSectionClick }) => (
  <header>
    <div className="inner-container">
      <nav>
        <ul>
          <li><button type="button" onClick={() => handleSectionClick('home')}>Home</button></li>
          <li><button type="button" onClick={() => handleSectionClick('clues')}>Clues</button></li>
          <li><button type="button">Language</button></li>
        </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  handleSectionClick: PropTypes.func,
};

export default Header;
