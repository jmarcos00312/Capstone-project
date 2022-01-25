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
            setUserRoster([data, ...userRoster])
        })
    }

    const handleCloseCard = () => {
        setClicked(prev => !prev)
        setCommentActivate(false)
    }


    return (
        <div className="each-card">
            {clicked &&
                <Card className="the-card-it-self">
                    <CardMedia
                        component="img"
                        image={player ? (player.imgURL) : ""}
                        alt={player ? (player.name) : ""}
                        className="imgURL"
                    />
                    <div className="card-content">
                        <CardContent className="player-name">
                            <div className="name-college">
                                <Typography gutterBottom variant="h2" >
                                    <strong>{player && (player.name)}</strong><br /> College: <strong>{player && player.college}</strong>
                                </Typography>
                            </div>
                            <div>
                                <Box>
                                    <ul className="more-stats">
                                        <strong>More Stats</strong>
                                        <br />
                                        <li>Field goal percentage: <strong>{(selectedPlayer.fgp * 100).toFixed(2)}%</strong></li>
                                        <li>3 point percentage: <strong>{(selectedPlayer.threePP * 100).toFixed(2)}%</strong></li>
                                        <li>Free Throw percentage: <strong>{(selectedPlayer.ftp * 100).toFixed(2)}%</strong></li>
                                        <li>Turnovers per game: <strong>{(selectedPlayer.tpg)}</strong></li>
                                        <li>EFG: <strong>{(selectedPlayer.efg * 100).toFixed(2)}%</strong></li>
                                    </ul>
                                </Box>
                                <div className="button-group">
                                    <ButtonGroup aria-label="outlined primary button group">
                                        <Button style={{
                                            border: "1px solid white",
                                            backgroundColor: "red",
                                            color: "white"
                                        }}
                                            onClick={handleCloseCard}
                                            className="card-close-btn">close</Button>
                                        <Button style={{
                                            border: "1px solid white",
                                            backgroundColor: "#1D9BF0",
                                            color: "white"
                                        }} onClick={showComment} className="card-comment-btn">Comment</Button>
                                        <Button style={{
                                            border: "1px solid white",
                                            backgroundColor: "#38b000",
                                            color: "white"
                                        }} onClick={handleAddToRoster} className="card-add-btn">Add To Roster</Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </CardContent>
                    </div>
                </Card>
            }
            {
                commentActivate &&
                <div className="comments-to-separate">
                    <div className="whole-comments">
                        <div className="comment-section">
                            <ShowComment comments={comments} setComments={setComments} currentUser={currentUser} />
                        </div>
                        <div className="comment-form">
                            <CommentForm player={selectedPlayer} user_id={currentUser.id} setComments={setComments} comments={comments} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PlayerCard
