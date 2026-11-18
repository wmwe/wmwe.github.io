import React, { useEffect } from "react";
import "./EventsStyle.css";
import Banner from "./Banner/Banner";
import Iframe from "react-iframe";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";

const calendarUrl =
  "https://calendar.google.com/calendar/embed?src=d74738de82325736227a6d91ea22d96658c92f111473a246499dcc5d6162c3d5%40group.calendar.google.com&ctz=America%2FChicago";

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
          <iframe
            src={`${calendarUrl}&mode=AGENDA&showTitle=0&showNav=0&showTabs=0&showCalendars=0&showPrint=0&showDate=1&showTz=0`}
            title="Upcoming events from Google Calendar"
            width="100%"
            height={getHeight(innerWidth)}
            className="agenda-calendar"
          />
        </div>
        

        <div className="containerCalendar">
        <Iframe
          url={`${calendarUrl}&showTitle=1&showNav=0&showTabs=0&showCalendars=0&showPrint=0&showBorder=0`}
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