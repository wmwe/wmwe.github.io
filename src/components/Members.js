import React from 'react';
import { OfficerCard } from './Wmwe-ui';
import './Members.css';
import './Home.css';
import './Mentees.js'
import { useNavigate } from "react-router-dom";

function Members(props) {
    const navigate = useNavigate();
    const navigateToMembers = () => {
        navigate('/members');
    };
    const navigateToMentees = () => {
        navigate('/mentees');
    };
    return (
        <div style={{position:'relative'}}>

            <div className='mini__nav'>
            <button className="navButton" onClick={navigateToMembers}><h2 className='header-text1'>mentors</h2></button>
            <button className="navButton" onClick={navigateToMentees}><h2 className='header-text2'>mentees</h2></button>
            </div>
             <section className='container'>

            <div className='item-1'>
            <OfficerCard
             name="Stephanie Barnard"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-2'>
            <OfficerCard
             name="Shrishti Singh"
             position="Mentor"
             image="photos/member-photos/ShrishtiSingh.png"
             description="Dr. Shrishti Singh holds a PhD in Bioengo tineering (2022) from George Mason University. Her research contributed to the development of a new imaging agent that enhances the contrast of tumors when compared to healthy cells. Dr. Singh headed the commercialization of her research and participated in several entrepreneurial development programs. Currently, she works at the University of Michigan Innovation Partnerships as an Innovation Fellow helping Michigan faculty with IP, commercialization, and marketing strategy, including start-up development."
             linkedin="https://www.linkedin.com/in/shrishti-singh-for-dr/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-3'>
            <OfficerCard
             name="Sarina Khamoshi"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-4'>
            <OfficerCard
             name="Katie Myers"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-5'>
            <OfficerCard
             name="Isabel Stavros"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-6'>
            <OfficerCard
             name="Myanh Tran"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-7'>
            <OfficerCard
             name="Anusha Jain"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-8'>
            <OfficerCard
             name="Mahima Singh"
             position="Mentor"
             image="photos/member-photos/E2-E - Mahima Singh.jpg"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-9'>
            <OfficerCard
             name="Dominique Tran"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="Hello! My name is Dominique Tran, and I‘ve been a Software Developer at JPMC for 4 years doing backend work. I’m excited to help out and give guidance in whatever way I can! I want to support women in engineering and encourage them to follow their passions!"
             linkedin="https://www.linkedin.com/in/dominique-tran"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-10'>
            <OfficerCard
             name="Katy Brown"
             position="Mentor"
             image="photos/member-photos/Katy_Brown.jpg"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-11'>
            <OfficerCard
             name="Sisi Aarukapalli"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-12'>
            <OfficerCard
             name="Tynesha Heard"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-13'>
            <OfficerCard
             name="Reena Joseph"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="With a wealth of experience, a passion for excellence, and a deep love for my work, I am an Innovator, Complex Problem Solver, and Game Changer. My commitment to choosing compassion, love, and joy drives my approach to project management and customer experience, allowing me to make a meaningful impact and inspire others on this beautiful journey we call life"
             linkedin="https://www.linkedin.com/in/reejosep/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-14'>
            <OfficerCard
             name="Sabrina Jehanzeb"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="I am a Vice President - Lead Software Engineer at JPMorganChase. I am part of a team that helps accelerate the adoption of best engineering practices in Cloud (AWS), DevOps, Testing, Front-End, and anything that engineers work on, ranging from internal to external customer-facing applications. 

I am passionate about new architecture patterns, continuous improvement, and creating scalable and reliable applications utilizing the cloud with observability in place. Along with my daily work, I have led several successful trainings, workshops, and hackathons ranging from AWS to internal tooling to over 500+ engineers."
             linkedin="https://www.linkedin.com/in/sabrina-jehanzeb/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-15'>
            <OfficerCard
             name="Seemanthini Mahadev"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="Leading identity and access management teams in JPmorgan Chase"
             linkedin="https://www.linkedin.com/in/seemanthini-mahadev-67421212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-16'>
            <OfficerCard
             name="Monica Arellano"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>


            <div className='item-17'>
            <OfficerCard
             name="Isabel Stavros"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="Isabel Stavros is a Mechanical Engineer at Garver with experience in HVAC design. Originally from Mexico, she moved to the U.S. 20 years ago and earned a Mechanical Engineering degree from UTD. She worked as an engineer at AOS Engineering before joining Garver, where she continues to develop her skills and knowledge. She enjoys mentoring students at UTD, offering guidance and support to help them succeed in their careers as engineers."
             linkedin="http://linkedin.com/in/istavros"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-18'>
            <OfficerCard
             name="Marigrace Seaton"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="Hi! I’m Marigrace (also go by MG!) and I’m an Associate Software Engineer at JPMorganChase. I started after graduating from UNC-Chapel Hill in 2021 in Plano, TX, and have since worked on four different projects for several teams. I currently work on the Chase Account Summary team in NYC. I specialize in backend microservice APIs, particularly in the cloud."
             linkedin="linkedin.com/in/marigraceseaton"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-19'>
            <OfficerCard
             name="Sneha Pankaj"
             position="Mentor"
             image="photos/member-photos/SnehaPankaj.png"
             description=""
             linkedin="linkedin.com/in/snehapankaj"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-20'>
            <OfficerCard
             name="Sandhya Rani Dodda"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>


            <div className='item-21'>
            <OfficerCard
             name="Sanjana Jadhav"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            </section>   
        </div>
    );
}

export default Members;