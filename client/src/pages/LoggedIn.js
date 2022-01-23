import React, { useState } from 'react'
import GetEveryPlayers from '../components/GetEveryPlayers'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import PlayerCard from '../components/PlayerCard';
import UserRoster from '../components/UserRoster';
import GetTeam from '../components/GetTeam';
import Button from '@material-ui/core/Button';
import './loggedin.css'
import { Routes, Route } from "react-router-dom";

import CurrentUserInfo from "../components/CurrentUserInfo"
import SideBar from '../components/SideBar'


function LoggedIn({ currentUser, setCurrentUser }) {
    const [selectedPlayer, setSelectedPlayer] = useState({})
    const [clicked, setClicked] = useState(false)
    const [comments, setComments] = useState([])
    const [userRoster, setUserRoster] = useState(currentUser.create_user_rosters)



    return (
        <div className="LoggedIn-container">
            <Navbar setCurrentUser={setCurrentUser} />
            <div className="wholeContainer">
                <div className="sidebar-container">
                    <SideBar currentUser={currentUser} />
                </div>
                <div className="main-container">
                    <CurrentUserInfo currentUser={currentUser} userRoster={userRoster} />
                    <div className="player-details">
                        {selectedPlayer && <PlayerCard setUserRoster={setUserRoster} userRoster={userRoster} currentUser={currentUser} selectedPlayer={selectedPlayer} clicked={clicked} setClicked={setClicked} comments={comments} setComments={setComments} />}
                    </div>
                    <Routes>
                        <Route path="/teams" comments={comments} element={<GetTeam selectedPlayer={selectedPlayer} clicked={clicked} currentUser={currentUser} userRoster={userRoster} setUserRoster={setUserRoster} setComments={setComments} setSelectedPlayer={setSelectedPlayer} setClicked={setClicked} />} />
                        <Route path="/players" element={<GetEveryPlayers setComments={setComments} setSelectedPlayer={setSelectedPlayer} setClicked={setClicked} />} />
                        <Route path="/profile" element={<UserRoster userRoster={userRoster} setUserRoster={setUserRoster} currentUser={currentUser} />} />
                        <Route path="/contact-me" element={<UserRoster userRoster={userRoster} setUserRoster={setUserRoster} currentUser={currentUser} />} />
                        <Route path="/about-me" element={<UserRoster userRoster={userRoster} setUserRoster={setUserRoster} currentUser={currentUser} />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}


export default LoggedIn
