import React from 'react';
import './App.scss';
import NavBar from './components/pages/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Page1 from './components/pages/Page1';
import ErrorPage from './components/pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
