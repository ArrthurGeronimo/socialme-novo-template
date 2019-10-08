import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes'; // where we are going to specify our routes
import './App.css';

export default function AppWeb( ) {
  return (
    <>
      <Router>
        <Routes/>
      </Router>
    </>
  );
}