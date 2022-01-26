import React, { useState } from 'react'
import GetEveryPlayers from '../components/GetEveryPlayers'
import Navbar from '../components/NavBar'
import PlayerCard from '../components/PlayerCard';
import UserRoster from '../components/UserRoster';
import GetTeam from '../components/GetTeam';
import './loggedin.css'
import { Routes, Route } from "react-router-dom";
import CurrentUserInfo from "../components/CurrentUserInfo"
import SideBar from '../components/SideBar'
import Home from './Home';
import About from './About';
import Contact from './Contact'
import UserProfile from './UserProfile'








function LoggedIn({ currentUser, setCurrentUser, isLoading, setIsLoading }) {
    const [selectedPlayer, setSelectedPlayer] = useState({})
    const [clicked, setClicked] = useState(false)
    const [comments, setComments] = useState([])
    const [userRoster, setUserRoster] = useState(currentUser.create_user_rosters)



    return (
        <div className="wholeContainer">
            <Navbar setCurrentUser={setCurrentUser} />
            <div className="sidebar-container">
                <SideBar currentUser={currentUser} />
            </div>
            <div className="main-container">
                {selectedPlayer &&
                    <div className="player-details">
                        <PlayerCard
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            setUserRoster={setUserRoster}
                            userRoster={userRoster}
                            currentUser={currentUser}
                            selectedPlayer={selectedPlayer}
                            clicked={clicked}
                            setClicked={setClicked}
                            comments={comments}
                            setComments={setComments}
                        />
                    </div>

                }
                <Routes>
                    <Route path="/news" element={<Home />} />
                    <Route path="/teams" element={<GetTeam comments={comments} isLoading={isLoading} setIsLoading={setIsLoading} selectedPlayer={selectedPlayer} clicked={clicked} currentUser={currentUser} userRoster={userRoster} setUserRoster={setUserRoster} setComments={setComments} setSelectedPlayer={setSelectedPlayer} setClicked={setClicked} />} />
                    <Route path="/players" element={<GetEveryPlayers isLoading={isLoading} setIsLoading={setIsLoading} setComments={setComments} setSelectedPlayer={setSelectedPlayer} setClicked={setClicked} />} />
                    <Route path="/profile" element={<CurrentUserInfo isLoading={isLoading} setIsLoading={setIsLoading} currentUser={currentUser} userRoster={userRoster} setUserRoster={setUserRoster} />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    )
}

export default LoggedIn
