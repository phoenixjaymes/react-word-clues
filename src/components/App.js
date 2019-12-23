import React, { useState } from 'react';
import '../css/App.css';

import Home from './Home';
import CluesMain from './CluesMain';

import wordsData from '../data/words';

function App() {
  const [words, setWords] = useState(wordsData);
  const [section, setSection] = useState('clues');

  const handleSectionClick = (sectionName) => {
    setSection(sectionName);
  };

  if (section === 'clues') {
    return (
      <CluesMain
        handleSectionClick={handleSectionClick}
        words={words}
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
