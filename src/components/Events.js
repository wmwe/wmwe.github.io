import React from "react";
import "./EventsStyle.css";

function Events(props) {
  return (
    <div>
      <div className="banner1">
        <h3 className="banner-text">
          Mentee applications for Spring 2023 are now open!
        </h3>
        <h3 className="banner-text">apply today</h3>
      </div>

      <p className="header">
        <b>upcoming events.</b>
      </p>
      <br></br>
      <br></br>

      <div className="outer-container">
        <div className="containerEvents">
          <div className="wrapper">
            <div class="one">
              <p className="event_font">bracelet social</p>
            </div>
            <div class="two">
              <p className="event_font">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9
              </p>
            </div>
            <div class="three">
              <p className="event_info">
                7:00 pm
                <br></br>
                Location: SCI 2.235
              </p>
            </div>
            <div class="four" style={{ marginTop: "-2em" }}>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  target="_blank"
                  href="https://forms.gle/JW19TusAfwy1dt616"
                >
                  <button className="button">rsvp</button>
                </a>
              </p>
            </div>
          </div>

          <br></br>

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
          <iframe
            className="calendar"
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%236dcff6&amp;ctz=America%2FChicago&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=1&amp;src=M3VxaThqNTE1dXVjNXZrY3EwcTBvdml1bW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%231b3a5d"
            style="border:solid 1px #1b3a5d"
            style={{
              width: "40%",
              height: "60vh",
              frameborder: "0",
              scrolling: "no",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Events;
