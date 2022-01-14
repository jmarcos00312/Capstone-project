import React, { useEffect, useState } from 'react'

function Get_every_players() {
    const [players, setPlayers] = useState([])

    // useEffect(() => {
    // fetch("api/players").then(r => r.json()).then(setPlayers)
    // }, [])
    // const getPlayers = fetch("api/players").then(r => r.json()).then(setPlayers)

    // const handleChange = () => {
    //     fetch("api/by_team/:team").then(r => r.json()).then(setPlayers)
    // }
    const handleSubmit = (e) => {
        e.preventDefault()
        let team = e.target.value
        fetch(`api/by_team/${team}`).then(r => r.json()).then(setPlayers)
    }

    const everyPlayers = players.map(player => <h1>{player.full_name}</h1>)
    return (
        <div>
            {/* <p>{players[0]}</p> */}
            <button onClick={handleSubmit} value="LAL">Lakers</button>
            <button onClick={handleSubmit} value="ATL">Atlanta</button>
            <button onClick={handleSubmit} value="BRK">Brooklyn Nets</button>
            <button onClick={handleSubmit} value="NYK">Knicks</button>
            <button onClick={handleSubmit} value="DAL">Dallas</button>
            {/* <button onClick={handleSubmit} value="LAL">Lakers</button>
            <button onClick={handleSubmit} value="LAL">Lakers</button>
            <button onClick={handleSubmit} value="LAL">Lakers</button>
            <button onClick={handleSubmit} value="LAL">Lakers</button>
            <button onClick={handleSubmit} value="LAL">Lakers</button>
            <button onClick={handleSubmit} value="LAL">Lakers</button>
            <button onClick={handleSubmit} value="LAL">Lakers</button> */}

            {everyPlayers}

        </div>
    )
}

export default Get_every_players
