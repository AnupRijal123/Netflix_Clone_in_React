import React from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomeScreen />} />

          <Route path="/login" element={<LoginScreen />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
