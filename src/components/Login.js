import React, { Component, useState } from "react";
import loginimg from "./wmwelogo.png";
import "./Login.css";
import "./Home.css";
import Banner from "./Banner/Banner";
import Button from "./Button/Button";
//import logingoogle from "./googleLogin.png";
// export default class Login extends Component {

import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, forgotPassword } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/Account");
    } catch (e) {
      setError(e.message);
      alert("Incorrect email or password!");
      console.log(e.message);
    }
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await forgotPassword(email);
      navigate("/Login");
      console.log("sent");
      console.log(email);
    } catch (e) {
      console.log("forgot");
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleMenteeClick = (e) => {
    e.preventDefault();
    window.open('https://forms.gle/t3MQ2Hy96QMiBVh79', '_blank');
  };
  
  const handleMentorClick = (e) => {
    e.preventDefault();
    window.open('https://forms.gle/Qxg4JEP6fPNrkPw47', '_blank');
  };

  const navigateToEvents = () => {
    navigate('/events');
  };

  return (
    <div>
      <div className="login-page">
        <div className="login">
        <Banner
            children={"Check out our upcoming events this month!"}
            buttons={
              <Button
                onClick={() => (window.location.href = "/events")}
                buttonColor="white"
                textColor="#00B1F5"
              >
                events
              </Button>
            }
          />
          <div style={{ padding: "20px", paddingTop: "8%" }}>
            <img src={loginimg} style={{ maxWidth: "80px" }}></img>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <h3 className="text-login">email</h3>
              <input
                className="login-textinput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
              />
            </div>

            <div>
              <h3 className="text-login">password</h3>
              <input
                className="login-textinput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
              />
            </div>

            <div style={{ padding: "30px" }}>
              <button
                onclick={console.log("you have clicked the button")}
                className="button-login"
              >
                <div className="button-flex">log in</div>
              </button>
            </div>
          </form>

          <h3
            className="extratext-login"
            onClick={() => {
              navigate("/forgot");
            }}
          >
            forgot password?
          </h3>

          {/* <h3
          className="extratext-login"
          onClick={() => {
            navigate("/signup");
          }}
        >
          sign up?
        </h3> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
