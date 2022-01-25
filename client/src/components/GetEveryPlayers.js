import React, { useEffect, useState } from 'react'
import "./Get_every_player.css"
import Table from 'react-bootstrap/Table'
import { Player } from '@lottiefiles/react-lottie-player';
import Pagination from 'react-bootstrap/Pagination'


function Get_every_players({ isLoading, setIsLoading, setClicked, setSelectedPlayer, setComments }) {
    const [players, setPlayers] = useState([])
    const [offset, setOffset] = useState(0)
    const [active, setActive] = useState(1)
    const limit = 25
    useEffect(() => {
        setIsLoading(prev => !prev)
        fetch(`api/players?limit=${limit}&offset=${offset}`).then(r => r.json()).then(data => {
            setPlayers(data)
            setIsLoading(prev => !prev)
        })
    }, [offset])

    const clickedPagination = (i) => {
        setActive(i)
        setOffset((i * limit) - 25)
        console.log(i)

    }
    let items = [];
    for (let i = 1; i <= 24; i++) {
        items.push(
            <Pagination.Item activeLabel="🏀" className="pagi-item" key={i} onClick={(e) => clickedPagination(i)} active={i === active}>
                {i}
            </Pagination.Item>,
        );
    }
    const clickedByPoints = () => {
        setIsLoading(prev => !prev)
        fetch(`api/players?limit=${limit}&offset=${offset}`).then(r => r.json()).then(data => {
            setPlayers(data)
            setIsLoading(prev => !prev)
        })
    }

    const clickedByAssists = () => {
        setIsLoading(prev => !prev)
        fetch(`api/by_assists?limit=${limit}&offset=${offset}`).then(r => r.json()).then(data => {
            setPlayers(data)
            setIsLoading(prev => !prev)
        })
    }
    const clickedBySteals = () => {
        setIsLoading(prev => !prev)
        fetch(`api/by_steals?limit=${limit}&offset=${offset}`).then(r => r.json()).then(data => {
            setPlayers(data)
            setIsLoading(prev => !prev)
        })
    }
    const clickedByRebounds = () => {
        setIsLoading(prev => !prev)
        fetch(`api/by_rebounds?limit=${limit}&offset=${offset}`).then(r => r.json()).then(data => {
            setPlayers(data)
            setIsLoading(prev => !prev)
        })
    }
    const clickedByBlocks = () => {
        setIsLoading(prev => !prev)
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
            setClicked(true)
            setIsLoading(false)
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
                                    speed={.6}
                                >
                                </Player>
                            </th>
                            <th><h1>Team</h1></th>
                            <th><h1><strong>Name</strong></h1></th>
                            <th><h3><strong>Position</strong></h3></th>
                            <th><h3><strong>Games Played</strong></h3></th>
                            <th><h3><strong>Minutes per game</strong></h3></th>
                            <th><h3 onClick={clickedByPoints} className="hoversort"><strong>Points per game</strong></h3></th>
                            <th><h3 onClick={clickedByAssists} className="hoversort"><strong>Assists per game</strong></h3></th>
                            <th><h3 onClick={clickedByRebounds} className="hoversort"><strong>Rebounds per game</strong></h3></th>
                            <th><h3 onClick={clickedBySteals} className="hoversort"><strong>Steals per game</strong></h3></th>
                            <th><h3 onClick={clickedByBlocks} className="hoversort"><strong>Blocks per game</strong></h3></th>

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
