import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import './LoginSignUp.css';

export const LoginSignUp = () => {

    const [Action , setAction] = useState("Login");
  return (
    <div className="container">
        <div className="header">
            <div className="text">
                {Action}
            </div>
            <div className="underline"></div>
        </div>
        <div className="inputs">

          {Action === "Login" ? <div></div> :  
           <div className="input">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" placeholder='UserName' />
            </div>
            }
            <div className="input">
            <FontAwesomeIcon icon={faEnvelope} />
                <input type="email" placeholder='email' />
            </div>
            <div className="input">
               <FontAwesomeIcon icon={faLock} />
                <input type="password" placeholder='password' />
            </div>
        </div>
       {Action === "Sign Up" ? <div></div> :  
       <div className="forgot-password">
            Lost Password ? <span> Click Here </span>
        </div>}
        <div className="submit-container ">
            <div className={Action === "Login" ? "submit gray":"submit"} onClick={()=>{
                (setAction("Sign Up"))
            }}>
                Sign Up
            </div>
            <div className={Action === "Sign Up" ? "submit gray":"submit"} onClick={()=>{
                (setAction("Login"))
            }}>
                Login
            </div>
        </div>
    </div>
  )
}

export default LoginSignUp
