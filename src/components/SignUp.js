import React, {useState} from 'react';
import './Login.js'
import './LoginStyle.css'
// import './ResetPassword.js'
import wmwelogo from "./wmwelogo.png"
function SignUp() {
    return(
      <div className="all">
        <div className="form">
        <img className="logo" src={wmwelogo}/>
        
        <div className="google">
                <button type="submit" class="btn2">
                    <img className="googlelogo" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" 
                    width="17px" height="17px"></img> 
                     &nbsp;&nbsp; sign up through google</button>
        </div>
        
            <hr className="leftline"/>

            <div className="form-body">
                <div className="email">
                    <strong><label className="form__label" for="email">email{'\n'} </label></strong>
                    <input className="form__input" type="email" id="email" placeholder="email" />
                </div>
                <div className="password">
                    <strong><label className="form__label" for="password">password </label></strong>
                    <input className="form__input" type="password" id="password" placeholder="password" />
                </div>
            </div>
            <div className="signup">
                <button type="button" class="btn">sign up</button>
                </div>
            </div>
        
                <div className="links">
                    <strong><p><u><a href="./ResetPassword">forgot password?</a></u></p></strong>
                    <strong><p>already have an account? log in <u><a href="./Login">here</a></u></p></strong>
                </div>
        </div>    
    )       
}
export default SignUp;