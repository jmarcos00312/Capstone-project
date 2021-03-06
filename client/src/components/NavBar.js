import React from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function NavBar({ setCurrentUser }) {

    const handleLogout = () => {
        fetch("api/logout", { method: "DELETE" }).then(r => r.json()).then(setCurrentUser(null));
    }
    const classes = useStyles();
    return (
        <AppBar position="fixed" style={{ background: '#1E1F21' }}>
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Web Basketball Association
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/news" className={classes.link}>
                        News
                    </Link>
                    <Link to="/logout" className={classes.link} onClick={handleLogout}>
                        Logout
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar
