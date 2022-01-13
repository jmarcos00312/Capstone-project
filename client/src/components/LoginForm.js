import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function LoginForm() {

    const [logInForm, setLogInForm] = useState({
        username: "",
        password: "",
    })

    const handleSubmit = () => { }

    const handleChange = () => { }

    return (
        <div className="login-form">
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
    )
}

export default LoginForm
