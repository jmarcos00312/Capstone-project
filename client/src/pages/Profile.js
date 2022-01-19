import React, { useState } from 'react'
import GetEveryPlayers from '../components/GetEveryPlayers'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import PlayerCard from '../components/PlayerCard';

function Profile({ currentUser }) {
    const [selectedPlayer, setSelectedPlayer] = useState({})
    const [clicked, setClicked] = useState(false)
    const [comments, setComments] = useState([])

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
            <PlayerCard  currentUser={currentUser} selectedPlayer={selectedPlayer} clicked={clicked} setSelectedPlayer={setSelectedPlayer} />
            <GetEveryPlayers setComments={setComments} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} setClicked={setClicked} />
            {/* } */}
        </div>
    )
}

export default Profile
