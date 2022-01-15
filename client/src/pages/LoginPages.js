import Get_every_players from '../components/Get_every_players'


function LoginPages() {


    const handleLogout = () => {
        fetch("api/logout", { method: "DELETE" });
        // setCurrentUser(null)
    }
    return (
        <div>
            <Get_every_players />
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}

export default LoginPages
