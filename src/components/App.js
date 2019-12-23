import React, { useState } from 'react';
import '../css/App.css';

import Home from './Home';
import CluesMain from './CluesMain';

function App() {
  const [section, setSection] = useState('home');

  const handleSectionClick = (sectionName) => {
    setSection(sectionName);
  };

  if (section === 'clues') {
    return (
      <CluesMain
        handleSectionClick={handleSectionClick}
      />
    );
  }

  return (
    <Home
      handleSectionClick={handleSectionClick}
    />
  );
}

export default App;
