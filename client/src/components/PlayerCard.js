import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './playerCard.css'


function PlayerCard({ full_name, team, pos, games, mpg, ppg, rpg, apg, spg, bpg }) {



    const handleViewMore = () => { }



    const playerCard = (
        <div classname="playerCard">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    <h1>{full_name}</h1>
                </Typography>
                <Typography variant="h5" component="div">
                    <h3>{team} :  {pos}</h3>
                    {/* <h3>{pos}</h3> */}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.primary">
                    <h3> <strong>{games} games  🏀  {mpg} minutes per game</strong></h3>
                </Typography>
                <Typography variant="body2">
                    <ul className="stats">
                        <li>🏀<strong>{ppg}</strong> Points per game</li>
                        <li>🏀<strong>{apg}</strong> Assists per game</li>
                        <li>🏀<strong>{rpg}</strong> Rebounds per game</li>
                        <li>🏀<strong>{spg}</strong> Steals per game</li>
                        <li>🏀<strong>{bpg}</strong> Blocks per game</li>
                    </ul>
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="primary">View More</Button>
            </CardActions>
        </div>
    )

    return (
        <div className="each-card">
            <Card className="cards">
                {playerCard}
            </Card>
        </div>
    )
}

export default PlayerCard
