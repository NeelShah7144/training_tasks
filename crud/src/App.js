import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormMain from './components/FormMain';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormMain />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router> 
  );
}

export default App;
