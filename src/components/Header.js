import React from 'react';
import PropTypes from 'prop-types';

import '../css/header.css';

const Header = ({}) => (
  <header>
    <div className="inner-container">
      <nav>
        <ul>
          <li><button type="button">Home</button></li>
          <li><button type="button">Clues</button></li>
          <li><button type="button">Language</button></li>
        </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {

};

export default Header;
