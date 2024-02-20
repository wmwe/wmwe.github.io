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
        children={
          "Check out our events page to stay updated with our upcoming events!"
        }
        buttons={
          <Button
            onClick={navigateToEvents}
            buttonColor="white"
            textColor="#00B1F5"
          >
            events
          </Button>
        }
      ></Banner>
      <p className="header">
        <b>upcoming events.</b>
      </p>
      <br></br>
      <br></br>

      <div className="outer-container">
        <div className="containerEvents">
          <div className="wrapper">
            <div class="one">
              <p className="event_font">kickoff</p>
            </div>
            <div class="two">
              <p className="event_font">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12
              </p>
            </div>
            <div class="three">
              <p className="event_info">
                7:00 PM
                <br></br>
                Virtual
              </p>
            </div>
            <div
              class="four"
              style={{ marginTop: "1.5em", width: "50%", marginLeft: "2.75em" }}
            >
             {/*} <div>
                <a target="_blank" href="https://forms.gle/CzkVJezFhwZuqTUAA">
                  <button className="button">rsvp</button>
                </a>
              </div>*/}
            </div>
          </div>

          <br></br>

          <div className="wrapper">
            <div class="one">
              <p className="event_font">bake sale</p>
            </div>
            <div 
              class="two"
              style={{ marginRight: "15px" }}
              >
              <p className="event_font">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12,13,15
              </p>
            </div>
            <div class="three">
              <p className="event_info">
                11:00 AM - 2:00 PM
                <br></br>
                SU first floor
              </p>
            </div>
            <div
              class="four"
              style={{ marginTop: "1.5em", width: "50%", marginLeft: "2.75em" }}
            >
              {/* <div>
                <a target="_blank" href="https://forms.gle/CzkVJezFhwZuqTUAA">
                  <button className="button">rsvp</button>
                </a>
              </div> */}
            </div>
          </div>

          <br></br>

          <div className="wrapper">
            <div class="one">
              <p className="event_font">vision board social</p>
            </div>
            <div class="two">
              <p className="event_font">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20
              </p>
            </div>
            <div class="three">
              <p className="event_info">
                7:00 PM
                <br></br>
                SCI 2.235
              </p>
            </div>
            <div
              class="four"
              style={{ marginTop: "1.5em", width: "50%", marginLeft: "2.75em" }}
            >
              {/* <div>
                <a target="_blank" href="https://forms.gle/CzkVJezFhwZuqTUAA">
                  <button className="button">rsvp</button>
                </a>
              </div> */}
            </div>
          </div>

          <br></br>

          <div className="wrapper">
            <div class="one">
              <p className="event_font">intro to react</p>
            </div>
            <div class="two">
              <p className="event_font">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28
              </p>
            </div>
            <div class="three">
              <p className="event_info">
                7:00 PM
                <br></br>
                GR 4.208
              </p>
            </div>
            <div
              class="four"
              style={{ marginTop: "1.5em", width: "50%", marginLeft: "2.75em" }}
            >
              {/* <div>
                <a target="_blank" href="https://forms.gle/CzkVJezFhwZuqTUAA">
                  <button className="button">rsvp</button>
                </a>
              </div> */}
            </div>
          </div>

          <br></br>
        
        </div>
        

        <div className="containerCalendar">
          <Iframe
            url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%236dcff6&amp;ctz=America%2FChicago&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=1&amp;src=M3VxaThqNTE1dXVjNXZrY3EwcTBvdml1bW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%231b3a5d"
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
