import React, { Component, useState } from 'react'
import loginimg from "./wmwelogo.png";
import "./Login.css";
import "./Home.css"
import logingoogle from "./googleLogin.png";
// export default class Login extends Component {
  export const Login = (props) => {


    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
      <div>

        <div className='login'>

        <div className='banner1'>
                <h3 className='banner-text'>
                    Mentee applications for Fall 2022 are now open!
                </h3>
                <h3 className='banner-text'>
                    apply today
                </h3>
        </div>

          <div style={{padding:'20px'}}>
          <img src={loginimg} style={{maxWidth:'80px'}}></img>
          </div>
          
          
          <button
          onclick={console.log("you have clicked the button")}
          className="button-login"
          >
          <div className='button-flex'>
            <img style={{maxHeight:'25px'}}src={logingoogle}></img>
            <div>log in with google</div>

          </div>
          </button>
          

          <h2 className='or-login'>-or-</h2>

          <form className="login-form" onSubmit={handleSubmit}>
                
                <div>
                <h3 className='text-login'>email</h3>
                <input 
                className= "login-textinput" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                id="email" 
                name="email" />
                </div>
                
                <div>
                <h3 className='text-login'>password</h3>
                <input 
                className= "login-textinput"  
                value={pass} 
                onChange={(e) => setPass(e.target.value)} 
                type="password" 
                id="password" 
                name="password" 
                />

                </div>
                
                
               
             
            </form>

          <div style={{padding:'30px'}}>

          <button
          onclick={console.log("you have clicked the button")}
          className="button-login"
          >
          <div className='button-flex'>
          
            log in

          </div>
          </button>

          </div>

          <h3 className='extratext-login'>forgot password?</h3>
          <h3 className='extratext-login'>new to WMWE? create an account here</h3>
           

          
        </div>

      </div>
    )
  }

