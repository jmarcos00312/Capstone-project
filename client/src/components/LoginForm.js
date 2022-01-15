import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



function LoginForm({ currentUser, setCurrentUser }) {
    const classes = useStyles();
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
        <div className="form-background">
            <div className="login-form">
                {currentUser ? <h1>hi</h1> : <div>
                    <form onSubmit={handleSubmit} className="actual-form">
                        <div className="username">
                            <h3 className="label">Username</h3>
                            <TextField
                                className="text-field"
                                labelText="Username"
                                type="text"
                                name="username"
                                value={logInForm.username}
                                onChange={(e) => handleChange(e)}
                                autoFocus
                                fullWidth
                                required
                            />
                        </div>
                        <div className="password">
                            <h3 className="label">Password</h3>
                            <TextField
                                className="text-field"
                                labelText="Password"
                                type="password"
                                name="password"
                                fullWidth
                                value={logInForm.password}
                                onChange={(e) => handleChange(e)}
                                autoFocus
                                required
                            />
                        </div>
                        <p>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                        </p>
                        <p>Don't have an account?</p>
                        <p>
                            <Link to="/signup">Sign Up</Link>
                        </p>
                    </form>
                </div>

                }
            </div>
        </div>

    )
}

export default LoginForm
