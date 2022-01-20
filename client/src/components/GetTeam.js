import React, { useState } from 'react'
import list from '../list.json'
import './GetTeam.css'
import Table from 'react-bootstrap/Table'

function GetTeam() {
    const [playersOnTeam, setPlayersOnTeam] = useState([])

    const handleClickTeam = (e) => {
        fetch(`api/by_team/${e}`).then(r => r.json().then(data => setPlayersOnTeam(data)))
    }
    const everyTeamPlayers = playersOnTeam.map(player => {
        return (
            <tr>
                <td>{player.full_name}</td>
                <td>{player.pos}</td>
                <td>{player.mpg}</td>
                <td>{player.ppg}</td>
                <td>{player.apg}</td>
                <td>{player.rpg}</td>
                <td>{player.spg}</td>
                <td>{player.bpg}</td>
            </tr>
        )
    })

    const eachTeams = list.teams.map(element => {
        return (
            <button onClick={e => handleClickTeam(element.abbrev)}>
                <img className="per-team" alt={element.name} src={element.imgURLSmall} />
            </button>
        )
    })

    // const showImages = teams.map


    return (
        <div className="team-image">
            {eachTeams}
            <br />
            <h1 id="ball">🏀</h1>
            {playersOnTeam.length > 0 &&
                <Table className="content-table">
                    <thead>

                        <tr>
                            <th><h1><strong>Name</strong></h1></th>
                            <th><h3><strong>Position</strong></h3></th>
                            <th><h3><strong>Minutes per game</strong></h3></th>
                            <th><h3><strong>Points per game</strong></h3></th>
                            <th><h3><strong>Assists per game</strong></h3></th>
                            <th><h3><strong>Rebounds per game</strong></h3></th>
                            <th><h3><strong>Steals per game</strong></h3></th>
                            <th><h3><strong>Blocks per game</strong></h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        {everyTeamPlayers}
                    </tbody>
                </Table>
            }
        </div>
    )
}

export default GetTeam
