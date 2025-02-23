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
             name="Vibha Tyagi"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="Vibha Tyagi is a seasoned Pre-Sales Leader with 20+ years driving multimillion-dollar revenue growth through strategic solutions, AI, and CRM implementations. An author (My First Book of World Religions), youth advocate (100+ interviews), and community mentor (Women Mentoring Women in Engineering), she also founded a non-profit for disadvantaged students in India. With an MBA from the University of Chicago and an MS in Engineering, she's a PMP-certified expert, speaker on diversity and business preparedness, and an avid traveler and athlete (Everest Base Camp trek, national-level cricket)."
             linkedin="https://www.linkedin.com/in/vibha-tyagi-8b6794/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-2'>
            <OfficerCard
             name="Deepthi Ramesh"
             position="Mentor"
             image="photos/member-photos/DeepthiRamesh.png"
             description="Deepthi Ramesh did her Bachelor's of Engineering in Biotechnology at PESIT, Bangalore and then completed a Master's in Biomedical Engineering at UTD, Texas. Then went on to work in Regulatory Affairs for medical devices at Abbott Laboratories, ACell, Inc, and Integra LifeSciences."
             linkedin="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-3'>
            <OfficerCard
             name="Aathira Satheesh Nair"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="I’m Aathira Satheesh Nair, a Software Developer with a passion for coding. With a Master’s in Computer Science from UT Dallas, I enjoy tackling challenging problems and constantly learning new technologies. Beyond coding, I love mentoring aspiring developers and sharing knowledge. In my free time, I like to cook , travel and watch movies. I’m always seeking opportunities to grow, connect with people, and make a positive impact through my work and personal endeavors."
             linkedin="https://www.linkedin.com/in/aathira0304"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-4'>
            <OfficerCard
             name="Morgan McHugh"
             position="Mentor"
             image="photos/member-photos/MorganMcHugh.png"
             description="I'm a graduate of RPI with a degree in Mechanical and Aeronautical Engineering and a minor in Sustainability Studies. With over two years of experience as a Nightshift Airframe Engineer at American Airlines, I support operations around the clock. Originally from Upstate NY, I enjoy traveling, reading, and the outdoors."
             linkedin="www.linkedin.com/in/morgan-mchugh-815934223"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-5'>
            <OfficerCard
             name="Alexa Marie (Kintanar) Litten"
             position="Mentor"
             image="photos/member-photos/AlexaMarieLitten.png
"
             description="Alexa Marie (Kintanar) Litten is a 777 Aircraft Engineer at American Airlines, with an Electrical Engineering degree from Christian Brothers University. Her career began at FedEx Express as an Avionics Engineer. Passionate about empowering others through technology, she previously worked as an Apple Genius and mentors high school and first-generation college students. She looks forward to mentoring with WMWE."
             linkedin="linkedin.com/in/akintanar"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-6'>
            <OfficerCard
             name="Shrishti Singh"
             position="Mentor"
             image="photos/member-photos/ShrishtiSingh.png"
             description="Dr. Shrishti Singh holds a PhD in Bioengo tineering (2022) from George Mason University. Her research contributed to the development of a new imaging agent that enhances the contrast of tumors when compared to healthy cells. Dr. Singh headed the commercialization of her research and participated in several entrepreneurial development programs. Currently, she works at the University of Michigan Innovation Partnerships as an Innovation Fellow helping Michigan faculty with IP, commercialization, and marketing strategy, including start-up development."
             linkedin="https://www.linkedin.com/in/shrishti-singh-for-dr/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-7'>
            <OfficerCard
             name="Katie McNeeley-Myers"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="My passion is teaching. I am truly fortunate to have a fulfilling career doing what I love. As an instructor, I take great pride in seeing my students succeed both in the classroom and in their future endeavors. I am fully committed to the training of the next generation of engineers and scientists by taking an interactive approach to assist students in building a firm foundation in knowledge while inspiring them to be life-long learners."
             linkedin="https://www.linkedin.com/in/kathleenmcneeley/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-8'>
            <OfficerCard
             name="Rym Zalila-Wenkstern"
             position="Mentor"
             image="photos/member-photos/RymWenkstern.png"
             description="Dr. Rym Z. Wenkstern is a Professor of Computer Science at the Erik Jonsson School of Engineering and Computer Science. She is the Founding Director of the UT Dallas Center for Smart Mobility and the Director of the Smart Cities Applied Research Lab. Her research focuses on all aspects of engineering large, complex, real-world systems using the agent paradigm, with an emphasis on Smart Cities challenges."
             linkedin="https://www.linkedin.com/in/rym-zalila-wenkstern-031bab/"
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

            <div className='item-11'>
            <OfficerCard
             name="Leslie Marquez Arroyo"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="Leslie has 13 years of semiconductor experience at Texas Instruments, currently as an Applications Manager in High Voltage Power. She previously served as a Systems Engineer and Applications Engineer, supporting high-power drivers and industrial/automotive customers. She also managed a validation team for Automotive Battery Management. Leslie holds BSEE and MSEE degrees and was elected to TI's Technical Ladder in 2018 and 2024."
             linkedin="LinkedIn Profile Address:	https://www.linkedin.com/in/leslie-marquez-arroyo-38298b4a/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-12'>
            <OfficerCard
             name="Malak Al-Delahmawi"
             position="Mentor"
             image="photos/member-photos/MalakAl-Delahmawi.png"
             description="Hi, I'm Malak Al-Delahmawi from Dearborn, Michigan. I work as a Infotainment Software Engineer at Ford Motor Company and have a background in Software Engineering from the University of Michigan - Dearborn. Outside of work, I enjoy travelling, spending time in nature, and spoiling my cat!"
             linkedin="https://www.linkedin.com/in/maldelah/"
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
             name="Preethi Venkatesh"
             position="Mentor"
             image="photos/member-photos/PreethiVenkatesh.png"
             description="Preethi Venkatesh, AI Solutions Manager at Intel enabling developers/CSP/ ISVs/ Partners with Intel's optimizations for PyTorch on Intel Xeon and Gaudi processors. Preethi also leads a team of Solutions Engineer to help deploy optimized solutions/applications on LLM, RAG and Visual LLMs utilizing Intel optimized AI tools."
             linkedin="https://www.linkedin.com/in/venk4"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-16'>
            <OfficerCard
             name="Chen Cao"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="I am an Assistant Professor of Bioengineering researching lineage commitment and cell type evolution, specializing in single-cell sequencing, bioinformatics, and regulatory network reconstruction. I am dedicated to student mentorship across all levels and serve on the department's Graduate Student Search Committee. I also participate in professional development panels and university safety committees. I contribute to the scientific community as a poster competition judge and journal reviewer (Nucleic Acid Research, Developmental Biology)."
             linkedin="www.linkedin.com/in/chen-cao-80416b49"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-17'>
            <OfficerCard
             name="Sanjana Srinath"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="Hi! I graduated from UT Austin with B.S. and M.S.E. degrees in Biomedical Engineering and am currently pursuing an M.S. in Biostatistics and Data Science from UTHealth Houston. I'm passionate about the intersection between engineering, healthcare, and business and developing innovative and need-based medical solutions that bridge gaps in health equity. In my free time I love cooking, yoga, rewatching my favorite TV shows, and traveling."
             linkedin="https://www.linkedin.com/in/sanjana-srinath/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-18'>
            <OfficerCard
             name="Isabel Stavros"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="Isabel Stavros is a Mechanical Engineer at Garver with experience in HVAC design. Originally from Mexico, she moved to the U.S. 20 years ago and earned a Mechanical Engineering degree from UTD. She worked as an engineer at AOS Engineering before joining Garver, where she continues to develop her skills and knowledge. She enjoys mentoring students at UTD, offering guidance and support to help them succeed in their careers as engineers."
             linkedin="http://linkedin.com/in/istavros"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-19'>
            <OfficerCard
             name="Marigrace Seaton"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="Hi! I’m Marigrace (also go by MG!) and I’m an Associate Software Engineer at JPMorganChase. I started after graduating from UNC-Chapel Hill in 2021 in Plano, TX, and have since worked on four different projects for several teams. I currently work on the Chase Account Summary team in NYC. I specialize in backend microservice APIs, particularly in the cloud."
             linkedin="linkedin.com/in/marigraceseaton"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-10'>
            <OfficerCard
             name="Seemanthini Mahadev"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description="Leading identity and access management teams in JPmorgan Chase"
             linkedin="https://www.linkedin.com/in/seemanthini-mahadev-67421212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-20'>
            <OfficerCard
             name="Jessica Hawkins"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/jessicahawkins-phd/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-21'>
            <OfficerCard
             name="Sneha Pankaj"
             position="Mentor"
             image="photos/member-photos/SnehaPankaj.png"
             description=""
             linkedin="linkedin.com/in/snehapankaj"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-22'>
            <OfficerCard
             name="Adi Weissfield"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/adiweissfield"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-23'>
            <OfficerCard
             name="Monica Arellano"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-24'>
            <OfficerCard
             name="Dr. Lucy Chikwetu"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-25'>
            <OfficerCard
             name="Divya Vanhi Chinnapanuganti"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-26'>
            <OfficerCard
             name="Stephanie Hines"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-27'>
            <OfficerCard
             name="Sydney Wong"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-28'>
            <OfficerCard
             name="Keerthiha Arangarajan"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-29'>
            <OfficerCard
             name="Sandhya Rani Dodda"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-30'>
            <OfficerCard
             name="Roopa Bhamidipati"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-31'>
            <OfficerCard
             name="Chidinma Princess Ohagwa"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-32'>
            <OfficerCard
             name="Deeptha Parsi Diwakar"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-33'>
            <OfficerCard
             name="Anoushka Shahani"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-34'>
            <OfficerCard
             name="Shilpi Singh"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-35'>
            <OfficerCard
             name="Vyshnavi Nalla"
             position="Mentor"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-36'>
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