import React, { Component, useState } from "react";
import loginimg from "./wmwelogo.png";
import "./Login.css";
import "./Home.css";

import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Forgot = (props) => {
  const [email, setEmail] = useState("");
  const { signIn, forgotPassword } = UserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  return (
    <div>
      <div className="forgot">

<br></br>
<br></br>
        <div style={{ padding: "20px" }}>
          <img src={loginimg} style={{ maxWidth: "80px" }}></img>
        </div>

        <h3
          className="extratext-login"
          onClick={() => {
            navigate("/login");
          }}
        >
          return to log in?
        </h3>

        <form className="login-form" onSubmit={handleForgot}>
          <div>
            <h3 className="text-login">email</h3>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="login-textinput"
              type="email"
            />
          </div>

          <div style={{ padding: "30px" }}>
            <button
              onclick={console.log("you have clicked the button")}
              className="button-login"
            >
              <div className="button-flex">forgot password</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;