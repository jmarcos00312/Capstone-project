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

    const handleTeamsClick = () => {
        setShowPlayersOnTeam(prev => !prev)
    }
    const handlePlayersClick = () => {
        setShowTopPpg(prev => !prev)
    }


    return (
        <div className="profile-container">
            <Navbar />
            <div className="userInfo" style={{ color: 'white' }}>
                <h1 >{currentUser.username}</h1>
                <h3>Favorite Team: {currentUser.favorite_team}</h3>
                <h3>Favorite Player: {currentUser.favorite_player}</h3>
            </div>
            <Hero />
            <div className="team-or-playerBtn">
                <button onClick={handlePlayersClick}>Players</button>
                <button onClick={handleTeamsClick}>Teams</button>
            </div>
            <PlayerCard currentUser={currentUser} selectedPlayer={selectedPlayer} clicked={clicked} setClicked={setClicked} />
            {showPlayersOnTeam && <GetTeam />}
            {showTopPpg && <GetEveryPlayers setComments={setComments} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} setClicked={setClicked} />}
            <UserRoster userRoster={userRoster} />
        </div>
    )
}

export default Profile
