import {Link, useNavigate} from "react-router-dom"
import { useState, useRef, useEffect } from "react";
import { FaUser,FaLock } from "react-icons/fa";

function Login()
{
    let navigate = useNavigate();

    const txtusername = useRef("")
    const txtpassword = useRef("")
    const [msgText, setMsg] = useState("")

    const handleLogin = (e)=>{

        e.preventDefault()

        console.log("# handleLogin")
        console.log(`# username: ${txtusername.current.value} password: ${txtpassword.current.value}`)

        let _msg = "";
        let _replit_url = "your-replit-api-website-url";
   
        const _uid = txtusername.current.value
        const _pwd = txtpassword.current.value
       
        //const _url = `http://localhost:8080/login/${_uid}/${_pwd}`;  
        const _url = `${_replit_url}/login/${_uid}/${_pwd}`;  

        if(_uid === null || _uid.trim().length === 0)
        {
            _msg = "* invalid username";                
            setMsg(_msg)                
            return false;
        }
       
        if(_pwd === null || _pwd.trim().length === 0)
        {
            _msg = " * invalid password";                
            setMsg(_msg)                
            return false;
        }
       
        fetch(_url)
        .then((res)=>res.json())
        .then((data)=> {
           
            if(data.login === true)
            {
                console.log("# navigate to dashbpoard")
                navigate("/dashboard",{replace:true})
            }

            setMsg(data.msg)
        })
        .catch((error)=>{
            setMsg("* request error");
            console.log("* request error *");
            console.log(error);
        });

        txtusername.current.value = "";
        txtpassword.current.value = "";

    }

    return (
        <>
            <h1>login</h1>
            <p></p>
            <form action="">
                <FaUser className='icon'/>
                <label>UserName: </label><input ref={txtusername} type="text" placeholder="* username" maxLength={25}></input><br/>
                <FaLock className='icon'/>
                <label>Password: </label><input ref={txtpassword} type="password" placeholder="* password" maxLength={25}></input>
                <p></p>
                <p>{msgText}</p>
                <p></p>
                <button onClick={(e)=>handleLogin(e)}>Login</button>
                <div>
                     <div>
                        <label>
                            <input type="checkbox" /> Remember me
                         </label>
                             <a href="#">Forgot password?</a>
                    </div>
                </div>
                
            </form>
            <p></p>
            
            <p className="register-link">
            Don't have an account? <a href="#">Register</a>
      </p>
            <Link to="/">Home</Link>
        </>
    )
}

export default Login;