import React from "react";
import "./EventsStyle.css";

function Events(props) {
  return (
    <div>
      <p className="header">
        <b>upcoming events.</b>
      </p>
      <br></br>
      <br></br>
      <br></br>

      <div className="outer-container">
        <div className="containerEvents">
          <div className="event_block_1">
            <p className="event_font">
              midsemester&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              15
            </p>
            <p className="event_info">
              7:00 pm
              <br></br>
              ECSW 1.315
            </p>
            <a target="_blank" href="https://www.youtube.com">
              <button className="button">rsvp</button>
            </a>
          </div>

          <div className="event_block_2">
            <p className="event_font">
              JS
              workshop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              20
            </p>
            <p className="event_info">
              7:00 pm
              <br></br>
              ECSW 1.315
            </p>
          </div>

          <div className="event_block_3">
            <p className="event_font">
              end of
              semester&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              29
            </p>
            <p className="event_info">
              7:00 pm
              <br></br>
              ECSW 1.315
            </p>
          </div>

          <div class="wrapper">
            <div class="one">One</div>
            <div class="event_font">&nbsp;&nbsp;&nbsp;&nbsp;15</div>
            <div class="three">Three</div>
            <div>
              <a target="_blank" href="https://www.youtube.com">
                <button className="button">rsvp</button>
              </a>
            </div>
          </div>
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
