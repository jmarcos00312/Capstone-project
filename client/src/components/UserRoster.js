import React from 'react'
import Table from 'react-bootstrap/Table'


function UserRoster({ userRoster }) {
    const handleDeleteFromRoster = (e) => {
        fetch(`api/create_user_rosters/${e}`, { method: "DELETE" });
    }

    const usersTeam = userRoster.map(element => {
        return (
            <tr>
                <td>{element.player.full_name}</td>
                <td>{element.player.pos}</td>
                <td>{element.player.ppg}</td>
                <td>{element.player.apg}</td>
                <td>{element.player.rpg}</td>
                <td>{element.player.spg}</td>
                <td>{element.player.bpg}</td>
                <button onClick={e => handleDeleteFromRoster(element.id)}>delete</button>
            </tr>
        )
    })
    return (
        <div style={{ color: 'white' }}>
            {usersTeam.length >= 1 ? (
                <div>
                    <h1 style={{ color: 'white' }}>Your Roster</h1>
                    <Table className="content-table">
                        <thead>
                            <tr>
                                <th><h1><strong>Name</strong></h1></th>
                                <th><h3><strong>Position</strong></h3></th>
                                <th><h3><strong>Points per game</strong></h3></th>
                                <th><h3><strong>Assists per game</strong></h3></th>
                                <th><h3><strong>Rebounds per game</strong></h3></th>
                                <th><h3><strong>Steals per game</strong></h3></th>
                                <th><h3><strong>Blocks per game</strong></h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersTeam}
                        </tbody>
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
