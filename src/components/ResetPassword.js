import React, {useState} from 'react';
import './Login.js'
import './LoginStyle.css'
import wmwelogo from "./wmwelogo.png"
function ResetPassword() {
    return(
      <div className="all">
        <div className="form">
            <img className="logo" src={wmwelogo}/>

            <p className="instructions">Enter your username and we will <br></br>
            send you instructions to reset your password.</p>

            <div className="form-body">
                <div className="email">
                    <strong><label className="form__label" for="email">email{'\n'} </label></strong>
                    <input className="form__input" type="email" id="email" placeholder="email" />
                </div>
            </div>
            <div className="sendemail">
                <button type="button" class="btn">send email</button>
                </div>
            </div>
        
                <div className="links">
                    <strong><p>already have an account? log in <u><a href="./Login">here</a></u></p></strong>
                </div>
        </div>    
    )       
}
export default ResetPassword;