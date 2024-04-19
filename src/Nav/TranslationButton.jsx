import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './../Styles/TranslationButton.css';


const ToggleButton = () => {
  const [language, setLanguage] = useState(() => {
    return Cookies.get('language') || 'MYN';
  });

  useEffect(() => {
    Cookies.set('language', language);
    // sessionStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'MYN' ? 'EN' : 'MYN');
    // Cookies.set('language',language)
  };

  return (
    <button onClick={toggleLanguage} className='translateBtn'>
      <span style={{opacity:language==='EN'?1:0.5}}>EN</span>
      <span>|</span>
      <span style={{opacity:language==='MYN'?1:0.5}}>MYN</span>
    </button>
  );
};

export default ToggleButton;