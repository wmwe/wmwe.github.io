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
            name={"Vyshnavi Nalla"}
            position={"President"}
            image={"photos/officer-photos/Vyshnavi-Nalla.png"}
            description={
              "Vyshnavi is a senior in Computer Science interested in mobile and web development. She joined WMWE to help the retention of Women in STEM and be part of a community. In her free time, she loves to take photos and watch horror movies."
            }
            linkedin={"https://www.linkedin.com/in/vyshnavi-nalla/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-2">
          <OfficerCard
            name={"Manasi Vipat"}
            position={"Vice President"}
            image={"photos/officer-photos/Manasi-Vipat.png"}
            description={
              "Manasi is a junior studying computer science, with interest in user experience and mobile/web development. She joined WMWE as a freshman to encourage women in STEM to network and grow as a whole."
            }
            linkedin={"https://www.linkedin.com/in/manasivipat/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-3">
          <OfficerCard
            name={"Lillie McMaster"}
            position={"Secretary"}
            image={"photos/officer-photos/Lillie-McMaster.png"}
            description={
              "Lillie is a senior majoring in Software Engineering. She loves to read fiction novels and her reading goal is 40 books this year. She also loves to travel!"
            }
            linkedin={"https://www.linkedin.com/in/lillie-mcmaster/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-4">
          <OfficerCard
            name={"Kacie Yee"}
            position={"Events Chair"}
            image={"photos/officer-photos/Kacie-Yee.png"}
            description={
              "Kacie is a junior in Computer Science. She joined WMWE as a freshman to connect with fellow women in STEM. A fun fact about her is that she likes to rollerblade around campus!"
            }
            linkedin={"https://www.linkedin.com/in/kacie-yee/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-5">
          <OfficerCard
            name={"Pooja Cheruku"}
            position={"Events Chair"}
            image={"photos/officer-photos/Pooja-Cheruku.png"}
            description={
              "Pooja is a senior in Computer Science. She joined WMWE to form relationships with and learn from students/mentors in the industry! Fun fact, She has a goldendoodle named Chewie like Chewbacca :D"
            }
            linkedin={"https://www.linkedin.com/in/pooja-cheruku/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-6">
          <OfficerCard
            name={"Gabrielle Kuruvilla"}
            position={"Outreach Chair"}
            image={"photos/officer-photos/Gabrielle-Kuruvilla.png"}
            description={
              "Gabrielle is a junior in Computer Science. Fun fact: She is allergic to gluten but loves bread. She joined WMWE to be a part of an organization that helps young women gain confidence and connections in a supportive, comfortable environment."
            }
            linkedin={
              "https://www.linkedin.com/in/gabrielle-kuruvilla-445812229/"
            }
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-6">
          <OfficerCard
            name={"Emily Oh"}
            position={"Media Chair"}
            image={"photos/officer-photos/Emily-Oh.png"}
            description={
              "Emily is a senior in Mechanical Engineering. She loves being involved with fellow STEM students. It keeps her motivated and inspired for her own life and studies."
            }
            linkedin={"https://www.linkedin.com/in/emily-oh-a14707221/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-7">
          <OfficerCard
            name={"Hemal Pathak"}
            position={"Mentoring Team Coordinator"}
            image={"photos/officer-photos/Hemal-Pathak.png"}
            description={
              "Hemal is a junior in Computer Science. Fun fact: She likes to read and bake in her free time! She joined WMWE to gain guidance from industry professionals and make lasting connections with other women engineers!"
            }
            linkedin={"https://www.linkedin.com/in/hemal-pathak/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-8">
          <OfficerCard
            name={"Clara Conner"}
            position={"Mentoring Team Coordinator"}
            image={"photos/officer-photos/Clara-Conner.png"}
            description={
              "Clara is a junior in Software Engineering. She joined WMWE for the opportunity to build connections with other women in engineering, including professionals and fellow students."
            }
            linkedin={"https://www.linkedin.com/in/clara-conner/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-9">
          <OfficerCard
            name={"Illiana Rodriguez"}
            position={"Treasurer"}
            image={"photos/officer-photos/Illiana-Rodriguez.png"}
            description={
              "Illiana is a junior in Computer Science. She joined WMWE because she wanted to meet other girls in her major, make connections, and receive mentorship from women in the engineering field!"
            }
            linkedin={"https://www.linkedin.com/in/illiana-rodriguez/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-10">
          <OfficerCard
            name={"Devika Amalkar"}
            position={"Treasury Committee Member"}
            image={"photos/officer-photos/Devika-Amalkar.png"}
            description={
              "Devika is a sophomore in Computer Science. She believes that WMWE provides an uplifting and comfortable environment for girls pursuing a career in STEM as members are mentored by successful women who are able to guide them through their college years."
            }
            linkedin={"https://www.linkedin.com/in/devika-amalkar26/"}
            font={"0.9"}
          ></OfficerCard>
        </div>

        <div className="item-11">
          <OfficerCard
            name={"Sanjana Jadhav"}
            position={"Marketing Chair"}
            image={"photos/officer-photos/Sanjana-Jadhav.png"}
            description={
              "Sanjana is a senior in Computer Science. She joined WMWE to connect with women in tech & create opportunities for all of us to succeed. Also, she knows how to speak 5+ languages!"
            }
            linkedin={"https://www.linkedin.com/in/sanjanajadhavv/"}
            font={"1.1"}
          ></OfficerCard>
        </div>

        <div className="item-12">
          <OfficerCard
            name={"Sanjana Kotha"}
            position={"Marketing Committee Member"}
            image={"photos/officer-photos/Sanjana-Kotha.png"}
            description={
              "Sanjana is a sophomore in Computer Science. She joined WMWE to gain mentorship and guidance in an inclusive atmosphere. The relationships you build are helpful both personally and professionally!"
            }
            linkedin={"https://www.linkedin.com/in/sanjana-kotha-4b4233220/"}
            font={"0.9"}
          ></OfficerCard>
        </div>
      </section>
    </div>
  );
}

export default Officers;
