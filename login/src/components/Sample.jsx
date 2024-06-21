import React from 'react'
import { useState } from 'react'
import './Loginsignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/mail.png'
import password_icon from '../assets/pass.png'


const Sample = () => {

    const [action,setAction] = useState("Login");

  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
        </div>

        <div className="inputs">

            
                {action ==="Login"?<div></div>:
                <div className="input">
                    <img src="" alt="" />
                <input type="text" placeholder='UserName..' />
            </div>}
                
            <div className="input">
                <img src="" alt="" />
                <input type="text" placeholder='email..' />
            </div>
            <div className="input">
                <img src="" alt="" />
                <input type="text" placeholder='password..' />
            </div>

            {action==="Sign Up"?<div></div>:
                <div className="forgotpass">Forget password<span>Click here!</span></div>
            }


            <div className="submitcontainer">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    </div>
  )
}

export default Sample
