import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'


function ShowComment({ comments, currentUser }) {
    const [wantToUpdate, setWantToUpdate] = useState(false)
    const [item, setItem] = useState(0)
    const [commentForm, setCommentForm] = useState({
        content: "",
    })

    const clickedUpdate = (comment) => {
        setItem(comment.id)
        setWantToUpdate(true)
    }
    const handleDelete = (comment) => {
        fetch(`api/comments/${comment.id}`, { method: "DELETE" })
    }
    const handleUpdate = () => {
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(commentForm),
        };
        fetch(`api/updateComment/${item}`, configObj).then(r => r.json())
        setWantToUpdate(false)
    }

    const handleChange = (e) => {
        setCommentForm({ ...commentForm, [e.target.name]: e.target.value })
    }

    let everyComment = comments.map((comment) => {
        return (
            <Card>
                <h1>{comment.get_player_user}</h1>
                <Card.Text>{comment.content}</Card.Text>
                {
                    comment.user_id === currentUser.id ? (
                        <div>
                            <button onClick={e => handleDelete(comment)}>Delete</button>
                            <button onClick={e => clickedUpdate(comment)}>Update</button>
                        </div>
                    ) : ""
                }
            </Card>
        )
    })



    return (
        <div style={{ backgroundColor: 'pink' }}>

            {everyComment}

            {wantToUpdate &&
                <form onSubmit={handleUpdate} className="update-book-form">
                    <h3>Update your comment</h3>
                    <input
                        type="text"
                        name="content"
                        onChange={e => handleChange(e)}
                        value={commentForm.content}
                        placeholder="Add Comment here..."
                        className="input-text"
                        required
                    />
                    <input
                        type="submit"
                        name="submit"
                        value="Add New Comment"
                        className="submit"
                    />
                </form>}
        </div>
    )
}

export default ShowComment
