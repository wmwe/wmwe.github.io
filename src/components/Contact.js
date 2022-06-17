import React, { useState } from "react";
import "../App.css";
import { db } from "../Firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [buttonText, setButtonText] = useState("submit");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contact-form")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("submitted!");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
    setButtonText("submit");
  };

  return (
    <div>
      <h1>This is the About Page</h1>

      <div className="container">
        <h2 className="header">contact us.</h2>
        <p className="text">we'd love to hear from you</p>
        <form className="form" onSubmit={handleSubmit}>
          <label>name</label>
          <input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>email</label>
          <input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>message</label>
          <textarea
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            style={{ background: loader ? "#ccc" : "rgb(0, 0, 196)" }}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
