import React from 'react'
import Card from 'react-bootstrap/Card'


function ShowComment({ comments }) {

    let everyComment = comments.map((comment) => {
        return (
            <Card>
                <h1>{comment.get_player_user}</h1>
                <Card.Text>{comment.content}</Card.Text>
                <button>Delete</button>
                <button>Update</button>
            </Card>
        )
    })



    return (
        <div style={{ backgroundColor: 'pink' }}>

                {everyComment}

        </div>
    )
}

export default ShowComment
