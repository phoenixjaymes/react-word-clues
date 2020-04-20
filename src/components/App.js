import React, { useState, useEffect } from 'react';
import '../css/App.css';

import Home from './Home';
import CluesMain from './CluesMain';
import CluesMenu from './CluesMenu';

import initialWordsData from '../data/words';

function App() {
  const [wordsData, setWordsData] = useState(initialWordsData);
  const [wordList, setWordList] = useState([]);
  const [section, setSection] = useState('home');

  useEffect(() => {
    fetch('https://phoenixjaymes.com/assets/data/language/clues/')
      .then((reponse) => reponse.json())
      .then((responseData) => {
        // loading: false

        if (responseData.status === 'success') {
          setWordsData(responseData.data);
        }
      })
      .catch((error) => {
        // loading: false
      });
  }, []);


  const getWordList = (menuObj) => {
    const languageObject = wordsData.find((item) => item.language === menuObj.language);
    const categoryObject = languageObject.data.find((item) => item.category === menuObj.category);
    const groupObject = categoryObject.data.find((item) => item.id === menuObj.group);

    setWordList(groupObject.data);
  };

  const handleSectionClick = (sectionName, menuObj = undefined) => {
    if (menuObj !== undefined) {
      getWordList(menuObj);
    }

    setSection(sectionName);
  };

  if (section === 'clues') {
    return (
      <CluesMain
        handleSectionClick={handleSectionClick}
        wordList={wordList}
      />
    );
  }

  if (section === 'menu') {
    return (
      <CluesMenu
        handleSectionClick={handleSectionClick}
        wordsData={wordsData}
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
