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
      <div className="outer-container">
        <div className="containerImage">
          <img className="photo" src={women_pic} />
          
          <br></br>
          <br></br>
          <br></br>



        </div>

        <div className="containerForm">
         <h2 className="header">contact us.</h2>
         <p className="text">we'd love to hear from you!</p>
         <br></br>
         <br></br>
         <br></br>
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

         <br></br>
         <br></br>

        </div>
      </div>
    </div>
  );
};

export default Contact;
