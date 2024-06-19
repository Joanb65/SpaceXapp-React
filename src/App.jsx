import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Rockets from './components/Rockets';
import Error404 from './components/Error404';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rocket/:id" element={<Rockets />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;




