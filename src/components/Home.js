import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "./AboutStyle.css";

import eventsImg from "../assets/events.png"
import jpmorgan from "../assets/jpmorgan.png";
import c1 from "../assets/CapitalOneLogo.png";
import statefarm from "../assets/StateFarmLogo.png";
import ti from "../assets/TILogo.png";
import mathworks from "../assets/MathWorksLogo.png";
import { Button } from "./Button/Button.js";
import Banner from "./Banner/Banner";

import pic1 from "../assets/midsemester.JPG";
import pic2 from "../assets/EOS2025.PNG";
import pic3 from "../assets/groupPic.JPG";
import pic4 from "../assets/swe2025.jpg";
import pic5 from "../assets/galentinesocial.png";
import pic6 from "../assets/programdetails.png";
import pic7 from "../assets/menteeinfo.png";
import pic8 from "../assets/bakesale.png";
import pic9 from "../assets/capitalonetourpost.png";
import pic10 from "../assets/ssmxstatefarm.png";
import pic11 from "../assets/wmwexostem.png";

// About Images
import eventpic1 from "./eventpic1.jpg";
import eventpic2 from "./aboutUsPic1.jpg";
import eventpic3 from "./aboutUsPic2.jpg";

import supportwithborder from "./supportwithborder.jpg";
import empowermentwithborder from "./empowermentwithborder.jpg";
import mentorshipwithborder from "./mentorshipwithborder.jpg";

function Home(props) {
  const navigate = useNavigate();

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

  const socialMediaCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: false,
    variableWidth: false,
  };

  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
  ];

  const socialMediaImages = [
    { src: pic7, link: "https://www.instagram.com/p/DFDoPACOCnZ/?img_index=1"},
    { src: pic6, link: "https://www.instagram.com/p/DFDoPACOCnZ/?img_index=2"},
    { src: pic5, link: "https://www.instagram.com/p/DF-2fVCOFDI/"},
    { src: pic8, link: "https://www.instagram.com/p/DGEACbeOTMJ/"},
    { src: pic9, link: "https://www.instagram.com/p/DGVz388ujp3/"},
    { src: pic10},
    { src: pic11, link: "https://www.instagram.com/p/DG9W8JuvqHW/"}
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
              {/*
              <div className="textbody" style={{}}>
                <div className="mission" style={{textAlign:"center",paddingBottom: "3%"}}>
                  <h2 className="section_header">our mission.</h2>
                  <h3 className="body1" style={{textAlign:"center",paddingBottom: "3%"}}>
                    WMWE aims to improve the retention rates of women in tech and STEM
                    fields by giving them a head start on making valuable connections and
                    gaining advice from seasoned professionals who know their way around
                    the industry. We are firm believers in empowered women empowering
                    women!
                  </h3>
                </div>
              </div>
              */}
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
        {/* <section className="home-section">
          <h2 className="subheading1">our mission.</h2>
          <h2 className="body1"> 
          WMWE aims to improve the retention rates of women in tech and STEM
          fields by giving them a head start on making valuable connections and
          gaining advice from seasoned professionals who know their way around
          the industry. We are firm believers in empowered women empowering
          women! 
          </h2>
        </section> */}

        <section className="home-section">
          <h2 className="subheading1">about us.</h2>
          <h2 className="body1"> 
          WMWE aims to improve the retention rates of women in tech and STEM
          fields by giving them a head start on making valuable connections and
          gaining advice from seasoned professionals who know their way around
          the industry. We are firm believers in empowered women empowering
          women! 
          </h2>
          
          <div className="missionpics">
            {/* images for mission */}
            <img className="pic1" src={eventpic1} />
            <img className="pic2" src={eventpic2} />
            <img className="pic3" src={eventpic3} />
          </div>
        </section>

        <section className="home-section">
          <h2 className="subheading1">our pillars.</h2>
        <div
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <div className="pillar">
            <img className="support" src={supportwithborder} />
            <h3 className="body1">
              We strive to provide support for all women through each other. Your
              mentor, team, and everyone in WMWE is there to help you out whenever
              you need it. Before we are a University Wide Organization, we are
              just a group of people that want to help!
            </h3>
          </div>
          <div className="pillar">
            <img className="empowerment" src={empowermentwithborder} />
            <h3 className="body1">
              In the STEM field, women make up only 24% of the entire workforce,
              with the percentage only decreasing with higher positions. In WMWE,
              we strive to empower everyone and help make them stronger and more
              confident in whatever they do. After all, our slogan is “Empowered
              Women Empowering Women”.
            </h3>
          </div>
          <div className="pillar">
            <img className="mentorship" src={mentorshipwithborder} />
            <h3 className="body1">
              By linking you up with a professional woman who is working in the
              STEM field in a semester long mentorship, you will learn everything
              you wanted to know. From professionalism in the workplace, to things
              you can do to upstart your career.
              knowledge!
            </h3>
          </div>
        </div>
        </section>
        <section className="home-section">
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
        </section>

        <div style={{paddingLeft:"5%", paddingRight:"5%", paddingTop:"3%"}}>
          <h2 className="subheading1">our current and past sponsors.</h2>
          <div className="sponsors-flex">
            <img src={jpmorgan} className="sponsor-img"></img>
            <img src={statefarm} className="sponsor-img"></img>
            <img src={c1} className="sponsor-img"></img>
            <img src={ti} className="sponsor-img"></img>
            <img src={mathworks} className="sponsor-img"></img>
          </div>

            <h2 className="body1" style={{textAlign:"right", marginTop:"-3%", fontSize:"0.8rem", marginBottom:"1%"}}>
            Interested in sponsoring? Reach out to us at wmweatutd@gmail.com</h2>
        </div>

        <section className="home-section">
          <h2 className="subheading1">follow us on social media!</h2>
          
          <div className="social-media-carousel">
            <Slider {...socialMediaCarouselSettings}>
              {socialMediaImages.map((item, index) => (
                <div key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.src} alt={item.alt || `Social media post ${index + 1}`} className="social-media-img" />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        
      </div>
    </div>
  );
}

export default Home;