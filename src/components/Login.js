import React, {useState} from 'react';
import './LoginStyle.css'
import './SignUp.js'
import './ResetPassword.js'
import wmwelogo from "./wmwelogo.png"
function Login() {
    return(
      <div>
        <div className="form">
        <img className="logo" src={wmwelogo}/>
        
        <div className="google">
                <button type="submit" class="btn2">
                    <img className="googlelogo" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" 
                    width="17px" height="17px"></img> 
                     &nbsp;&nbsp; sign in through google</button>
        </div>

        
            <hr class="leftline"/>

            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="email">email{'\n'} </label>
                    <input className="form__input" type="email" id="email" placeholder="email" />
                </div>
                <div className="password">
                    <label className="form__label" for="password">password </label>
                    <input className="form__input" type="password" id="password" placeholder="password" />
                </div>
            </div>
            <div className="login">
                <button type="button" class="btn">log in</button>
            </div>
        </div>
        
                <div className="links">
                    <p><small><u><a href="./ResetPassword">forgot password?</a></u></small></p>
                    <p><small>new to WMWE? create an account <u><a href="./SignUp">here</a></u></small></p>
                </div>
        </div>    
    )       
}
export default Login;