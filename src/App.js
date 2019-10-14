import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes'; // where we are going to specify our routes
import './App.css';

import ThemeContextProvider from './Contexts/ThemeContext';
import LanguageContextProvider from './Contexts/LanguageContext';

import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';
import 'moment/locale/pt-br';
Moment.globalMoment = moment;
Moment.globalLocale = 'pt-br';

export default function AppWeb( ) {
  return (
    <>
      <Router>
        <ThemeContextProvider>
          <LanguageContextProvider>
            <Routes/>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </Router>
    </>
  );
}