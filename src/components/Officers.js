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
            name={"Manasi Vipat"}
            position={"President"}
            image={"photos/officer-photos/Manasi-Vipat.jpg"}
            description={
              "Manasi is a senior majoring in Computer Science and pursuing an Applied Experience Design and Research certificate. She joined WMWE to gain mentorship from women in the industry and build relationships with fellow students. In her free time, she likes to read and play video games."
            }
            linkedin={"https://www.linkedin.com/in/manasivipat/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-2">
          <OfficerCard
            name={"Illiana Rodriguez"}
            position={"Vice President"}
            image={"photos/officer-photos/Illiana-Rodriguez.JPG"}
            description={
              "Illiana is a senior majoring in Computer Science and has served as a WMWE officer since her freshman year. She joined WMWE to connect with other female students in her major, build a strong network, and gain valuable mentorship from women in the engineering field."
            }
            linkedin={"https://www.linkedin.com/in/illiana-rodriguez/"}
            font={"1.1"}
          ></OfficerCard>
        </div>


        <div className="item-3">
          <OfficerCard
            name={"Harper Wood"}
            position={"Secretary"}
            image={"photos/officer-photos/Harper-Wood.jpg"}
            description={
              "Harper is a senior in Computer Science. She loves WMWE because it brings women in engineering together to help each other grow personally and professionally. In her free time, she enjoys solving puzzles: jigsaws, sudoku, crosswords, and lately the NYT Connections."
            }
            linkedin={"https://www.linkedin.com/in/harper-wood-560138223/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-4">
          <OfficerCard
            name={"Devika Amalkar"}
            position={"Events Chair"}
            image={"photos/officer-photos/Devika-Amalkar.jpg"}
            description={
              "Devika is a junior majoring in Computer Science and minoring in Business Administration. Her fields of interest lay in Software Engineering and Data Science, and her involvement in WMWE started as a mentee, then Treasury Chair, and now a Co-Events Chair."
            }
            linkedin={"https://www.linkedin.com/in/devika-amalkar26/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-5">
          <OfficerCard
            name={"Safa Mohammed"}
            position={"Events Chair"}
            image={"photos/officer-photos/Safa-Mohammed.jpeg"}
            description={
              "Safa is a senior in computer science. She joined wmwe to meet like-minded individuals and build a supporting network. The wholesome community and program introduced her to many helpful opportunities as a freshman shaping her time at UTD. She's also a big reader and loves to travel!"
            }
            linkedin={"https://www.linkedin.com/in/safa-mohammed-aa7833195/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-6">
          <OfficerCard
            name={"Gabrielle Kuruvilla"}
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

        <div className="item-7">
          <OfficerCard
            name={"Shraddha Subash"}
            position={"Media Chair"}
            image={"photos/officer-photos/Shraddha-Subash.jpeg"}
            description={
              "Shraddha is a junior studying computer science. She joined WMWE to network with other women in engineering and connect with industry mentors. She loves to dance and paint in her free time."
            }
            linkedin={"https://www.linkedin.com/in/shraddha-subash/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-8">
          <OfficerCard
            name={"Hemal Pathak"}
            position={"Mentoring Team Coordinator"}
            image={"photos/officer-photos/Hemal-Pathak.jpg"}
            description={
              "Hemal is a Graduate student studying Computer Science! This is her 5th semester in WMWE and 3rd semester as an officer. She joined WMWE to gain guidance from industry professionals and make lasting connections with other women engineers. In her free time, she likes to read and bake!"
            }
            linkedin={"https://www.linkedin.com/in/hemal-pathak/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-9">
          <OfficerCard
            name={"Clara Conner"}
            position={"Mentoring Team Coordinator"}
            image={"photos/officer-photos/Clara-Conner.jpg"}
            description={
              "Clara is a senior studying Software Engineering with a minor in Spanish. Clara has been a part of WMWE ever since she was a freshman! She loves how it helps her grow meaningful connections with her peers and industry professionals. In her free time, Clara likes to craft and read."
            }
            linkedin={"https://www.linkedin.com/in/clara-conner/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-10">
          <OfficerCard
            name={"Oviya Selvakumar"}
            position={"Treasurer"}
            image={"photos/officer-photos/Oviya-Selvakumar.jpeg"}
            description={
              "Oviya is a junior in computer science. She joined WMWE to make friends in the same field and build lasting relationships. Fun fact: she loves puzzles and currently learning how to crochet!"
            }
            linkedin={"https://www.linkedin.com/in/oviya-selvakumar/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        
        <div className="item-11">
          <OfficerCard
            name={"Uma Uppuloori"}
            position={"Treasury Committee Member"}
            image={"photos/officer-photos/Uma-Uppuloori.jpg"}
            description={
              "Uma is a junior CS major who has been with WMWE for the past year. She joined WMWE to build a network of like-minded people and gain valuable feedback from supportive industry professionals."
            }
            linkedin={"https://www.linkedin.com/in/uma-uppuloori/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-12">
          <OfficerCard
            name={"Sanjana Kotha"}
            position={"Marketing Chair"}
            image={"photos/officer-photos/Sanjana-Kotha.jpg"}
            description={
              "Sanjana is a junior in Computer Science. She joined WMWE to gain mentorship and guidance in an inclusive atmosphere. The relationships you build are long lasting and allow you to succeed personally and professionally!"
            }
            linkedin={"https://www.linkedin.com/in/sanjana-kotha-4b4233220/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-13">
          <OfficerCard
            name={"Anjali Singh"}
            position={"Marketing Chair"}
            image={"photos/officer-photos/Anjali-Singh.jpg"}
            description={
              "Anjali is a senior majoring in Computer Science. What drew her into WMWE was the supportive community for women in STEM and the various opportunities for personal and professional growth provided. Outside of WMWE, she spends her free time dancing in multiple, competitive hip-hop and kpop dance teams!"
            }
            linkedin={"https://www.linkedin.com/in/anjali-singh-6514b520b/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

      </section>
    </div>
  );
}

export default Officers;
