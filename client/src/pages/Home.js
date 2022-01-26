import React, { useEffect, useState } from 'react';
import './home.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Home() {
    const [news, setNews] = useState([])

    const fetchNews = () => {
        fetch("https://nba-stories.herokuapp.com/news").then(r => r.json()).then(data => setNews(data))
    }
    const everyNews = news.map(onenews => {

        return (
            <Card className="news-card">
                <Card.Title className="title-news">
                    {onenews.title}
                </Card.Title>
                <div className="source-btn">
                    <button className="readMore" onClick={() => window.open(onenews.url, "_blank")} variant="primary" style={{ width: "100px" }}>Read More</button>
                    <Card.Footer className="text-muted">Source: <strong>{onenews.source}</strong></Card.Footer>
                </div>
            </Card>
        )
    })
    return <div className="home-container">
        <div className="news-container">
            <h1 className="header">NBA News</h1>
            <button onClick={fetchNews} className="getNews">get news</button>
            <div className="everyNews">{everyNews}</div>
        </div>
    </div>;
}





export default Home;
