import React, {useState} from 'react';
import './Login.js'
import './LoginStyle.css'
import './SignupStyle.css'
function SignUp() {
    return(
      <>
        <div className="form">
        <div className="google">
                <button type="submit" class="btn2">
                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" 
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
                <button type="button" class="btn">sign up</button>
            </div>
        </div>
        
        <div className="link">
                <div className="links">
                    <p><small>already have an account? login <a href="./Login">here</a></small></p>
                </div>
            </div>
        </>    
    )       
}
export default SignUp;