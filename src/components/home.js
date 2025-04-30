import {Link} from "react-router-dom"

function Home()
{
    return (
        <>
            <p>React Dashboard App v1.3</p>
            <p></p>
            <p>
                <Link to="/Login">Login</Link>
            </p>
            <p>
                <Link to="/Register">Register</Link>
            </p>
            <p>
                <Link to="/Dashboard">Dashboard</Link>
            </p>
        </>
    )
}

export default Home;