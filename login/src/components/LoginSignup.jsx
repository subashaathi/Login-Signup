import React, { useState } from 'react'
import './Loginsignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/mail.png'
import password_icon from '../assets/pass.png'

const LoginSignup = () => {

  const [action,setAction] = useState("Login");

  return (
   
    <div className='container'>
        <div className="header">
            <div className='text'>{action}</div>
        </div>
                
            <div className="inputs">
              {action==="Login"? <div></div>: 
              <div className="input">
                   <img className='icon' src={user_icon} alt=''/>
                      <input type='text' placeholder='Username' required/>
             </div>}
               

              <div className="input">
                  <img className='icon' src={email_icon} alt=''/>
                     <input type='text' placeholder='Email' required/>
              </div>

               <div className="input">
                    <img className='icon' src={password_icon} alt=''/>
                      <input type='text' placeholder='Password' required/>
                </div>

            </div>
            {action==="Sign Up"? <div></div>:<div className="forgotpass">Lost Password..?<span>Click here</span></div>}
            

            <div className="submitcontainer">
              <div className={action === "Login"?"submit gray":"submit"} onClick={()=> {setAction("Sign Up")}}>Sign up</div>
              <div className={action === "Sign Up"?"submit gray":"submit"}  onClick={()=> {setAction("Login")}}>Log in </div>
            </div>
        </div>
            
  )
}

export default LoginSignup
