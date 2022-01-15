import React, { useState, useEffect } from 'react';
import './App.css';
import LoginFrom from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import Get_every_players from "./components/Get_every_players"
import NavBar from "./components/NavBar"
import BballPicture from "./components/BballPicture"
import LoginPages from "./pages/LoginPages"
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

      {/* <SignupForm />
        <Get_every_players /> */}
    </div>
  );
}

export default App;
