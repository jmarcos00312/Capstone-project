import React, { useState, useEffect } from 'react'
import './currentUserInfo.css'
import Card from 'react-bootstrap/Card'
import list from "../list.json"


function CurrentUserInfo({ currentUser }) {

    const [teamPic, setTeamPic] = useState('')

    useEffect(() => {
        fetch(`api/get_team_name/${currentUser.favorite_team}`).then(r => r.json().then(data => setTeamPic(data.imageURL)))
    }, [teamPic])
    //////////////////

    const favoritePlayer = list.players.find(element => element.name === currentUser.favorite_player)

    const stats = favoritePlayer.stats.at(-2)
    //////////////////////
    return (
        <div className="User-info">
            <Card className="mb-2">
                <Card.Img variant="top" src={favoritePlayer.imgURL} />
                <Card.Body>
                    <Card.Title> <h1 id="favorite">Favortie Player: {favoritePlayer.name}</h1></Card.Title>
                    <Card.Title> Position: <strong>{favoritePlayer.pos}</strong></Card.Title>
                    <Card.Title>HomeTown: <strong>{favoritePlayer.born.loc}</strong></Card.Title>
                    <div>
                        <h2>2021 Career Highs:</h2>
                        <div className="stats-2021">
                            <h4>Points <br /> <strong>{stats.ptsMax[0]}</strong></h4>
                            <h4>Assists <br /><strong>{stats.astMax[0]}</strong></h4>
                            <h4>Rebounds <br /><strong>{stats.drbMax[0]}</strong></h4>
                            <h4>Steals <br /><strong>{stats.stlMax[0]}</strong></h4>
                            <h4>Blocks <br /><strong>{stats.blkMax[0]}</strong></h4>
                        </div>
                    </div>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CurrentUserInfo
