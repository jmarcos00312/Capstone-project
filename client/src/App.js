import React, { useState, useEffect } from 'react';
import './App.css';
import LoginFrom from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import Get_every_players from "./components/Get_every_players"

import LoginPages from "./pages/LoginPages"
function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch("api/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
          // console.log(currentUser);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);
  // console.log(currentUser)


  return (
    <div className="App">
      <h1 className="testing">HELLO</h1>
      {currentUser ? (
        <div>
          <LoginPages />
        </div>
      ) :
        <LoginFrom
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />}
      {/* <LoginFrom setCurrentUser={setCurrentUser} currentUser={currentUser} /> */}
      <SignupForm />
      <Get_every_players />
    </div>
  );
}

export default App;
