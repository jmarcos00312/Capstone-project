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
import { Link } from "react-router-dom"
import CurrentUserInfo from "../components/CurrentUserInfo"



function LoggedIn({ currentUser, setCurrentUser }) {
    const [selectedPlayer, setSelectedPlayer] = useState({})
    const [clicked, setClicked] = useState(false)
    const [comments, setComments] = useState([])
    const [userRoster, setUserRoster] = useState(currentUser.create_user_rosters)
    const [showPlayersOnTeam, setShowPlayersOnTeam] = useState(false)
    const [showTopPpg, setShowTopPpg] = useState(false)


    const handleTeamsClick = () => {
        setShowPlayersOnTeam(prev => !prev)
    }
    const handlePlayersClick = () => {
        setShowTopPpg(prev => !prev)
    }


    return (
        <div className="LoggedIn.js-container">
            <Navbar setCurrentUser={setCurrentUser} />
            <CurrentUserInfo currentUser={currentUser} userRoster={userRoster} />
            <Hero />
            <div className="team-or-playerBtn">
                <Link to='players'>
                    <Button variant="contained" onClick={handlePlayersClick}>Players</Button>
                </Link>
                <Link to="/teams">
                    <Button variant="contained" onClick={handleTeamsClick}>Teams</Button>
                </Link>
                <Link to="/profile">
                    <Button variant="contained">Profile</Button>
                </Link>
                <div className="player-details">
                    {selectedPlayer && <PlayerCard setUserRoster={setUserRoster} userRoster={userRoster} currentUser={currentUser} selectedPlayer={selectedPlayer} clicked={clicked} setClicked={setClicked} comments={comments} setComments={setComments} />}
                </div>
            </div>
            <Routes>
                <Route path="/teams" comments={comments} element={<GetTeam selectedPlayer={selectedPlayer} clicked={clicked} currentUser={currentUser} userRoster={userRoster} setUserRoster={setUserRoster} setComments={setComments} setSelectedPlayer={setSelectedPlayer} setClicked={setClicked} />} />
                <Route path="/players" element={<GetEveryPlayers setComments={setComments} setSelectedPlayer={setSelectedPlayer} setClicked={setClicked} />} />
                <Route path="/profile" element={<UserRoster userRoster={userRoster} setUserRoster={setUserRoster} currentUser={currentUser} />} />
                <Route path="/contact-me" element={<UserRoster userRoster={userRoster} setUserRoster={setUserRoster} currentUser={currentUser} />} />
                <Route path="/about-me" element={<UserRoster userRoster={userRoster} setUserRoster={setUserRoster} currentUser={currentUser} />} />
            </Routes>
        </div>
    )
}


export default LoggedIn
