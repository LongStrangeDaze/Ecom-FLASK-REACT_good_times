import React from 'react'
import { useState } from 'react';

export default function Login() {

  const [username, setUsername] = useState({username:''});
  const [password, setPassword] = useState({password:''});


  const logMeIn = () => {
      fetch('https://localhost5000/api/login',{
          username: username,
          password: password
      }).then((response)=>{
          console.log(response)
      });
  };

  return (
    <>
    <h1>Login</h1>
    <form>
       <input className='username' placeholder='username' id='username' onChange={(e)=> {setUsername(e.target.value)}} ></input>
    <input className='password' placeholder='Password' id='password' onChange={(e)=> {setPassword(e.target.value)}} ></input>
    </form>
   <button className='btn btn-warning' onClick={logMeIn}>SignIn</button>
    </>


  )
};
