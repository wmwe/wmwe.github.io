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
            name={"Soujanya Kamalapur"}
            position={"President"}
            image={"photos/officer-photos/Soujanya Kamalapur.jpg"}
            description={
              "Soujanya is a senior majoring in Computer Science. She loves WMWE because it given her some amazing connections and allowed her to make some of her best friends. In her free time, she enjoys watching movies, working out, and reading."
            }
            linkedin={"https://www.linkedin.com/in/soujanya-kamalapur/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-2">
          <OfficerCard
            name={"Ankita Saha"}
            position={"Vice President"}
            image={"photos/officer-photos/Ankita Saha.jpg"}
            description={
              "Ankita is a junior majoring in Computer Engineering. She loves WMWE because she's able to engage with people from different backgrounds and make meaningful connections for life with mentors and peers. Fun fact: her hair used to be 3 feet long and she's also vice president of another club!"
            }
            linkedin={"https://www.linkedin.com/in/ankitasaha-ce"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-3">
          <OfficerCard
            name={"Tamanna Khurana"}
            position={"Secretary"}
            image={"photos/officer-photos/Tamanna Khurana.jpeg"}
            description={
              "Tammy is a senior Data Science major with a strong passion for data and research. She’s been with WMWE since sophomore year, and truly values how welcoming the community is and all the meaningful mentorship received through this organization. Outside of academics, she enjoys enjoy painting and exploring new cafes."
            }
            linkedin={"https://www.linkedin.com/in/tamanna-k-48a6a1230/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-4">
          <OfficerCard
            name={"Anusha Patel"}
            position={"Mentoring Team Coordinator"}
            image={"photos/officer-photos/Anusha Patel.jpg"}
            description={
              "Anusha is a senior in cs and am one of the current MTCs for WMWE. I’m also the director for acm events and acm developerment under sage. I love ranking places on beli and casually playing tennis."
            }
            linkedin={"https://www.linkedin.com/in/anushapatel6571/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-5">
          <OfficerCard
            name={"Sana Dantulwar"}
            position={"Mentoring Team Coordinator"}
            image={"photos/officer-photos/Sana Dantulwar.jpg"}
            description={
              "Sana is a sophomore majoring in Biomedical Engineering. She joined WMWE to learn from a group of like minded individuals, gain mentorship from professionals, and support the growth of others. In her free time, she likes to listen to audiobooks, play badminton, and sleep."
            }
            linkedin={"https://www.linkedin.com/in/sana-dantulwar/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-6">
          <OfficerCard
            name={"Devika Viju"}
            position={"Marketing Chair"}
            image={"photos/officer-photos/Devika Viju.jpg"}
            description={
              "Devika is a junior majoring in Computer Science. She joined WMWE because she loves to connect with like-minded women, grow her skills, and be part of a supportive community that encourages women in engineering. In her free time, she enjoys watching movies, playing guitar, and playing tennis."
            }
            linkedin={"https://www.linkedin.com/in/devikaviju"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-7">
          <OfficerCard
            name={"Taylor Beers"}
            position={"Marketing Chair"}
            image={"photos/officer-photos/Taylor B.jpg"}
            description={
              "Taylor is a senior in Computer Engineering, graduating in August 2026. I have been a mentee twice, Fall 2023, Spring 2024. I have also been a MTM, Fall 2024. Fun fact: I am from Houston and I grew up on a farm."
            }
            linkedin={"https://www.tinkercad.com/things/lBNrKkOVNFY-two-bit-counter-framework-public-taylor-and-edgar"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-8">
          <OfficerCard
            name={"Krista Caparas"}
            position={"Treasury Chair"}
            image={"photos/officer-photos/Krista Isabelle Caparas.jpg"}
            description={
              "Krista is an undergraduate student majoring in Biomedical Engineering and is in her third semester with WMWE. She loves WMWE because it helps women in engineering obtain guidance from mentors in their field in navigating their careers. Outside of WMWE and academics, she loves doing origami and playing the oboe."
            }
            linkedin={"https://www.linkedin.com/in/krista-caparas/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-9">
          <OfficerCard
            name={"Mercedes Xiong"}
            position={"Treasury Chair"}
            image={"photos/officer-photos/Mercedes Xiong.jpeg"}
            description={
              "Mercedes is a senior majoring in computer science. She loves WMWE because it gives her an opportunity to build connections with women in engineering and and help assist a team with their finances. In her free time, she enjoys reading, designing websites, and working out. Fun fact about her: she's afraid of birds."
            }
            linkedin={"https://www.linkedin.com/in/mercedes-xiong/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-10">
          <OfficerCard
            name={"Tasneem Akram"}
            position={"Events Chair"}
            image={"photos/officer-photos/tasneem akram.jpg"}
            description={
              "Tasneem is a junior majoring in Biomedical Engineering.  She loves WMWE because it creates a supportive community where women in engineering can connect, grow, and encourage each other to succeed.  In her free time, she enjoys walking, hanging out with her friends, and going to different cafes."
            }
            linkedin={"https://www.linkedin.com/in/tasneem-akram-83b09a297/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-11">
          <OfficerCard
            name={"Alison Kao"}
            position={"Events Chair"}
            image={"photos/officer-photos/Alison Kao.jpeg"}
            description={
              "Alison is a junior majoring in Computer Science. She joined WMWE to gain guidance from mentors and build meaningful relationships within a supportive community. In her free time, she loves jigsaw puzzling and dancing."
            }
            linkedin={"https://www.linkedin.com/in/alison-kao/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-12">
          <OfficerCard
            name={"Arya Rane"}
            position={"Outreach Chair"}
            image={"photos/officer-photos/ARYA.jpg"}
            description={
              "Arya is a junior majoring in computer engineering. I joined WMWE for the supportive community and the opportunity to be surrounded by women in engineering while exploring different paths in tech. Outside of WMWE, I love going to concerts, traveling, and playing sports. Fun Fact: I’ve travelled to 20 different countries."
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
            image={"photos/officer-photos/tramanh.jpg"}
            description={
              "Tramanh is a junior majoring in Software Engineering & Business Analytics. She's made some of her closest friends through WMWE and joined freshman year as an MTM. Outside of classes, she loves to try new coffees and teas."
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
