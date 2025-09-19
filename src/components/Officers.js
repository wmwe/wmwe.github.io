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
            name={"Oviya Selvakumar"}
            position={"President"}
            image={"photos/officer-photos/Oviya-Selvakumar.jpeg"}
            description={
              "Oviya is a senior in computer science. She joined WMWE to make friends in the same field and build lasting relationships. Fun fact: she loves puzzles and currently learning how to crochet!"
            }
            linkedin={"https://www.linkedin.com/in/oviya-selvakumar/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-2">
          <OfficerCard
            name={"Uma Uppuloori"}
            position={"Vice President"}
            image={"photos/officer-photos/Uma-Uppuloori.jpg"}
            description={
              "Uma is a senior CS major who has been with WMWE for the past year. She joined WMWE to build a network of like-minded people and gain valuable feedback from supportive industry professionals."
            }
            linkedin={"https://www.linkedin.com/in/uma-uppuloori/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-3">
          <OfficerCard
            name={"Soujanya Kamalapur"}
            position={"Secretary"}
            image={"photos/officer-photos/Soujanya-Kamalapur.jpeg"}
            description={
              "Soujanya is a junior majoring in Computer Science. She loves WMWE because it gives women the opportunity to build connections and network with like-minded peers. In her free time, she enjoys watching movies, working out, and reading."
            }
            linkedin={"https://www.linkedin.com/in/soujanya-kamalapur/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-4">
          <OfficerCard
            name={"Ankita Saha"}
            position={"Mentoring Team Coordinator"}
            image={"photos/officer-photos/Ankita-Saha.jpg"}
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
            image={"photos/officer-photos/Clara-Conner.jpg"}
            description={
              "Clara is a senior studying Software Engineering with a minor in Spanish. Clara has been a part of WMWE ever since she was a freshman! She loves how it helps her grow meaningful connections with her peers and industry professionals. In her free time, Clara likes to craft and read."
            }
            linkedin={"https://www.linkedin.com/in/anushapatel6571/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-6">
          <OfficerCard
            name={"Charitha Sarraju"}
            position={"Marketing Chair"}
            image={"photos/officer-photos/Charitha-Sarraju.png"}
            description={
              "Charitha is a junior in Computer Science. She joined WMWE to gain mentorship, guidance, and build meaningful connections. In her free time she likes read and crochet."
            }
            linkedin={"https://www.linkedin.com/in/charitha-sarraju/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-7">
          <OfficerCard
            name={"Taylor Beer"}
            position={"Marketing Committee Member"}
            image={"photos/officer-photos/Clara-Conner.jpg"}
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
            position={"Treasury Committee Member"}
            image={"photos/officer-photos/Shannon-Carter.png"}
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
            position={"Treasury Committee Member"}
            image={"photos/officer-photos/Clara-Conner.jpg"}
            description={
              ""
            }
            linkedin={""}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-10">
          <OfficerCard
            name={"Safa Mohammed"}
            position={"Events Chair"}
            image={"photos/officer-photos/Safa-Mohammed.jpeg"}
            description={
              "Safa is a grad student studying computer science. She joined wmwe to meet like-minded individuals and build a supporting network. The wholesome community and program introduced her to many helpful opportunities as a freshman shaping her time at UTD. She's also a big reader and loves to travel!"
            }
            linkedin={"https://www.linkedin.com/in/safa-mohammed-aa7833195/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-11">
          <OfficerCard
            name={"Sanjana Kotha"}
            position={"Events Chair"}
            image={"photos/officer-photos/Sanjana-Kotha.jpg"}
            description={
              "Sanjana is a senior in Computer Science. She joined WMWE to gain mentorship and guidance in an inclusive atmosphere. The relationships you build are long lasting and allow you to succeed personally and professionally!"
            }
            linkedin={"https://www.linkedin.com/in/sanjana-kotha-4b4233220/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-12">
          <OfficerCard
            name={"Swarna Sre G"}
            position={"Outreach Chair"}
            image={"photos/officer-photos/Gabrielle-Kuruvilla.jpeg"}
            description={
              "Gabby is a senior in Computer Science, minoring in Psychology. She joined WMWE to meet supportive women that will be lasting connections. In her free time she likes to dance, watch disney, and obsess over her dogs!"
            }
            linkedin={
              "https://www.linkedin.com/in/gabrielle-kuruvilla-445812229/"
            }
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-13">
          <OfficerCard
            name={"Shraddha Subash"}
            position={"Media Chair"}
            image={"photos/officer-photos/Shraddha-Subash.jpeg"}
            description={
              "Shraddha is a senior studying computer science. She joined WMWE to network with other women in engineering and connect with industry mentors. She loves to dance and paint in her free time."
            }
            linkedin={"https://www.linkedin.com/in/shraddha-subash/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

      </section>
    </div>
  );
}

export default Officers;
