import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import NavBar from '../../components/shared/NavBar';


const Login1 = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    useEffect (() => {
        if (localStorage.getItem('user-info')) {
            history.push("/home")
        }
    }, [])

    async function login1() {
        console.warn(email, password)
        let item = {email, password};
        let result = await fetch ("https://backend.amraotech.com/Auth-api/login/", {

            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)

        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/home")
    }





  return (
    <div className='flex flex-col justify-center items-center'> 
     <NavBar />

     <h3>Login Page</h3>
     <div>
        <input type='text' placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)} />

        <br />

        <button onClick={login1}></button>

     </div>
      
    </div>
  )
}

export default Login1
