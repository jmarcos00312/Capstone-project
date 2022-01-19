import React, { useEffect, useState } from 'react'
import "./Get_every_player.css"
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";





function Get_every_players({ setComments, selectedPlayer, setClicked, setSelectedPlayer }) {
    const [topScorer, setTopScorer] = useState([])
    const [players, setPlayers] = useState([])


    const handleMoreDetails = (e) => {
        fetch(`api/players/${e}`).then(r => r.json()).then(data => {
            setSelectedPlayer(data)
            setComments(data.comments)
            setClicked(true)
        })
        // console.log(selectedPlayer)
    }
    

    useEffect(() => {
        fetch("api/players").then(r => r.json()).then(setTopScorer)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        let team = e.target.value
        fetch(`api/by_team/${team}`).then(r => r.json()).then(setPlayers)
    }

    const topPPGplayers = topScorer.map(player => {
        return (
            <tr>
                <div className="button-div">
                    <Link to="/moreDetails" >
                        <button onClick={(e) => handleMoreDetails(player.id)}>More Details</button>
                    </Link>
                </div>
                <td>{player.team}</td>
                <td>{player.full_name}</td>
                <td>{player.pos}</td>
                <td>{player.games}</td>
                <td>{player.mpg}</td>
                <td>{player.ppg}</td>
                <td>{player.apg}</td>
                <td>{player.rpg}</td>
                <td>{player.spg}</td>
                <td>{player.bpg}</td>
            </tr>
        )
    })

    return (
        <div>
            <Table className="content-table">
                <thead>
                    <tr>
                        <th id="ball">🏀</th>
                        <th><h1>Team</h1></th>
                        <th><h1><strong>Name</strong></h1></th>
                        <th><h3><strong>Position</strong></h3></th>
                        <th><h3><strong>Games Played</strong></h3></th>
                        <th><h3><strong>Minutes per game</strong></h3></th>
                        <th><h3><strong>Points per game</strong></h3></th>
                        <th><h3><strong>Assists per game</strong></h3></th>
                        <th><h3><strong>Rebounds per game</strong></h3></th>
                        <th><h3><strong>Steals per game</strong></h3></th>
                        <th><h3><strong>Blocks per game</strong></h3></th>
                    </tr>
                </thead>
                <tbody>
                    {topPPGplayers}
                </tbody>
            </Table>
            <div className="footer-buttons">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Get_every_players
