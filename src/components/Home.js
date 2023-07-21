import React from "react";
import "./Home.css";
import img1 from "../assets/homepage-photo1.png";
import img2 from "../assets/homepage-photo2.png";
import mentoringImg from "../assets/mentoring-image-homepage.png"
import eventsImg from "../assets/events-image-homepage.png"
import jpmorgan from "../assets/jpmorgan.png";
import c1 from "../assets/CapitalOneLogo.png";
import statefarm from "../assets/StateFarmLogo.png";
import ti from "../assets/TILogo.png";
import mathworks from "../assets/MathWorksLogo.png";
import { Button } from "./Button/Button.js";
import Banner from "./Banner/Banner";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate('/about');
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
        children={"Mentor Applications for Fall 2023 are Now Open!"}
        buttons={<Button
          onClick={handleMentorClick}
          buttonColor="white"
          textColor="#00B1F5"
        >
          apply now
        </Button>}
      ></Banner>
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
              textColor={"#1B3A5D"}
            >
            </Button>
          </div>
          <img  className="home-page-intro-image" src={mentoringImg}></img>
        </div>

        <div style={{paddingLeft:"5%", paddingRight:"5%"}}>
          <h2 className="subheading1">what we do.</h2>
          <h2 className="body1">
          WMWE organizes a semesterly mentoring program between undergraduate female students and 
          working professionals. Once you are accepted into the program, we will be place you on a 
          team of 4 mentees and 2 mentors that best suits you. From here on, you will be responsible 
          to meet with your team at least twice a month and cover topics such as resumes, interview 
          tips, and workplace advice. 
            </h2>
          
          <img className="homepage-events" src={eventsImg} ></img>

          <h2 className="body1" style={{paddingBottom: "2%", paddingTop: 0}}>
          In addition to the mentoring program, WMWE also hosts events. We have sponsor events such as “
          A Day in the Life of Software Engineer” and “Resume Tips and Tricks” in addition to Technical 
          workshops led by our officers such as “Firebasics: All about Firebase”, “Intro to Figma and UI/UX”, 
          “Intro to Python”, and so much more. These events are not limited to the members of the mentoring 
          program, but are open to the public. So feel free to swing by! 
            </h2>
        </div>

        <div style={{paddingLeft:"5%", paddingRight:"5%", paddingTop:"2%"}}>
        <h2 className="subheading1">interested in joining the program?</h2>
          <h2 className="body1">
          If you are interested in joining as either a mentor or a mentee, fill out the application form below. 
          Our applications officially open for the Fall 2023 Semester for mentors on July 15th and mentees on August 13th.
            </h2>

            <div className="buttons-div">
            <Button
             onClick={(e) => {
              e.preventDefault();
              window.location.href="https://forms.gle/Qxg4JEP6fPNrkPw47";
              }}
              children={"mentor application (opens July 15th)"}
              buttonColor={"#6DCFF6"}
              textColor={"#1B3A5D"}
            >
            </Button>
            <Button
             onClick={(e) => {
              e.preventDefault();
              window.location.href="https://forms.gle/t3MQ2Hy96QMiBVh79";
              }}
              children={"mentee application (opens Aug. 13th)"}
              buttonColor={"#6DCFF6"}
              textColor={"#1B3A5D"}
            >
            </Button>

            </div>


        </div>

        <div style={{paddingLeft:"5%", paddingRight:"5%", paddingTop:"3%", paddingBottom:"8%"}}>
        <h2 className="subheading1">our past sponsors</h2>
        <div className="sponsors-flex">
          <img src={jpmorgan} className="sponsor-img"></img>
          <img src={statefarm} className="sponsor-img"></img>
          <img src={c1} className="sponsor-img"></img>
          <img src={ti} className="sponsor-img"></img>
          <img src={mathworks} className="sponsor-img"></img>
        </div>

        <h2 className="body1" style={{textAlign:"right", marginTop:"-3%", fontSize:"0.8rem"}}>
          Interested in sponsoring? Reach out to us at wmweatutd@gmail.com
            </h2>

        </div>

      

        {/* <div className="layout1">
          <div>
            <h1 className="subheading1">
            empowered women empowering women.
            </h1>
            <h2 className="body1">
            Women Mentoring Women in Engineering is an organization formed at the University of 
                        Texas at Dallas that is focused on helping women in STEM fields do their ultimate best. 
                        We want to help you make connections with people out in the industry.
            </h2>
          </div>

          <div>
            <img className="homepage-image1" src={img1}></img>
          </div>
        </div>

        <div className="layout1">
          <div>
            <img className="homepage-image2" src={img2}></img>
          </div>

          <div className="textlayout2">
            <h1 className="subheading1">how to join.</h1>
            <h2 className="body1">
              If you’re interested in becoming a mentor or mentee in upcoming semesters, 
                      please fill out the interest form and you will be contacted once applications open up!
            </h2>
          </div>
        </div> */}

        {/* <div className="layout2">
          <h1 className="subheading1">our sponsors.</h1>

          <div class="gallery">
            <figure className="gallery__item gallery__item--1">
              <img src={jpmorgan} class="gallery__img" alt="jpmorgan" />
            </figure>
            <figure class="gallery__item gallery__item--2">
              <img src={jpmorgan} class="gallery__img" alt="jpmorgan" />
            </figure>
            <figure class="gallery__item gallery__item--3">
              <img src={jpmorgan} class="gallery__img" alt="jpmorgan" />
            </figure>
            <figure class="gallery__item gallery__item--4">
              <img src={jpmorgan} class="gallery__img" alt="jpmorgan" />
            </figure>
            <figure class="gallery__item gallery__item--5">
              <img src={jpmorgan} class="gallery__img" alt="jpmorgan" />
            </figure>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
