import React, { useState } from 'react'
import Get_every_players from '../components/Get_every_players'
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
            <PlayerCard setComments={setComments} comments={comments} currentUser={currentUser} selectedPlayer={selectedPlayer} clicked={clicked} setSelectedPlayer={setSelectedPlayer} />
            <Get_every_players setComments={setComments} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} setClicked={setClicked} />
            {/* } */}
        </div>
    )
}

export default Profile
