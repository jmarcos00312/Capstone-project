import React, { useState, useEffect } from 'react'
import './sidebar.css'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import list from '../list.json'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'


function SideBar({ currentUser }) {
    const [favteamPic, setFaveTeamPic] = useState('')
    const [showPlayersOnTeam, setShowPlayersOnTeam] = useState(false)
    const [showTopPpg, setShowTopPpg] = useState(false)
    const [seeAwards, setSeeAwards] = useState(false)

    const favoritePlayer = list.players.find(element => element.name === currentUser.favorite_player)

    const handleAwardClick = () => {
        setSeeAwards(prev => !prev)
    }

    useEffect(() => {
        fetch(`api/get_team_name/${currentUser.favorite_team}`).then(r => r.json()).then(data => setFaveTeamPic(data))
    }, [])
    const handleTeamsClick = () => {
        setShowPlayersOnTeam(prev => !prev)
    }
    const handlePlayersClick = () => {
        setShowTopPpg(prev => !prev)
    }
    const awards = favoritePlayer.awards.map(element => {
        return (
            <ListGroupItem className="every-awards">{element.season} : <strong>{element.type}</strong></ListGroupItem>
        )
    })



    return (

        <div className="sidebar">
            <div className="bg-image"></div>
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
                            <Link to='/players'>
                                <Button variant="contained" onClick={handlePlayersClick}>Players</Button>
                            </Link>
                            <Link to="/teams">
                                <Button variant="contained" onClick={handleTeamsClick}>Teams</Button>
                            </Link>
                            <Link to="/profile">
                                <Button variant="contained">Profile</Button>
                            </Link>
                        </div>
                        <div className="sideBar-awards-btn">
                            <div className="awardAndBtn">
                                <h3 id="awards">Awards</h3>
                                <button onClick={handleAwardClick}>
                                    ⌄
                                </button>
                            </div>
                            {
                                seeAwards &&
                                <ListGroup className="listgroup">
                                    {awards}
                                </ListGroup>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SideBar
