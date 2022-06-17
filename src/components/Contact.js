import React, { useState } from "react";
import "../App.css";
import { db } from "../Firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>This is the About Page</h1>
      <form className="form">
        <p>we'd love to hear from you</p>

        <label>name</label>
        <input placeholder="name" value={name} onChange={(e)}/>

        <label>email</label>
        <input placeholder="email" value={email}/>

        <label>message</label>
        <textarea placeholder="message"></textarea>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Contact;
