import React, { useState } from 'react';
import '../../css/LoginSignUp.css';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import SetBodyColor from'../SetBodyColor';

const LoginSignUp = () => {
    const [action,setAction]=useState("Sign Up");
    
    SetBodyColor({color:"linear-gradient(#2A00B7, #42006C)"})

  return (
    <div className="login-container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?
            (<div></div>):(<div className="input">
               <FaUser style={{margin: '0px 30px'}}/>
               <input type="text" name="name" placeholder='Name' /> 
            </div>)}
            
            <div className="input">
               <MdEmail style={{margin: '0px 30px'}}/>
               <input type="email" name="email" placeholder='Email' /> 
            </div>
            <div className="input">
              <RiLockPasswordFill style={{margin: '0px 30px'}}/>
               <input type="password" name="password" placeholder='Password' /> 
            </div>
        </div>
        <div className='button-container'>
            <button className='btn-style'>Submit</button>
        </div>
       
        {action==="Sign Up"?
        (<div></div>):(
            <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>
        )}
       
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp