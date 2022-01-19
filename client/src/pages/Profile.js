import React, { useState } from 'react'
import GetEveryPlayers from '../components/GetEveryPlayers'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import PlayerCard from '../components/PlayerCard';
import UserRoster from '../components/UserRoster';
import GetTeam from '../components/GetTeam';

function Profile({ currentUser }) {
    const [selectedPlayer, setSelectedPlayer] = useState({})
    const [clicked, setClicked] = useState(false)
    const [comments, setComments] = useState([])
    const [userRoster, setUserRoster] = useState(currentUser.create_user_rosters)
    const [showPlayersOnTeam, setShowPlayersOnTeam] = useState(false)
    const [showTopPpg, setShowTopPpg] = useState(false)
    return (
        <div className="profile-container">
            <Navbar />
            <Hero />
            <GetTeam />
            {/* {selectedPlayer ? (
                <PlayerCard selectedPlayer={selectedPlayer} />
            ) : (
                <div>
                </div>
            ) */}
            <UserRoster userRoster={userRoster} />
            <PlayerCard currentUser={currentUser} selectedPlayer={selectedPlayer} clicked={clicked} setSelectedPlayer={setSelectedPlayer} />
            <GetEveryPlayers setComments={setComments} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} setClicked={setClicked} />
            {/* } */}
        </div>
    )
}

export default Profile
