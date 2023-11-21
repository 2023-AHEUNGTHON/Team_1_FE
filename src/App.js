import React from 'react';
import Navigation from './components/nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Solution from './components/solution';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/solution" element={<Solution />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
