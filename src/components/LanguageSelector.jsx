// import { changeLanguage } from 'i18next';
import React from 'react'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  // Add more languages as needed
];

const changeLanguage = () => {};

const LanguageSelector = () => {
  return (
    <div className='btn-container'>
        {languages.map((lang) => {
            return <button key={lang.code} onClick={() => changeLanguage()}>{lang.name}</button>
        })}
    </div>
  )
}

export default LanguageSelector