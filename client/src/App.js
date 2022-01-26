import React, { useState, useEffect } from 'react';
import './App.css';
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import { Routes, Route } from "react-router-dom";
import LoggedIn from './pages/LoggedIn';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch("api/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user)
        });
      }
    });
  }, []);


  return (
    <div className="App">
      {currentUser ? (<LoggedIn currentUser={currentUser} setCurrentUser={setCurrentUser} isLoading={isLoading} setIsLoading={setIsLoading} />)
        :
        (<LoginForm setCurrentUser={setCurrentUser} currentUser={currentUser} />
        )}
      <Routes>
        <Route path="/signup" element={!currentUser && <SignupForm setCurrentUser={setCurrentUser} />} />
      </Routes>
    </div>
  );
}

export default App;
