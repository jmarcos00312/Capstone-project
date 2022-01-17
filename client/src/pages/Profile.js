import React from 'react'
import Get_every_players from '../components/Get_every_players'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'


function Profile() {
    return (
        <div className="profile-container">
            <Navbar />
            <Hero />
            <Get_every_players />
        </div>
    )
}

export default Profile
