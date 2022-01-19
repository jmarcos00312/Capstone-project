import React, { useState } from 'react'
import GetEveryPlayers from '../components/GetEveryPlayers'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import PlayerCard from '../components/PlayerCard';
import UserRoster from '../components/UserRoster';

function Profile({ currentUser }) {
    const [selectedPlayer, setSelectedPlayer] = useState({})
    const [clicked, setClicked] = useState(false)
    const [comments, setComments] = useState([])
    const [userRoster, setUserRoster] = useState(currentUser.create_user_rosters)
    return (
        <div className="profile-container">

            <Navbar />
            {/* {selectedPlayer ? (
                <PlayerCard selectedPlayer={selectedPlayer} />
            ) : (
                <div>
                    <Hero />
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
