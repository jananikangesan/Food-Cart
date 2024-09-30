import React, { useState } from 'react';
import '../../css/LoginSignUp.css';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import SetBodyColor from'../SetBodyColor';
import { userSignUp } from '../../services/UserService';
import Swal from 'sweetalert2';

const LoginSignUp = () => {
    const [action,setAction]=useState("Sign Up");
    
    SetBodyColor({color:"linear-gradient(#2A00B7, #42006C)"})

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [error,setError]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const validateForm=()=>{
        let valid=true;

        const errorCopy={...error}

        if(formData.name.trim()){
            errorCopy.name=''
        }else{
            errorCopy.name='Name is required'
            valid=false;
        }

        if(formData.email.trim()){
            errorCopy.email=''
        }else{
            errorCopy.email='Email is required'
            valid=false;
        }

        if(formData.password.trim()){
            errorCopy.password=''
        }else{
            errorCopy.password='Password is required'
            valid=false;
        }
        
        if(formData.confirmPassword.trim()){
            errorCopy.confirmPassword=''
        }else{
            errorCopy.confirmPassword='Confirm Password is required'
            valid=false;
        }

        setError(errorCopy);

        return valid;
    }

    const handleChange=(e)=>{
        setFormData({...formData,
            [e.target.name]:e.target.value
        });
    }
    const handleLoginSignUp=(e)=>{
        e.preventDefault();

        if(validateForm()){

            if(action=="Sign Up"){
                if(formData.password!=formData.confirmPassword){
                    console.log("passwords do not match");
                }else{
                    userSignUp(formData).then((response)=>{
                        console.log(response.data);

                        Swal.fire({
                            icon: "success",
                            title:"User Sign Up successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        setFormData({
                            name:"",
                            email:"",
                            password:"",
                            confirmPassword:""
                        })
                    }).catch((error)=>{
                        console.error("Error in sing Up:",error);

                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Error in Sign Up",
                        });
                    })
                }
            }
        }
        
    }

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
               <input type="text" className={`form-control ${error.name?'is-invalid':''}`} name="name" placeholder='Name' value={formData.name} onChange={handleChange} /> 
               {error.name && <div className='invalid-feedback'>{error.name}</div>}
            </div>)}
            
            <div className="input">
               <MdEmail style={{margin: '0px 30px'}}/>
               <input type="email" className={`form-control ${error.email?'is-invalid':''}`} name="email" placeholder='Email' value={formData.email} onChange={handleChange} /> 
               {error.email && <div className='invalid-feedback'>{error.email}</div>}
            </div>
            <div className="input">
              <RiLockPasswordFill style={{margin: '0px 30px'}}/>
               <input type="password" className={`form-control ${error.password?'is-invalid':''}`} name="password" placeholder='Password' value={formData.password} onChange={handleChange} /> 
               {error.password && <div className='invalid-feedback'>{error.password}</div>}
            </div>
            {action==="Login"?
            (<div></div>):(
                <div className="input">
                <RiLockPasswordFill style={{margin: '0px 30px'}}/>
                 <input type="password" className={`form-control ${error.confirmPassword?'is-invalid':''}`} name="confirmPassword" placeholder='Confirm password' value={formData.confirmPassword} onChange={handleChange} /> 
                 {error.confirmPassword && <div className='invalid-feedback'>{error.confirmPassword}</div>}
              </div> 
            )}
        </div>
        <div className='button-container'>
            <button className='btn-style' onClick={handleLoginSignUp}>Submit</button>
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