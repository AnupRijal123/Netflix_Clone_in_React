import React from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import { useEffect } from 'react';
import { auth } from './firebase.js';


function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        //logged in
        console.log(user)
      } else {
        //not logged in
      }
    })
    return unsubscribe;
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        {user === null ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
