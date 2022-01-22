import React, { useState, useEffect } from 'react'
import './sidebar.css'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';

function SideBar({ currentUser }) {
    const [favteamPic, setFaveTeamPic] = useState('')
    const [showPlayersOnTeam, setShowPlayersOnTeam] = useState(false)
    const [showTopPpg, setShowTopPpg] = useState(false)


    useEffect(() => {
        fetch(`api/get_team_name/${currentUser.favorite_team}`).then(r => r.json()).then(data => setFaveTeamPic(data))
    }, [])
    const handleTeamsClick = () => {
        setShowPlayersOnTeam(prev => !prev)
    }
    const handlePlayersClick = () => {
        setShowTopPpg(prev => !prev)
    }




    return (
        <div className="sidebar">
            <div className="bg-image"></div>
            {/* <img src="https://images.unsplash.com/photo-1570840584974-9078b1d976c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhc2tldGJhbGwlMjBhcmVuYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="basketball" /> */}
            <div className="name-username">
                <div className="sidebar-header">
                    <div className="userContainer">
                        <div className="usernamename">
                            <h3 id="username">@{currentUser.username}</h3>
                            <h2 id="name">{currentUser.first_name} {currentUser.last_name}</h2>
                        </div>
                        <div className="favorite-team-info">
                            <h1>Favorite Team: <br /> {favteamPic.name}</h1>
                            <img src={favteamPic.imageURL} alt={favteamPic.name} />
                        </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
