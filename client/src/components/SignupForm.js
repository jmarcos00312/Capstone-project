import React, { useState } from 'react'
import './signupForm.css'
import { Link } from 'react-router-dom'

function SignupForm({ setCurrentUser }) {
    const [signupForm, setSignupForm] = useState({
        first_name: "",
        last_name: "",
        password: "",
        username: "",
        email: "",
        favorite_player: "",
        favorite_team: "",
        admin: false,
    })

    const handleChange = (e) => {
        setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signupForm),
        };

        fetch("api/signup", configObj).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => {
                    setCurrentUser(user);
                    setSignupForm({
                        first_name: "",
                        last_name: "",
                        password: "",
                        username: "",
                        email: "",
                        favorite_player: "",
                        favorite_team: "",
                        admin: false,
                    })
                });
            } else {
                resp.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
    }


    return (
        <div className="everything">
            <h1 className="create-account"> 🏀    Create Account    🏀</h1>
            <div className="Sign-up-form-div">
                <div> <img className="image-signup" alt="Basketball hoop" src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" /> </div>
                <div className="signup-container">
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label>🏀   First Name:   🏀</label>
                            <input
                                name="first_name"
                                type="text"
                                value={signupForm.first_name}
                                onChange={handleChange}
                                required />

                        </div>

                        <div className="form-group">
                            <label>🏀   Last Name:   🏀 </label>
                            <input
                                name="last_name"
                                type="text"
                                value={signupForm.last_name}
                                onChange={handleChange}
                                required />

                        </div>

                        <div className="form-group">
                            <label> 🏀    Username:   🏀 </label>
                            <input
                                name="username"
                                type="text"
                                value={signupForm.username}
                                onChange={handleChange}
                                required />
                        </div>

                        <div className="form-group">
                            <label> 🏀   Password:   🏀 </label>
                            <input
                                name="password"
                                type="password"
                                value={signupForm.password}
                                onChange={handleChange}
                                required />
                        </div>

                        <div className="form-group">
                            <label> 🏀   Email:   🏀 </label>
                            <input
                                name="email"
                                type="text"
                                value={signupForm.email}
                                onChange={handleChange}
                                required />
                        </div>

                        <div className="form-group">
                            <label> 🏀   Favorite Player:   🏀 </label>
                            <input
                                name="favorite_player"
                                type="text"
                                value={signupForm.favorite_player}
                                onChange={handleChange}
                                required />
                        </div>

                        <div className="form-group">
                            <label> 🏀   Favorite Team:   🏀 </label>
                            <input
                                name="favorite_team"
                                type="text"
                                value={signupForm.favorite_team}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="input-send">
                            <button type="submit" className="Submit">Submit</button>
                            <Link to="/login"><button className="Submit">Log in</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupForm
