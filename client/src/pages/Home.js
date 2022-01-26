import React, { useEffect, useState } from 'react';
import './home.css'
import Card from 'react-bootstrap/Card'

function Home() {
    const [news, setNews] = useState([])

    const fetchNews = () => {
        fetch("https://nba-stories.herokuapp.com/news").then(r => r.json()).then(data => setNews(data))
    }
    const everyNews = news?.map(onenews => {

        return (
            <Card className="news-card">
                <Card.Title className="title-news">
                    {onenews.title}
                </Card.Title>
                <div className="source-btn">
                    <button className="readMore" onClick={() => window.open(onenews.url, "_blank")} variant="primary" style={{ width: "100px" }}>Read More</button>
                    <Card.Footer className="text-muted">Source: <strong classname="strong">{onenews.source}</strong></Card.Footer>
                </div>
            </Card>
        )
    })
    return <div className="home-container">
        <div className="news-container">
            <div className="message">
                <h3 className="intro">The stats on this page is based in <strong classname="strong">October 18, 2021</strong> to <strong classname="strong">January 7, 2022.</strong></h3>
                <p className="inspire">This project is inspired by <strong classname="strong">The Score</strong>. It's an app that shows the user all kinds of sports statistics. </p>
                <p className="explain">Web Basketball Association lets user pick their favorite player and team, look at the stats of all active player of 2021, and look at the achievements of your favorite player.</p>
                <p className="made-with">This app is Made with <strong classname="strong">Ruby on Rails</strong> for the Back-end and <strong classname="strong">React</strong> for the Front-end</p>
            </div>
            <h1 className="header">NBA News</h1>
            <button onClick={fetchNews} className="getNews">get news</button>
            <div className="everyNews">{everyNews}</div>
        </div>
    </div>;
}





export default Home;
