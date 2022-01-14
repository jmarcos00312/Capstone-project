import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function LoginForm({ currentUser, setCurrentUser }) {

    const [logInForm, setLogInForm] = useState({
        username: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(logInForm),
        };
        fetch("api/login", requestObj).then(r => {
            if (r.ok) {
                r.json().then(user => setCurrentUser(user))
            } else {
                r.json().then(errors => alert(errors.message))
            }
        })
    }

    const handleChange = (e) => {
        setLogInForm({ ...logInForm, [e.target.name]: e.target.value })
    }

    return (
        <div className="login-form">
            {currentUser ? <h1>hi</h1> : <div>
                <form onSubmit={handleSubmit}>

                    <h1>Welcome Back</h1>
                    <p>
                        <label htmlFor="username">Username </label>
                        <input
                            type="text"
                            name="username"
                            value={logInForm.username}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="password">Password </label>
                        <input
                            type="password"
                            name="password"
                            value={logInForm.password}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </p>
                    <p>
                        <button type="submit">Log In</button>
                    </p>
                    <p>Don't have an account?</p>
                    <p>
                        <Link to="/signup">Sign Up</Link>
                    </p>
                </form>
            </div>
            }

        </div>
    )
}

export default LoginForm
