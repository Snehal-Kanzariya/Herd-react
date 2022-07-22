import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Foster from './pages/Foster';
import Home from './pages/Home';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Foster />} />
      </Routes>
    </Router>
  )
}

export default Routing
