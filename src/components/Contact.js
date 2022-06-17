import React, { useState } from "react";
import "../App.css";
import { db } from "../Firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contact-form").add({
        name: name,
        email: email,
        message: message,
    })
    .then(() => {
        alert("Submitted!");
    })
    .catch((error) => {
        alert(error.message);
    })

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h1>This is the About Page</h1>

      <form className="form" onSubmit={handleSubmit}>
        <p>we'd love to hear from you</p>

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

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Contact;
