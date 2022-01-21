import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import './playerCard.css'
import list from '../list.json'
import ButtonGroup from '@mui/material/ButtonGroup';
import CommentForm from './CommentForm'
import ShowComment from './ShowComment';

function PlayerCard({ userRoster, setUserRoster, currentUser, selectedPlayer, clicked, setClicked, comments, setComments }) {
    const [commentActivate, setCommentActivate] = useState(false)

    let player = list.players.find(element => element.name === selectedPlayer.full_name);

    const showComment = () => {
        setCommentActivate(prev => !prev)
    }


    const handleAddToRoster = (e) => {
        e.preventDefault()
        console.log(e.target)
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ player_id: selectedPlayer.id, user_id: currentUser.id }),
        };
        
        fetch("api/create_user_rosters", configObj).then(r => r.json()).then(data => {
            console.log(data)
            setUserRoster([data, ...userRoster])
        })
    }

    const handleCloseCard = () => {
        setClicked(prev => !prev)
    }


    return (
        <div className="each-card">
            {clicked &&

                <Card>
                    <CardMedia
                        component="img"
                        image={player.imgURL}
                        alt={player.name}
                        className="imgURL"
                    />
                    <CardContent className="player-name">
                        <Typography gutterBottom variant="h4" >
                            <strong>{player.name}</strong><br /> College: {player.college}
                        </Typography>

                        <div>
                            <Box>
                                <ul className="more-stats">
                                    <strong>More Stats</strong>
                                    <br />
                                    <br />
                                    <li>Field goal percentage: <strong>{(selectedPlayer.fgp * 100).toFixed(2)}%</strong></li>
                                    <li>3 point percentage: <strong>{(selectedPlayer.threePP * 100).toFixed(2)}%</strong></li>
                                    <li>Free Throw percentage: <strong>{(selectedPlayer.ftp * 100).toFixed(2)}%</strong></li>
                                    <li>Turnovers per game: <strong>{(selectedPlayer.tpg)}</strong></li>
                                    <li>EFG: <strong>{(selectedPlayer.efg * 100).toFixed(2)}%</strong></li>
                                </ul>
                            </Box>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button onClick={handleCloseCard}>close</Button>
                                <Button onClick={showComment}>Comment</Button>
                                <Button onClick={handleAddToRoster}>Add To Roster</Button>
                            </ButtonGroup>
                        </div>
                    </CardContent>
                </Card>
            }
            {
                commentActivate &&
                <div>
                    <ShowComment comments={comments} setComments={setComments} currentUser={currentUser} />
                    <CommentForm player={selectedPlayer} user_id={currentUser.id} setComments={setComments} comments={comments} />
                </div>
            }

        </div>
    )
}

export default PlayerCard
