import {Link, useNavigate} from "react-router-dom"
import { useState, useRef, useEffect } from "react";

function Register()
{
    let navigate = useNavigate();

    const txtusername = useRef("")
    const txtpassword = useRef("")
    const txtemail = useRef("")
   
    return (
        <>
            <h1>Register</h1>
            <p></p>
            <form>
                <label>UserName: </label><input ref={txtusername} type="text" placeholder="* username" maxLength={25}></input><br/>
                <label>Email: </label><input ref={txtemail} type="text" placeholder="*email" maxLength={25}></input><br/>
                <label>Password: </label><input ref={txtpassword} type="password" placeholder="* password" maxLength={25}></input><br/>
                <label>* Confirm Password: </label><input type="password" placeholder="* Confirm password" maxLength={25}></input>
                <p></p>
                <input type="checkbox"/>I agree to the terms and conditions
                <p></p>
                <p></p>
                <button>Submit</button>
            </form>
            <p></p>
            <Link to="/login">Login</Link>
            <p></p>
            <Link to="/">Home</Link>
        </>
    )
}

export default Register;