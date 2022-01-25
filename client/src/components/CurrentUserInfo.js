import React, { useState, useEffect } from 'react'
import './currentUserInfo.css'
import Card from 'react-bootstrap/Card'
import list from "../list.json"
import UserRoster from './UserRoster'
import { Player } from '@lottiefiles/react-lottie-player';




function CurrentUserInfo({ isLoading, setIsLoading, currentUser, userRoster, setUserRoster }) {

    const [teamPic, setTeamPic] = useState('')

    useEffect(() => {
        setIsLoading(prev => !prev)
        fetch(`api/get_team_name/${currentUser.favorite_team}`).then(r => r.json().then(data => setTeamPic(data.imageURL)))
        setIsLoading(prev => !prev)
    }, [teamPic])

    const favoritePlayer = list.players.find(element => element.name === currentUser.favorite_player)

    const stats = favoritePlayer.stats.at(-2)
    return (
        <div className="User-info">
            {isLoading ? ((<Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_oKu1nU.json"
                style={{ height: '1000px', width: '1000px' }}
                speed={.5}
            >
            </Player>)) : (
                <Card className="mb-2">
                    <Card.Img variant="top" src={favoritePlayer.imgURL} />
                    <Card.Body className="body-card">
                        <Card.Title> <h1 id="favorite">Favortie Player: {favoritePlayer.name}</h1></Card.Title>
                        <Card.Title> Position: <strong>{favoritePlayer.pos}</strong></Card.Title>
                        <Card.Title>HomeTown: <strong>{favoritePlayer.born.loc}</strong></Card.Title>
                        <div className="career-highs">
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
                </Card>
            )
            }
            <UserRoster userRoster={userRoster} setUserRoster={setUserRoster} currentUser={currentUser} />

        </div >
    )
}

export default CurrentUserInfo
