import React from "react";
import Slider from "react-slick"; 
import "./Home.css";
import eventsImg from "../assets/events.png"
import jpmorgan from "../assets/jpmorgan.png";
import c1 from "../assets/CapitalOneLogo.png";
import statefarm from "../assets/StateFarmLogo.png";
import ti from "../assets/TILogo.png";
import mathworks from "../assets/MathWorksLogo.png";
import { Button } from "./Button/Button.js";
import Banner from "./Banner/Banner";
import { useNavigate } from "react-router-dom";

import pic1 from "../assets/midsemester.JPG";
import pic2 from "../assets/midsemester2.png";
import pic3 from "../assets/officers.jpg";
import pic4 from "../assets/we.jpg";
import pic5 from "../assets/galentinesocial.png";
import pic6 from "../assets/programdetails.png";
import pic7 from "../assets/menteeinfo.png";

function Home(props) {
  const navigate = useNavigate();
  
  const navigateToAbout = () => {
    navigate('/about');
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
  ];

  const navigateToEvents = () => {
    navigate('/events');
  };

  const handleMenteeClick = (e) => {
    e.preventDefault();
    window.open('https://forms.gle/t3MQ2Hy96QMiBVh79', '_blank');
  };
  
  const handleMentorClick = (e) => {
    e.preventDefault();
    window.open('https://forms.gle/Qxg4JEP6fPNrkPw47', '_blank');
  };
  
  return (
    <div style={{width: "100vw"}}>
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
      <div className="format">
        <div className="homepage-intro">
          <div className="intro-text">
            <h1  className="heading">
              empowered women empowering women.
              </h1>
              <h2 className="body1" style={{textAlign:"center",paddingBottom: "3%"}}>
              Women Mentoring Women in Engineering is an organization formed at the University of 
                          Texas at Dallas that is focused on helping women in STEM fields do their ultimate best. 
                          We want to help you make connections with people out in the industry.
              </h2>
              <Button
              onClick={navigateToAbout}
                children={"learn more about wmwe"}
                buttonColor={"#6DCFF6"}
                textColor={"#1C3A5C"}
              >
              </Button>
          </div>

          <div className="carousel-container">
            <Slider {...carouselSettings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Carousel Slide ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div style={{paddingLeft:"5%", paddingRight:"5%", marginTop: "-3%"}}>
          <h2 className="subheading1">what we do.</h2>
          <h2 className="body1"> 
          WMWE organizes a semesterly mentoring program between undergraduate female students and 
          working professionals. Once you are accepted into the program, we will place you on a 
          team of 4 mentees and 2 mentors that best suits you. From here on, you will be responsible 
          to meet with your team at least twice a month and cover topics such as resumes, interview 
          tips, and workplace advice. 
          </h2>
          
          <img className="homepage-events" src={eventsImg} ></img>

          <h2 className="body1">
          In addition to the mentoring program, WMWE also hosts events. We have sponsor events such as “
          A Day in the Life of Software Engineer” and “Resume Tips and Tricks” in addition to Technical 
          workshops led by our officers such as “Firebasics: All about Firebase”, “Intro to Figma and UI/UX”, 
          “Intro to Python”, and so much more. These events are not limited to the members of the mentoring 
          program, but are open to the public. So feel free to swing by! 
            </h2>
        </div>

        <div style={{paddingLeft:"5%", paddingRight:"5%", paddingTop:"3%"}}>
          <h2 className="subheading1">our past sponsors.</h2>
          <div className="sponsors-flex">
            <img src={jpmorgan} className="sponsor-img"></img>
            <img src={statefarm} className="sponsor-img"></img>
            <img src={c1} className="sponsor-img"></img>
            <img src={ti} className="sponsor-img"></img>
            <img src={mathworks} className="sponsor-img"></img>
          </div>

          <h2 className="body1" style={{textAlign:"right", marginTop:"-3%", fontSize:"0.8rem", marginBottom:"1%",}}>
            Interested in sponsoring? Reach out to us at wmweatutd@gmail.com</h2>
        </div>

        <div style={{ paddingLeft: "5%", paddingRight: "5%", paddingTop: "3%", paddingBottom: "5%" }}>
          <h2 className="subheading1">follow us on social media!</h2>
          
          <div style={{ display: "flex", gap: "1rem", justifyContent: "left", flexWrap: "wrap" }}>
            <a href="https://www.instagram.com/p/DFDoPACOCnZ/?img_index=1" target="_blank" rel="noopener noreferrer">
              <img src={pic7} alt="Instagram Post 1" className="social-media-img" />
            </a>

            <a href="https://www.instagram.com/p/DFDoPACOCnZ/?img_index=2" target="_blank" rel="noopener noreferrer">
              <img src={pic6} alt="Instagram Post 2" className="social-media-img" />
            </a>

            <a href="https://www.instagram.com/p/DF-2fVCOFDI/" target="_blank" rel="noopener noreferrer">
              <img src={pic5} alt="Instagram Post 3" className="social-media-img" />
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Home;