import React, { useEffect } from "react";
import "./EventsStyle.css";
import Banner from "./Banner/Banner";
import Iframe from 'react-iframe'


function getHeight(innerWidth) {
  if (innerWidth >= 550) return "520px" 
  else return "420px" 
}

function getWidth(innerWidth) {
  if (innerWidth >= 550) return "650px" 
  else return "300px" 
}

function Events(props) {
  const innerWidth = window.innerWidth
  const innerHeight = window.innerHeight
  return (
    <div>
      <Banner
        children={"Applications for Fall 2023 are Now Open!"}
        link={"https://www.linkedin.com/in/wmweatutd/"}
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
              <p className="event_font">applications due</p>
            </div>
            <div class="two">
              <p className="event_font">&nbsp;sept. 1</p>
            </div>
            <div class="three">
              <p className="event_info">
                by 11:59 pm
                <br></br>
                for Mentors & Mentees
              </p>
            </div>
            <div class="four" style={{ marginTop: "-2em" }}>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a target="_blank" href="https://linktr.ee/wmweutd">
                  <button className="button">apply</button>
                </a>
              </p>
            </div>
          </div>

          {/* <div className="wrapper">
            <div class="one">
              <p className="event_font">end of semester</p>
            </div>
            <div class="two">
              <p className="event_font">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14
              </p>
            </div>
            <div class="three">
              <p className="event_info">
                7:00 pm
                <br></br>
                Location: Artemis Halls
              </p>
            </div>
            <div class="four" style={{ marginTop: "-2em" }}>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe-5bhIdpCg0ryozzocLurfOKCEMt7IsJMe2YxY2Bwk4UPY7g/viewform"
                >
                  <button className="button">rsvp</button>
                </a>
              </p>
            </div>
          </div> */}

          {/* <div className="wrapper">
            <div class="one">
              <p className="event_font">midsemester</p>
            </div>
            <div class="two">
              <p className="event_font">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15
              </p>
            </div>
            <div class="three">
              <p className="event_info">
                7:30 pm
                <br></br>
                Galaxy Rooms
              </p>
            </div>
            <div class="four" style={{ marginTop: "-2em" }}>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a target="_blank" href="https://www.youtube.com">
                  <button className="button">rsvp</button>
                </a>
              </p>
            </div>
          </div>

          <br></br>

          <div className="wrapper">
            <div class="one">
              <p className="event_font">end of semester</p>
            </div>
            <div class="two">
              <p className="event_font">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15
              </p>
            </div>
            <div class="three">
              <p className="event_info">
                6:00 pm
                <br></br>
                ECSS 2.311
              </p>
            </div>
            <div class="four" style={{ marginTop: "-2em" }}>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a target="_blank" href="https://www.youtube.com">
                  <button className="button">rsvp</button>
                </a>
              </p>
            </div>
  </div> */}
        </div>

        <div className="containerCalendar">
          <Iframe url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%236dcff6&amp;ctz=America%2FChicago&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=1&amp;src=M3VxaThqNTE1dXVjNXZrY3EwcTBvdml1bW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%231b3a5d"
            width= {getWidth(innerWidth)}
            height= {getHeight(innerWidth)}
            id=""
            className=""
            display="block"
            position="relative" />
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Events;
