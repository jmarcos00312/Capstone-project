import React, { useState, useEffect } from 'react';
import './App.css';
import LoginFrom from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import NavBar from "./components/NavBar"
import LoginPages from "./pages/LoginPages"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {
    fetch("api/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);

          // console.log(currentUser);
        });
      } else {
      }
    });
  }, []);
  // console.log(currentUser)


  return (
    <div className="App">
      {/* <NavBar /> */}
      {currentUser ? (
        <div>
          <LoginPages />
        </div>
      ) : (
        <div className="login-page">
          <LoginFrom
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        </div>)}
      <Routes>
        <Route path="/signup" element={<SignupForm setCurrentUser={setCurrentUser} />} />

      </Routes>

      <SignupForm />

    </div>
  );
}

export default App;
