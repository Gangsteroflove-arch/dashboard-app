import {Link} from "react-router-dom"

function login()
{
    return (
        <>
            <p>login</p>
            <p></p>
            <form>
                <label>UserName: </label><input ref={txtusername} type="text" placeholder="* username" maxLength={25}></input><br/>
                <label>Password: </label><input ref={txtpassword} type="password" placeholder="* password" maxLength={25}></input>
                <p></p>
                <p>{msgText}</p>
                <p></p>
                <button onClick={(e)=>handleLogin(e)}>Submit</button>
            </form>
            <p></p>
            <Link to="/register">Register</Link>
            <p></p>
            <Link to="/">Home</Link>
        </>
    )
}

export default login;