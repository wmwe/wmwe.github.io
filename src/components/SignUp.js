import React, { useState, useCallback } from "react";
import loginimg from "./wmwelogo.png";
import "./Login.css";
import "./Home.css";
import Banner from "./Banner/Banner";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, forgotPassword, createUserWithProfile } = UserAuth();
  const [name, setName] = useState("");
  const [currentTeam, setCurrentTeam] = useState("");
  const [memberSince, setMemberSince] = useState("");
  const [linkedin, setLinkedin] = useState("");

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

  const handleCreate = useCallback(async () => {
    setError("");
    try {
      await createUserWithProfile(
        email,
        password,
        name,
        linkedin,
        currentTeam,
        memberSince
      );
      console.log("User created successfully!");
      await signIn(email, password);
      navigate("/Account");
    } catch (e) {
      setError(e.message);
      console.log("Error creating user:", e.message);
      alert(e.message);
    }
  }, [
    createUserWithProfile,
    email,
    password,
    name,
    linkedin,
    currentTeam,
    memberSince,
    signIn,
    navigate,
  ]);

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
      <div className="login-page">
        <div className="login">
          <Banner
            children={"Applications for Fall 2023 are Now Open!"}
            link={"https://www.linkedin.com/in/wmweatutd/"}
          ></Banner>

          <div style={{ padding: "20px", paddingTop: "8%" }}>
            <img src={loginimg} style={{ maxWidth: "80px" }}></img>
          </div>

          <form className="login-form" onSubmit={handleCreate}>
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

            <div>
              <h3 className="text-login">name</h3>
              <input
                className="login-textinput"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
                id="name"
                name="name"
              />
            </div>

            <div>
              <h3 className="text-login">current team</h3>
              <input
                className="login-textinput"
                value={currentTeam}
                onChange={(e) => setCurrentTeam(e.target.value)}
                type="currentTeam"
                id="currentTeam"
                name="currentTeam"
              />
            </div>

            <div>
              <h3 className="text-login">member since</h3>
              <input
                className="login-textinput"
                value={memberSince}
                onChange={(e) => setMemberSince(e.target.value)}
                type="memberSince"
                id="memberSince"
                name="memberSince"
              />
            </div>

            <div>
              <h3 className="text-login">linkedin</h3>
              <input
                className="login-textinput"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                type="linkedin"
                id="linkedin"
                name="linkedin"
              />
            </div>

            <div style={{ padding: "30px" }}>
              <button className="button-login">
                <div className="button-flex">sign up</div>
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
