import React, { useEffect, useState } from 'react'
import "./Get_every_player.css"
import Table from 'react-bootstrap/Table'
import { Player } from '@lottiefiles/react-lottie-player';
import Pagination from 'react-bootstrap/Pagination'


function Get_every_players({ isLoading, setIsLoading, setClicked, setSelectedPlayer, setComments }) {
    const [players, setPlayers] = useState([])
    const [offset, setOffset] = useState(0)

    const limit = 25



    useEffect(() => {
        setIsLoading(prev => !prev)
        console.log(isLoading)
        fetch(`api/players?limit=${limit}&offset=${offset}`).then(r => r.json()).then(data => {
            setPlayers(data)
            setIsLoading(prev => !prev)
            console.log(isLoading)
        })
    }, [offset])

    let items = [];
    for (let i = 1; i <= 24; i++) {
        items.push(
            <button key={i} onClick={(e) => setOffset((i * limit) - 25)}>
                {i}
            </button>,
        );
    }



    const clickedByAssists = () => {
        setIsLoading(prev => !prev)
        console.log(isLoading)
        fetch(`api/by_assists?limit=${limit}&offset=${offset}`).then(r => r.json()).then(data => {
            setPlayers(data)
            setIsLoading(prev => !prev)
        })
    }
    const clickedBySteals = () => {
        setIsLoading(prev => !prev)
        console.log(isLoading)
        fetch(`api/by_steals?limit=${limit}&offset=${offset}`).then(r => r.json()).then(data => {
            setPlayers(data)
            setIsLoading(prev => !prev)
            console.log(isLoading)
        })
    }
    const clickedByRebounds = () => {
        setIsLoading(prev => !prev)
        console.log(isLoading)
        fetch(`api/by_rebounds?limit=${limit}&offset=${offset}`).then(r => r.json()).then(data => {
            setPlayers(data)
            setIsLoading(prev => !prev)
            console.log(isLoading)
        })
    }
    const clickedByBlocks = () => {
        setIsLoading(prev => !prev)
        console.log(isLoading)
        fetch(`api/by_blocks?limit=${limit}&offset=${offset}`).then(r => r.json()).then(data => {
            setPlayers(data)
            setIsLoading(prev => !prev)
        })
    }
    const handleMoreDetails = (e) => {
        setIsLoading(prev => !prev)
        fetch(`api/players/${e}`).then(r => r.json()).then(data => {
            setComments(data.comments)
            setSelectedPlayer(data)
            setClicked(prev => !prev)

            setIsLoading(prev => !prev)
        })
    }

    const topPPGplayers = players.map(player => {
        return (
            <tr>
                <td className="button-div">
                    <button onClick={(e) => handleMoreDetails(player.id)}>More Details</button>
                </td>
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
        <div className="player-table">
            <div className="next-prev-buttons">
                <Pagination size="sm" className="manual-pagination">{items}</Pagination>
            </div>
            {isLoading ? (<Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_oKu1nU.json"
                style={{ height: '1000px', width: '1000px' }}
                speed={.5}
            >
            </Player>) : (
                <Table className="content-table">
                    <thead>
                        <tr>
                            <th id="ball">
                                <Player
                                    autoplay
                                    loop
                                    src="https://assets7.lottiefiles.com/packages/lf20_kfjqfnq9.json"
                                    style={{ height: '100px', width: '100px' }}
                                    speed={1}
                                >
                                </Player>
                            </th>
                            <th><h1>Team</h1></th>
                            <th><h1><strong>Name</strong></h1></th>
                            <th><h3><strong>Position</strong></h3></th>
                            <th><h3><strong>Games Played</strong></h3></th>
                            <th><h3><strong>Minutes per game</strong></h3></th>
                            <th><h3><strong>Points per game</strong></h3></th>
                            <th><h3 onClick={clickedByAssists}><strong>Assists per game</strong></h3></th>
                            <th><h3 onClick={clickedByRebounds}><strong>Rebounds per game</strong></h3></th>
                            <th><h3 onClick={clickedBySteals}><strong>Steals per game</strong></h3></th>
                            <th><h3 onClick={clickedByBlocks}><strong>Blocks per game</strong></h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        {topPPGplayers}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default Get_every_players
