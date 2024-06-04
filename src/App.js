import React from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import { useEffect } from 'react';
import { auth } from './firebase.js';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice.js';
import ProfileScreen from './pages/ProfileScreen.js';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));

      } else {
        //not logged in or logged out
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="app">
        {user === null ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
