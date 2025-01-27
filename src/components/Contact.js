import React, { useState } from "react";
import "./ContactForm.css";
import { db } from "../Firebase";
import women_pic from "../assets/women.png";
import email_pic from "../assets/mail.png";
import location_pic from "../assets/location.png";
import Banner from "./Banner/Banner";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";

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
  const handleMenteeClick = (e) => {
    e.preventDefault();
    window.open('https://forms.gle/t3MQ2Hy96QMiBVh79', '_blank');
  };
  
  const handleMentorClick = (e) => {
    e.preventDefault();
    window.open('https://forms.gle/Qxg4JEP6fPNrkPw47', '_blank');
  };
  
  const navigate = useNavigate();
  const navigateToEvents = () => {
    navigate('/events');
  };

  return (
    <div>
      <Banner
        children={"Our Spring 2025 Mentee Applications are now open!"}
        buttons={
          <Button
            onClick={() => window.open("https://forms.gle/dGrj7uycvH9kJEnf8", "_blank")}
            buttonColor="white"
            textColor="#00B1F5"
          >
            apply today
          </Button>
        }
      />
      <div className="outer-container-contact">
        <div className="containerImage-contact">
          <div className="img-div-contact">
            <img className="photo-contact" src={women_pic} />
          </div>
          <div className="icons-div-contact">
            <div className="icons-div-contact-left">
              <img className="icons-contact" src={email_pic} />
              <br></br>
              <img className="icons-contact" src={location_pic} />
            </div>

            <div className="icons-div-contact-right">
              <a
                className="link"
                target="blank"
                href="mailto: wmweatutd@gmail.com"
              >
                wmweatutd@gmail.com
              </a>
              <br></br>
              <br></br>
              <a
                className="link"
                target="blank"
                href="https://www.google.com/maps/place/University+of+Texas+at+Dallas/@32.9857019,-96.7524361,17z/data=!3m1!4b1!4m5!3m4!1s0x864c21ff895e4aa5:0xd9098b32e9aa1331!8m2!3d32.9856974!4d-96.7502474"
              >
                800 W Campbell Rd
              </a>
            </div>
          </div>
        </div>

        <div className="containerForm-contact">
          <br></br>
          <br></br>
          <h2 className="header-contact">contact us.</h2>
          <p className="text-contact">we'd love to hear from you!</p>
          <form className="form-contact" onSubmit={handleSubmit}>
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
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Contact;
