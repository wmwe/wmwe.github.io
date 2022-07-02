import React from "react";
import "./EventsStyle.css";

function Events(props) {
  return (
    <div>
      <p className="header">upcoming events.</p>
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
    </div>
  );
}

export default Events;
