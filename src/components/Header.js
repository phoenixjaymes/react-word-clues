import React from 'react';
import PropTypes from 'prop-types';

import '../css/header.css';

const Header = ({}) => (
  <header>
    <nav>
      <ul>
        <li><button>Home</button></li>
        <li><button>Clues</button></li>
        <li><button>Language</button></li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {

};

export default Header;
