import React, { useState, useEffect } from 'react';
import './App.css';
import LoginFrom from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import { Routes, Route } from "react-router-dom";
import LoggedIn from './pages/LoggedIn';

function App() {
  const [currentUser, setCurrentUser] = useState(null)


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
      {currentUser ? (
        <div>
          <LoggedIn currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>
      ) : (
        <div className="login-page">
          <LoginFrom
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        </div>)}
      <Routes>
        <Route exact path="/signup" element={!currentUser && <SignupForm setCurrentUser={setCurrentUser} />} />
        {/* <Route exact path="/login" element={<LoginFrom
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />} /> */}
      </Routes>
    </div>
  );
}

export default App;
