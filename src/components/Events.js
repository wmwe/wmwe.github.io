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
      <p className="header">
        <b>upcoming events.</b>
      </p>
      <br></br>
      <br></br>

      <div className="outer-container">
        <div className="containerEvents">
        <div className="wrapper">
            <div class="one">
              <p className="event_font">machine learning workshop.</p>
            </div>
            <div class="two">
              <p className="event_font">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9
              </p>
            </div>
            <div class="three">
              <p className="event_info">
                7pm @ SLC 1.204
                <br></br>
              </p>
            </div>
            <div
              class="four"
              style={{ marginTop: "1.5em", width: "50%", marginLeft: "2.75em" }}
            >
            </div>
          </div>

          <br></br>

          <div className="wrapper">
            <div class="one">
              <p className="event_font">ACM yk ball collab.</p>
            </div>
            <div class="two">
              <p className="event_font">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21
              </p>
            </div>
            <div class="three">
              <p className="event_info">
              7 - 9pm @ Phase 8 Clubhouse
                <br></br>
              
              </p>
            </div>
            <div
              class="four"
              style={{ marginTop: "1.5em", width: "50%", marginLeft: "2.75em" }}
            >
            </div>
          </div>

          <br></br>

          <div className="wrapper">
            <div class="one">
              <p className="event_font">study social.</p>
            </div>
            <div class="two">
              <p className="event_font">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22
              </p>
            </div>
            <div class="three">
              <p className="event_info">
                7PM @ SCI 3.250
                
              </p>
            </div>
            <div
              class="four"
              style={{ marginTop: "1.5em", width: "50%", marginLeft: "2.0em" }}
            >
            </div>
          </div>

          <br></br>

          { <div className="wrapper">
            <div class="one">
              <p className="event_font">wmwe eos.</p>
            </div>
            <div class="two">
              <p className="event_font">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27
              </p>
            </div>
            <div class="three">
              <p className="event_info">
                7pm @ SCI 3.320
                <br></br>
                
              </p>
            </div>
            <div
              class="four"
              style={{ marginTop: "1.5em", width: "50%", marginLeft: "2.75em" }}
            >
            </div>
          </div> }

          <br></br>
        
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