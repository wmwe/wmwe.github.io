import React from "react";
import { OfficerCard } from "./Wmwe-ui";
import "./Officers.css";
import "./Home.css";

function Officers(props) {
  return (
    <div style={{ position: "relative" }}>
      <h1 className="header-text">meet the team.</h1>

      <section className="container2">

      <div className="item-1">
      <OfficerCard
            name={"Uma Uppuloori"}
            position={"President"}
            image={"photos/officer-photos/umaOfficer.JPG"}
            description={
              "Uma is a senior CS major who has been with WMWE for the past 3 years. She joined WMWE to build a network of like-minded people and gain valuable feedback from supportive industry professionals."
            }
            linkedin={"https://www.linkedin.com/in/uma-uppuloori/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-2">
          <OfficerCard
            name={"Soujanya Kamalapur"}
            position={"Vice President"}
            image={"photos/officer-photos/soujanyaOfficer.png"}
            description={
              "Soujanya is a junior majoring in Computer Science. She loves WMWE because it gives women the opportunity to build connections and network with like-minded peers. In her free time, she enjoys watching movies, working out, and reading."
            }
            linkedin={"https://www.linkedin.com/in/soujanya-kamalapur/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-3">
          <OfficerCard
            name={"Tamanna Khurana"}
            position={"Secretary"}
            image={"photos/officer-photos/Tammy.jpeg"}
            description={
              "Hi! I’m a junior majoring in Data Science with a strong passion for healthcare data and research. I’ve been with WMWE since my sophomore year, and I truly value how welcoming the community is and all the meaningful mentorship I’ve received through this organization. Outside of academics, I enjoy painting and exploring new cafes in my free time."
            }
            linkedin={"https://www.linkedin.com/in/tamanna-k-48a6a1230/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-4">
          <OfficerCard
            name={"Ankita Saha"}
            position={"Mentoring Team Coordinator"}
            image={"photos/officer-photos/ankitaOfficer.JPG"}
            description={
              "Hi, my name is Ankita Saha, and I am a computer engineering sophomore. I love participating in extracurriculars such as music, dance, and digital art. Fun fact: my hair used to be three feet long!"
            }
            linkedin={"https://www.linkedin.com/in/ankitasaha-ce"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-5">
          <OfficerCard
            name={"Anusha Patel"}
            position={"Mentoring Team Coordinator"}
            image={"photos/officer-photos/anushaOfficer.JPG"}
            description={
              "Hi, I’m a junior in cs and am one of the current MTCs for WMWE. I’m also an officer for acm events and acm developerment under sage. I love ranking places on beli and casually playing tennis."
            }
            linkedin={"https://www.linkedin.com/in/anushapatel6571/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-6">
          <OfficerCard
            name={"Charitha Sarraju"}
            position={"Marketing Chair"}
            image={"photos/officer-photos/charithaOfficerPic.JPG"}
            description={
              "Charitha is a junior in Computer Science. She joined WMWE to gain mentorship, guidance, and build meaningful connections. In her free time she likes read and crochet."
            }
            linkedin={"https://www.linkedin.com/in/charitha-sarraju/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-7">
          <OfficerCard
            name={"Taylor Beers"}
            position={"Marketing Chair"}
            image={"photos/officer-photos/TaylorBeers.jpg"}
            description={
              "Hello! I am a senior in Computer Engineering, graduating in August 2026. I have been a mentee twice, Fall 2023, Spring 2024. I have also been a MTM, Fall 2024. Fun fact: I am from Houston and I grew up on a farm."
            }
            linkedin={"https://www.tinkercad.com/things/lBNrKkOVNFY-two-bit-counter-framework-public-taylor-and-edgar"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-8">
          <OfficerCard
            name={"Shannon Carter"}
            position={"Treasury Chair"}
            image={"photos/officer-photos/shannonOfficer.JPG"}
            description={
              "Shannon is a senior studying Computer Science and has been part of WMWE since her freshman year. She is passionate about empowering women in technology through mentorship and networking. Outside of WMWE, Shannon loves spending time with her friends and exploring new restaurants."
            }
            linkedin={"https://www.linkedin.com/in/shannon-carter-690035254/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-9">
          <OfficerCard
            name={"Rose"}
            position={"Treasury Chair"}
            image={"photos/officer-photos/roseOfficerPic.JPG"}
            description={
              "Rose Nguyen is a senior majoring in Mechanical Engineering at UT Dallas. She joined WMWE after building meaningful connections through the mentoring program and was inspired by the supportive officer team. With prior experience as a small business owner and CRM consultant, Rose brings strong organizational and financial skills to her role as Treasurer. In her free time, she enjoys cooking with her pressure cooker."
            }
            linkedin={"https://www.linkedin.com/in/crmqueen/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-10">
          <OfficerCard
            name={"Tasneem Akram"}
            position={"Events Chair"}
            image={"photos/officer-photos/Tasneem.jpg"}
            description={
              "Tasneem is a Sophomore in biomedical engineering.  She joined WMWE to make friends and gain guidance in mentorship and her industry of study.  In her free time she likes to crochet, hang out with friends, and bake."
            }
            linkedin={"https://www.linkedin.com/in/tasneem-akram-83b09a297/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-11">
          <OfficerCard
            name={"Alison Kao"}
            position={"Events Chair"}
            image={"photos/officer-photos/AlisonKao.jpg"}
            description={
              "Alison is a sophomore majoring in Computer Science. She joined WMWE to gain guidance from mentors and build meaningful relationships within a supportive community. In her free time, she loves jigsaw puzzling and dancing."
            }
            linkedin={"https://www.linkedin.com/in/alison-kao/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-12">
          <OfficerCard
            name={"Arya Rane"}
            position={"Outreach Chair"}
            image={"photos/officer-photos/Arya.jpeg"}
            description={
              "Hi! My name is Arya, and I’m a sophomore majoring in computer engineering. I joined WMWE for the supportive community and the opportunity to be surrounded by women in engineering while exploring different paths in tech. Outside of WMWE, I love going to concerts, traveling, and playing sports. Fun Fact: I’ve travelled to 20 different countries."
            }
            linkedin={
              "https://www.linkedin.com/in/aryarane/"
            }
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-13">
          <OfficerCard
            name={"Tramanh Trinh"}
            position={"Media Chair"}
            image={"photos/officer-photos/TramanhHeadshot.png"}
            description={
              "Hi! This is Tramanh, a current sophomore in Software Engineering. I joined WMWE last year to join a supportive community of women engineers and gain mentorship. Outside of WMWE, I’m a Project Manager under ACM and love journaling & trying restaurants :)"
            }
            linkedin={
              "https://www.linkedin.com/in/tramanhtrinh/"
            }
            font={"1.1"}
          ></OfficerCard>
        </div>

      </section>
    </div>
  );
}

export default Officers;
