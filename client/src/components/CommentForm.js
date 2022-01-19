import React, { useState } from 'react'

function Comment({ player, user_id }) {
    const [commentForm, setCommentForm] = useState({
        content: "",
    })

    const handleChange = (e) => {
        setCommentForm({ ...commentForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...commentForm, player_id: player.id, user_id: user_id }),
        };

        fetch("api/comments", configObj).then(r => r.json()).then(data => console.log(data))
    }


    return (
        <div className="comment">
            <form onSubmit={handleSubmit} className="add-book-form">
                <h3>Add New Comment</h3>
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
            </form>
        </div>
    )
}

export default Comment
