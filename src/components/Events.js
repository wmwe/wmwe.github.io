import React, { useEffect } from "react";
import "./EventsStyle.css";
import Banner from "./Banner/Banner";
import Iframe from "react-iframe";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";

function getHeight(innerWidth) {
  if (innerWidth >= 550) return "520px";
  else return "420px";
}

function getWidth(innerWidth) {
  if (innerWidth >= 550) return "650px";
  else return "300px";
}
const handleMenteeClick = (e) => {
  e.preventDefault();
  window.open("https://forms.gle/t3MQ2Hy96QMiBVh79", "_blank");
};

const handleMentorClick = (e) => {
  e.preventDefault();
  window.open("https://forms.gle/Qxg4JEP6fPNrkPw47", "_blank");
};

function Events(props) {
  const navigate = useNavigate();
  const navigateToEvents = () => {
    navigate("/events");
  };
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;
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
      <p className="header">
        <b>upcoming events.</b>
      </p>
      <br></br>
      <br></br>

      <div className="outer-container">
        <div className="containerEvents">
          <div className="wrapper">
            <div class="one">
              <p className="event_font">interest session</p>
            </div>
            <div class="two">
              <p className="event_font">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27
              </p>
            </div>
            <div class="three">
              <p className="event_info">
                7:00 PM
                <br></br>
                SCI 3.220
              </p>
            </div>
            <div
              class="four"
              style={{ marginTop: "1.5em", width: "50%", marginLeft: "2.75em" }}
            >
            </div>
          </div>

          <br></br>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DFDoPACOCnZ/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "3px",
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px auto",
                  maxWidth: "400x",
                  minWidth: "280px",
                  padding: 0,
                  width: "90%",
                }}>
              </blockquote>
            </div>
        
        </div>
        

        <div className="containerCalendar">
        <Iframe
          url="https://calendar.google.com/calendar/embed?src=d74738de82325736227a6d91ea22d96658c92f111473a246499dcc5d6162c3d5%40group.calendar.google.com&ctz=America%2FChicago&showTitle=1&showNav=0&showTabs=0&showCalendars=0&showPrint=0&showBorder=0"
          width={getWidth(innerWidth)}
          height={getHeight(innerWidth)}
          id=""
          className=""
          display="block"
          position="relative"
        />
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Events;