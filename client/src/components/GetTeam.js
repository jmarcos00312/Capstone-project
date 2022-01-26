import React, { useState } from 'react'
import list from '../list.json'
import './GetTeam.css'
import Table from 'react-bootstrap/Table'
import { Player } from '@lottiefiles/react-lottie-player';


function GetTeam({ setClicked, setSelectedPlayer, setComments, isLoading, setIsLoading }) {
    const [playersOnTeam, setPlayersOnTeam] = useState([])

    const handleClickTeam = (e) => {
        fetch(`api/by_team/${e}`).then(r => r.json().then(data => {
            setPlayersOnTeam(data)
        }))
        console.log(playersOnTeam)
    }
    const handleMoreDetails = (e) => {
        setIsLoading(prev => !prev)
        fetch(`api/players/${e}`).then(r => r.json()).then(data => {
            setComments(data.comments)
            setSelectedPlayer(data)
            setClicked(true)
            setIsLoading(false)
        })


    }
    const everyTeamPlayers = playersOnTeam.map(player => {
        return (
            <tr>
                <td className="button-div">
                    <button onClick={(e) => handleMoreDetails(player.id)}>More Details</button>
                </td>
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


    return (
        <div className="team-image-container">
            <div className="team-image">
                {eachTeams}
                <div className="image-container">
                </div>
                {playersOnTeam.length > 0 &&
                    <Table className="content-table">
                        <thead>
                            <tr>
                                <th id="ball">
                                    <Player
                                        autoplay
                                        loop
                                        src="https://assets7.lottiefiles.com/packages/lf20_kfjqfnq9.json"
                                        style={{ height: '100px', width: '100px' }}
                                        speed={.7}
                                    >
                                    </Player>
                                </th>
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
        </div>
    )
}

export default GetTeam
