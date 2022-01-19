import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


function ShowComment({ comments, currentUser }) {
    const [users, setUsers] = useState([])
    const [userComment, setUserComment] = useState('')

    let username = users.map((user) => user.get_player_user)
    let name = new Array();

    for (let i = 0; i < username.length; i++) {
        let temp = username[i].split(":")
        temp[i] = name[temp[0]]
        console.log(name)
    }



    let everyComment = comments.map((comment) => {
        return (
            <Card>
                <h1>{username}</h1>
                <Card.Text>{comment.content}</Card.Text>
                <button>Delete</button>
                <button>Update</button>
            </Card>
        )
    })

    useEffect(() => {
        fetch(`api/comments`).then(r => r.json()).then(data => setUsers(data))
    }, [])

    return (
        <div style={{ backgroundColor: 'pink' }}>
            <CardGroup>
                {everyComment}
            </CardGroup>
        </div>
    )
}

export default ShowComment
