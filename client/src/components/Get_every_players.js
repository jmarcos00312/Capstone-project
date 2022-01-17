import React, { useEffect, useState } from 'react'
import "./Get_every_player.css"
import TableComponent from "./TableComponent"

function Get_every_players() {
    const [topScorer, setTopScorer] = useState([])
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch("api/players/?_limit=15").then(r => r.json()).then(setTopScorer)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        let team = e.target.value
        fetch(`api/by_team/${team}`).then(r => r.json()).then(setPlayers)
    }

    // const topPPgplayers 
    const topPPGplayers = topScorer.forEach(player => {
        return (
            <TableComponent player={player} />
        )

    })

    return (
        <div className="team-buttons">
            {console.log(topScorer)}
            <button onClick={handleSubmit} value="LAL">Lakers</button>
            <button onClick={handleSubmit} value="ATL">Atlanta</button>
            <button onClick={handleSubmit} value="BRK">Brooklyn Nets</button>
            <button onClick={handleSubmit} value="NYK">Knicks</button>
            <button onClick={handleSubmit} value="DAL">Dallas</button>
            <button onClick={handleSubmit} value="BOS">Celtics</button>
            <button onClick={handleSubmit} value="CHO">Hornets</button>
            <button onClick={handleSubmit} value="CHI">Bulls</button>
            <button onClick={handleSubmit} value="CLE">Cleaveland</button>
            <button onClick={handleSubmit} value="HOU">HOUSTON</button>
            <button onClick={handleSubmit} value="DET">Pistons</button>
            <button onClick={handleSubmit} value="GSW">Warriors</button>
            {topPPGplayers}

        </div>
    )
}

export default Get_every_players
