import React, { useState } from "react";
import "./ContactForm.css";
import { db } from "../Firebase";
import women_pic from "./women.png";
import email_pic from "./email.png";
import location_pic from "./location.png";

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
      <div className="main">
        <div className="container_left">
          <img className="photo" src={women_pic} />
          <br></br>

          <div className="new_icons">
            <img className="icons" src={email_pic} />
            <br></br>
            &nbsp;
            <img className="icons_2" src={location_pic} />
          </div>

          <div className="new_links">
            
            <a
              className="link"
              target="blank"
              href="mailto: wmweatutd@gmail.com"
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wmweatutd@gmail.com
            </a>
            <br></br>
            <br></br>
            <a
              className="link"
              target="blank"
              href="https://www.google.com/maps/place/University+of+Texas+at+Dallas/@32.9857019,-96.7524361,17z/data=!3m1!4b1!4m5!3m4!1s0x864c21ff895e4aa5:0xd9098b32e9aa1331!8m2!3d32.9856974!4d-96.7502474"
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;800 W Campbell Rd
            </a>
          </div>
        </div>

        <div className="container">
          <h2 className="header">contact us.</h2>
          <p className="text">we'd love to hear from you!</p>
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
              style={{ background: loader ? "#6DCFF6" : "#1B3A5D" }}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
