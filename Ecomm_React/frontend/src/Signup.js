import { useState } from "react"
import React from 'react'

export default function Signup() {

    const [usernameReg, setUsernameReg] = useState({username:''});
    const [passwordReg, setPasswordReg] = useState({password:''});
    const [emailReg, setEmailReg] = useState({email:''});


    const sendSignup = () => {
        fetch('https://localhost5000/api/signup',{
            username: usernameReg,
            email: emailReg,
            password: passwordReg
        }).then((response)=>{
            console.log(response)
        });
    };
  return (
    <div>
        <h1>SignUP</h1>
        <form>
            <input type='username' 
            placeholder='Enter Your Username Here'
            id='Username'
            name='hey'
            onChange={(e) => {
                setUsernameReg(e.target.value)
            }}></input>


            <input type='email' 
            placeholder='Enter Your Email Here'
            id='Email'
            name='yea'
            onChange={(e) => {
                setEmailReg(e.target.value)
            }}></input>


            <input type='password' 
            placeholder='Enter Your Password Here'
            id='Password'
            name='yup'
            onChange={(e) => {
                setPasswordReg(e.target.value)
            }}></input>

            <button className="btn btn-warning" onClick={sendSignup}> Submit </button>

        </form>

    </div>
  )
};