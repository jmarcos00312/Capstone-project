import React, { useEffect, useState } from 'react'
import "./Get_every_player.css"
import Table from 'react-bootstrap/Table'
import { Player } from '@lottiefiles/react-lottie-player';
import Pagination from 'react-bootstrap/Pagination'


function Get_every_players({ setClicked, setSelectedPlayer, setComments }) {
    const [players, setPlayers] = useState([])
    const [offset, setOffset] = useState(0)
    const limit = 25

    let active = 1
    let items = [];
    for (let i = 1; i <= 24; i++) {
        items.push(
            <Pagination.Item key={i} active={i === active}>
                {i}
            </Pagination.Item>,
        );
    }

    // const active = 1
    // const buttonArray = []
    // const numberOfBtn = 24
    // for (let i = 0; i >= numberOfBtn; i++) {
    //     buttonArray.push(
    //         <Pagination.Item key={i} active={i === active}>
    //             {i}
    //         </Pagination.Item>
    //     )

    // }
    console.log('====================================');
    console.log(items);
    console.log('====================================');
    useEffect(() => {
        fetch(`api/players?limit=${limit}&offset=${offset}`).then(r => r.json()).then(data => {
            setPlayers(data)
        })
    }, [offset])

    const handleNext = () => {
        setOffset(offset + limit)
    }
    const handlePrev = () => {
        setOffset(offset - limit)
    }
    const handleMoreDetails = (e) => {
        fetch(`api/players/${e}`).then(r => r.json()).then(data => {
            setComments(data.comments)
            setSelectedPlayer(data)
            setClicked(true)
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
            <h1 style={{ color: 'white' }}>Players</h1>
            <div className="next-prev-buttons">
                {/* {buttonArray} */}
                <Pagination size="sm" className="manual-pagination">{items}</Pagination>
                {/* <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button> */}
            </div>
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

        </div>
    )
}

export default Get_every_players
