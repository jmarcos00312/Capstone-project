import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import './showComment.css'


function ShowComment({ comments, currentUser, setComments }) {
    const [wantToUpdate, setWantToUpdate] = useState(false)
    const [commentToUpdate, setCommentToUpdate] = useState([])
    const [item, setItem] = useState(0)
    const [commentForm, setCommentForm] = useState({
        content: "",
    })
    // console.log(comments)

    const clickedUpdate = (comment) => {
        setItem(comment.id)
        setCommentToUpdate(comment)
        setWantToUpdate(true)
    }
    console.log(commentToUpdate)

    const handleDelete = (comment) => {
        fetch(`api/comments/${comment.id}`, { method: "DELETE" }).then(() => {
            const filteredPlayers = comments.filter(player => player.id !== comment.id);
            setComments(filteredPlayers)
        })
    }
    const handleUpdate = (e) => {
        e.preventDefault()
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...commentForm, player_id: item, user_id: currentUser.id }),
        };
        fetch(`api/updateComment/${commentToUpdate.id}`, configObj).then(r => r.json()).then(data => {
            console.log(commentToUpdate, data)
            const tempComments = comments.map(comment => {
                if (comment.id === data.id) {
                    return data
                } else {
                    return comment
                }
            })
            setComments(tempComments)
            setCommentForm({
                content: "",
            })
        })
    }

    const handleChange = (e) => {
        setCommentForm({ ...commentForm, [e.target.name]: e.target.value })
    }


    let everyComment = comments.reverse().map((comment) => {
        return (
            <Card className="every-single-comment">
                <h1>@{comment.get_player_user}</h1>
                <Card.Text className="content">{comment.content}</Card.Text>
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
        <div className="comment-list">
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
