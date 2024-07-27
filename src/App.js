
// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PredictionComponent from './components/PredictionComponent';
import DownloadComponent from './components/DownloadComponent';
import Mathe from './components/Mathe';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <center>
          <h1>FlaskReact Intelligence</h1>
        </center>
        <div className='container my-3'>
          <div className='row'>
            <Routes>
            <Route path="/" element={<Home/>} />
              <Route path="/prediction" element={<PredictionComponent />} />
              <Route path="/download" element={<DownloadComponent />} />
              <Route path="/mathe" element={<Mathe />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
