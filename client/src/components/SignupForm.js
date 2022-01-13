import React, { useState } from 'react'

function SignupForm() {
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

    const handleChange = () => { }


    const handleSubmit = () => { }


    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <h1>Create Account</h1>
                <label>
                    First Name:
                    <input
                        name="first_name"
                        type="text"
                        value={signupForm.first_name}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Last Name:
                    <input
                        name="last_name"
                        type="text"
                        value={signupForm.last_name}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Username:
                    <input
                        name="username"
                        type="text"
                        value={signupForm.username}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        value={signupForm.password}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        type="text"
                        value={signupForm.email}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Favorite Player:
                    <input
                        name="favorite_palyer"
                        type="text"
                        value={signupForm.favorite_player}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Favorite Team:
                    <input
                        name="favorite_team"
                        type="text"
                        value={signupForm.favorite_player}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <input type="submit" value="send" />
            </form>


        </div>
    )
}

export default SignupForm
