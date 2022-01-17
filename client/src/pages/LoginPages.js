import Get_every_players from '../components/Get_every_players'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'

function LoginPages() {

    const handleLogout = () => {
        fetch("api/logout", { method: "DELETE" });
    }
    return (
        <div>
            <Navbar />
            <Hero />
            <Get_every_players />
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}

export default LoginPages
