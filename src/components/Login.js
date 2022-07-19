import React, {useState} from 'react';
import './LoginStyle.css'
import './SignUp.js'
import './ResetPassword.js'

import firebaseApp from "./fire"

import wmwelogo from "./wmwelogo.png"

class Login extends React.Component {

    login() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        firebaseApp.auth().signInWithEmailAndPassword(email, password).then((u) => {
            console.log("Successfully logged in!")
        })
        .catch((err) => {
            console.log("Error: " + err.toString());
        })
    }

    render() {
        return(
            <div className="all">
              <div className="form">
              <img className="logo" src={wmwelogo}/>
              
              <div className="google">
                      <button type="submit" class="btn2">
                          <img className="googlelogo" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" 
                          width="17px" height="17px"></img> 
                           &nbsp;&nbsp; sign in through google</button>
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
                  <div className="login">
                      <button type="button" class="btn">log in</button>
                  </div>
              </div>
              
                      <div className="links">
                          <strong><p><u><a href="./ResetPassword">forgot password?</a></u></p></strong>
                          <strong><p>new to WMWE? create an account <u><a href="./SignUp">here</a></u></p></strong>
                      </div>
              </div>    
          )       
    }

}

// function Login() {
//     return(
//       <div className="all">
//         <div className="form">
//         <img className="logo" src={wmwelogo}/>
        
//         <div className="google">
//                 <button type="submit" class="btn2">
//                     <img className="googlelogo" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" 
//                     width="17px" height="17px"></img> 
//                      &nbsp;&nbsp; sign in through google</button>
//         </div>

        
//             <hr className="leftline"/>

//             <div className="form-body">
//                 <div className="email">
//                     <strong><label className="form__label" for="email">email{'\n'} </label></strong>
//                     <input className="form__input" type="email" id="email" placeholder="email" />
//                 </div>
//                 <div className="password">
//                     <strong><label className="form__label" for="password">password </label></strong>
//                     <input className="form__input" type="password" id="password" placeholder="password" />
//                 </div>
//             </div>
//             <div className="login">
//                 <button type="button" class="btn">log in</button>
//             </div>
//         </div>
        
//                 <div className="links">
//                     <strong><p><u><a href="./ResetPassword">forgot password?</a></u></p></strong>
//                     <strong><p>new to WMWE? create an account <u><a href="./SignUp">here</a></u></p></strong>
//                 </div>
//         </div>    
//     )       
// }
export default Login;