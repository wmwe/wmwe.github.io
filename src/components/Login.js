import React, {useState} from 'react';
import './style.css'
function Login() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="email">
                  <label className="form__label" for="email">email </label>
                  <input  type="email" id="email" className="form__input" placeholder="email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">password </label>
                  <input className="form__input" type="password"  id="password" placeholder="password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">log in</button>
          </div>
      </div>      
    )       
}
export default Login;