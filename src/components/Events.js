import React from "react";
import "./EventsStyle.css";

function Events(props) {
  return (
    <div className="big_div">
      <div className="banner1">
        <h3 className="banner-text">
          Mentee applications for Fall 2022 are now open!
        </h3>
        <h3 className="banner-text">apply today</h3>
      </div>

      <p className="header">
        <b>upcoming events.</b>
      </p>

      <div className="event_block_1">
        <p className="event_font">
          kickoff&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          07
        </p>
        <p className="event_info">
          5:30 pm
          <br></br>
          Location: in Discord
        </p>
        <br></br>
        <p className="event_info_2">
          Meet all of our members and connect with your team and MTM to learn
          more about WMWE. We've got cupcakes and some fun events planned!!
        </p>
      </div>

      <div className="event_block_2">
        <p className="event_font">
          women in consuting &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12
        </p>
        <p className="event_info">
          7:00 pm
          <br></br>
          Location: SCI 2.235
        </p>
      </div>

      <div className="event_block_3">
        <p className="event_font">
          salary negotiations &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          19
        </p>
        <p className="event_info">
          6:00 pm
          <br></br>
          Location: SSA 14.265
        </p>
      </div>

      <iframe
        className="calendar"
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%236dcff6&amp;ctz=America%2FChicago&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=1&amp;src=M3VxaThqNTE1dXVjNXZrY3EwcTBvdml1bW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%231b3a5d"
        style="border:solid 1px #1b3a5d"
        style={{
          width: "46%",
          height: "60vh",
          frameborder: "0",
          scrolling: "no",
        }}
      ></iframe>
      <br></br>
      <br></br>
    </div>
  );
}

export default Events;
