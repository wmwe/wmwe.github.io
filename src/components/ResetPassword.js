import React, {useState} from 'react';
import './PasswordStyle.css'

import './Login.js'
import './SignUp.js'
import wmwelogo from "./wmwelogo.png"
function ResetPassword() {
    return(
      <>
        <div className="form">
            <hr class="leftline"/>

            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="email">email{'\n'} </label>
                    <input className="form__input" type="email" id="email" placeholder="email" />
                </div>
            </div>
            <div className="login">
                <button type="button" class="btn">log in</button>
            </div>
        </div>
        
        <div className="link">
                <div className="links">
                    <p><small><u>forgot password?</u></small></p>
                    <p><small>new to WMWE? create an account <u><a href="./SignUp">here</a></u></small></p>
                </div>
            </div>
        </>    
    )       
}
export default ResetPassword;