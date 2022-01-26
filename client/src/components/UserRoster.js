import React from 'react'
import Table from 'react-bootstrap/Table'
import './userRoster.css'

function UserRoster({ userRoster, setUserRoster }) {

    const handleDeleteFromRoster = (e) => {
        console.log(e)
        console.log(userRoster)
        fetch(`api/create_user_rosters/${e}`, { method: "DELETE" }).then(() => {
            const filteredPlayers = userRoster.filter(player => player.id !== e);
            setUserRoster(filteredPlayers)
        })
    }


    const usersTeam = userRoster.map(element => {
        return (
            <tr className="row">
                <td>{element.player.full_name}</td>
                <td>{element.player.pos}</td>
                <td>{element.player.ppg}</td>
                <td>{element.player.apg}</td>
                <td>{element.player.rpg}</td>
                <td>{element.player.spg}</td>
                <td>{element.player.bpg}</td>
                <button className="eject-button" onClick={e => handleDeleteFromRoster(element.id)}>EJECT</button>
            </tr>
        )
    })
    return (
        <div style={{ color: 'white', border: "2px solid white" }} className="user-roster-table">
            {usersTeam.length >= 1 ? (
                <div className="user-roster-container">
                    <h1 style={{ color: 'white' }}>Your Roster</h1>
                    <Table className="content-table">
                        <div>
                            <thead>
                                <tr>
                                    <th><h1><strong>Name</strong></h1></th>
                                    <th><h3><strong>Position</strong></h3></th>
                                    <th><h3><strong>Points per game</strong></h3></th>
                                    <th><h3><strong>Assists per game</strong></h3></th>
                                    <th><h3><strong>Rebounds per game</strong></h3></th>
                                    <th><h3><strong>Steals per game</strong></h3></th>
                                    <th><h3><strong>Blocks per game</strong></h3></th>
                                    <th><h3><strong></strong></h3></th>
                                </tr>
                            </thead>
                            <tbody >
                                {usersTeam}
                            </tbody>
                        </div>
                    </Table>
                </div>
            ) : (
                <h1 className="empty-roster">Your roster is empty</h1>
            )
            }
        </div>
    )
}

export default UserRoster
