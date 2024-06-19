import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import RocketDetails from './components/RocketDetails';
import Error404 from './components/Error404';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rocket/:id" element={<RocketDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;




