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
             name={"Aishwarya Krishna Allada"}
             position={"Mentor"}
             image={"photos/member-photos/AishwaryaAllada.jpeg"}
             description={'Aishwarya is a Master of Applied Science (Computer Science) graduate from the University of Waterloo with experience in the research field of Pattern Analysis and Machine Intelligence. She is currently working as a Data Scientist at Cisco and her research interests lie in Natural Language Understanding, Computer Vision and Artificial Intelligence. Apart from keeping up with the latest research and technology trends, she spends her free time sketching, singing and playing badminton.'}
             linkedin={'https://www.linkedin.com/in/deep-learner/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-2'>
            <OfficerCard
             name={"Ariel Inman"}
             position={"Mentor"}
             image={"photos/member-photos/ArielInman.jpg"}
             description={'When I\'m not busy reading, you can find me in Allstate\'s technology department. I\'m part of the Technology Leadership Development Program which means I get to try out a new tech role every year. After spending time in retail in my early career, I worked my way into the tech field as a Associate Consultant at an IT firm and a DBA Intern at Allstate. I graduated with a Computer Information Systems degree and a double minor in IT and Business. (Well, maybe "graduated" is a strong word since it was 2020 and we "walked" the stage virtually.) Software Engineer, Project Manager, Product Owner, and User Change Management Consultant are just a few of the hats I\'ve worn. You can also find me working as a Board Director for intrapreneurs@allstate, an employee led group focused on providing resources and support to innovators and creative thinkers in the enterprise.'}
             linkedin={'https://www.linkedin.com/in/marlinda-ariel-inman-63816a164/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-3'>
            <OfficerCard
             name={"Brishty Som"}
             position={"Mentor"}
             image={"photos/member-photos/BrishtySom.jpeg"}
             description={'Brishty is a full-time electrical engineer at Collins Aerospace working in FPGA/ASIC board solutions for their communication/ navigation systems. Her passions include learning new microtechnology, applying electrical and computer engineering skills in the aerospace, defense, and computer hardware industries, as well as painting (follow @brishty_paints on Instagram if interested in her artwork) and trying to make a difference in today\'s world.'}
             linkedin={'https://www.linkedin.com/in/brishtysom/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-4'>
            <OfficerCard
             name={"Divya Bachina"}
             position={"Mentor"}
             image={"photos/member-photos/DivyaBachina.jpg"}
             description={'Hello! My name is Divya Bachina and I am a current software engineer at JP Morgan Chase in their Plano office! I graduated from Rensselaer Polytechnic Institute in NY in May 2022, and I moved to Texas for my job. I also enjoy teaching students and helping students with their math and physics homework. I’ve interned at JPMC before I began full time, but even before that I was a business analyst intern at an indie game startup where I was exposed to rapid prototyping and marketing. I love mentoring others and would love to be a part of the journey in helping you get to your destination. In my free time, I love to cook and paint and try new restaurants! Looking forward to meeting everyone!'}
             linkedin={'https://www.linkedin.com/in/divya-bachina/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-5'>
            <OfficerCard
             name={"Elisa Flores Saenz"}
             position={"Mentor"}
             image={"photos/member-photos/ElisaFloresSaenz.jpg"}
             description={'I\'m Elisa Flores Saenz and am currently working as a Software Engineer at JP Morgan Chase. I was born in Mexico and have been living in the USA since I was 12. I graduated from Texas A&M with a major in Computer Science and minor in Business and Cybersecurity in May 2022.'}
             linkedin={'https://www.linkedin.com/in/elisa-flores-saenz-a48b74151/'}
             font={'1.1'}
             ></OfficerCard>
            </div>
            <div className='item-6'>
            <OfficerCard
              name={"Emily Quintanilla"}
              position={"Mentor"}
              image={"photos/member-photos/EmilyQuintanilla.jpeg"}
              description={'Hi, my name is Emily Quintanilla! I graduated May 2021 from Texas Tech University with a Bachelor of Science in Computer Science and a minor in Transmedia (Technology in Art). I started in the Software Engineer Program (SEP) at J.P. Morgan Chase & Co. in July 2021, where I currently work in Corporate & Investment Banking! '}
              linkedin={'https://www.linkedin.com/in/emilyequintanilla/'}
              font={'1.1'}
             ></OfficerCard>
            </div>
            <div className='item-7'>
            <OfficerCard
             name={"Harita Nagendran"}
             position={"Mentor"}
             image={"photos/member-photos/HaritaNagendran.jpg"}
             description={'I completed my Masters in Biomedical Engineering from UT Dallas and interned as a Biomedical Engineer. Wearing multiple hats as an intern helped me land my first job as a Regulatory Affairs Specialist - Project Management in Smith+Nephew. Having gained 4 years of project management experience I then moved to my current role as a Project Manager within the Design and Development team of Varian, a Seimens Healthineers Company. '}
             linkedin={'https://www.linkedin.com/in/haritanagendran/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-8'>
            <OfficerCard
             name={"Hui Ouyang"}
             position={"Mentor"}
             image={"photos/member-photos/HuiOuyang.jpg"}
             description={'Hui Ouyang is an Assistant Professor of Mechanical Engineering at the University of Texas at Dallas. Dr. Ouyang earned her Ph.D. from the University of Minnesota at Twin-cities (Aerosol Science and Technology) and her MS from the University of Akron (MEMS lab). She is the recipient of the Doctoral dissertation Fellowship award in 2014 at UMN. She has taught both ME undergraduate and graduate courses. She is the recipient of the Outstanding Faculty Teaching Award in 2019 at UTD. Her research areas of interest include aerosol measurements/control and aerosol transport in lung systems for disease control (virus) and for drug delivery (local treatment). '}
             linkedin={'https://www.linkedin.com/in/hui-ouyang-90508420/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-9'>
            <OfficerCard
             name={"Joanna Borba"}
             position={"Mentor"}
             image={"photos/member-photos/JoannaBorba.jpg"}
             description={'Joanna is currently a Software Engineer at JPMorgan Chase in Plano, Texas. She graduated from Old Dominion University and is currently pursuing a Master of Science in Computer Science.'}
             linkedin={'https://www.linkedin.com/in/jborbs/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-10'>
            <OfficerCard
             name={"Katy Brown"}
             position={"Mentor"}
             image={"photos/member-photos/KatyBrown.jpg"}
             description={'I am Systems Administrator for Lockheed Martin, currently looking to transition back into software engineering. I have been mentoring with WMWE for the last 4 semesters. It has been a joy to help support women in Computer Science and Software Engineering and I look forward to continue to work with such a great organization.'}
             linkedin={'https://www.linkedin.com/in/kathryn-brown-362455160/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-11'>
            <OfficerCard
             name={"Marigrace Seaton"}
             position={"Mentor"}
             image={"photos/member-photos/MarigraceSeaton.jpeg"}
             description={'Hi! My name is Marigrace, but most people call me MG. I am in my second year of the Software Engineer Program at JPMorgan Chase. My team manages several backend Java APIs and storing data in a Cassandra database. I\'m originally from St. Louis, Missouri, but I graduated in 2021 from the University of North Carolina at Chapel Hill with a B.S. in Computer Science. Some of my favorite things to do outside of work are read (I host a book club every month), go on coffee walks (I like to try a new coffee shop every time!), and listen to podcasts (I\'m really into true crime ones right now). '}
             linkedin={'https://www.linkedin.com/in/marigraceseaton/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-12'>
            <OfficerCard
             name={"Moriah Seabaugh"}
             position={"Mentor"}
             image={"photos/member-photos/MoriahSeabaugh.jpeg"}
             description={'Moriah is a Software engineer and avid knowledge collector seeking to expand the ways humans adapt to and interact with the machines in their world. She is passionate about mechanical and software solutions that improve safety and quality of life for all. A believer in equitable access to the technology and training needed to assist workers with new skills as automation and software technology evolves.'}
             linkedin={'https://www.linkedin.com/in/moriah-humphries/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-13'>
            <OfficerCard
             name={"Niruti Dhoble"}
             position={"Mentor"}
             image={"photos/member-photos/NirutiDhoble.jpg"}
             description={'Niruti is a Software Engineer at JPMorgan Chase. She graduated with a Bachelor\'s in Electrical and Computer Engineering and a Minor in Business Administration from the University of Texas at Austin.'}
             linkedin={'https://www.linkedin.com/in/niruti-dhoble/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-14'>
            <OfficerCard
             name={"Rosario Rojas Vidales"}
             position={"Mentor"}
             image={"photos/member-photos/RosarioRojasVidales.jpeg"}
             description={'I am a full-stack software engineer at SoundExchange. I graduated from UTD with a Bachelor\'s in Computer Science.'}
             linkedin={'https://www.linkedin.com/in/rosario-rojas-vidales/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-15'>
            <OfficerCard
             name={"Sandhya Rani Dodda"}
             position={"Mentor"}
             image={"photos/member-photos/SandhyaRaniDodda.jpg"}
             description={'I lead the Strategic Initiatives & Business Operations of Cloud Security at Cisco. I have around 15 years of experience in Change & Release Management, Strategy & Operations, Process Improvement, Project & Program Management, DevOps & Agile Transformation and cloud technologies.'}
             linkedin={'https://www.linkedin.com/in/sandhya-rani-dodda/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-16'>
            <OfficerCard
             name={"Temi Adiyeri"}
             position={"Mentor"}
             image={"photos/member-photos/OluwatosinAdeyeri.jpeg"}
             description={'Hello Ladies! My name is Temi Adeyeri and I am currently a Software Engineer at JP Morgan Chase. I am originally from Bowie, Maryland. I graduated in May 2022 from THE Morgan State University in Baltimore, Maryland with a degree in Electrical and Computer Engineering. I am so excited to meet you all and connect! '}
             linkedin={'https://www.linkedin.com/in/oluwatosin-adeyeri-0ab956186/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-17'>
            <OfficerCard
             name={"Vivian Young"}
             position={"Mentor"}
             image={"photos/member-photos/VivianYoung.jpg"}
             description={'Vivian Young graduated with a BS in Mechanical Engineering at Baylor University and is currently working on her MBA at UT Dallas. She has taken on several roles including mechanical foreman, data analyst, and product owner, and she is currently working as a Sr. Software Engineer/Computer Vision Engineer at BNSF Railway.'}
             linkedin={'https://www.linkedin.com/in/vivian-belle-young/'}
             font={'1.1'}
             ></OfficerCard>
            </div>
            
            <div className='item-18'>
            <OfficerCard
             name={"Alia Mahama-Rodriguez"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Prior to joining the Konopka Lab, Alia earned a B.S. in Biomedical Engineering at the University of Texas at Dallas with a minor in Neuroscience. As an undergraduate, she worked as a Bioinformatician at the Simmons Comprehensive Cancer Center under Dr. Isaac Chan and at Abbott Neuromodulation. She is fascinated with perturbational neurobiology and the impact informatics and data mining poses for the individual differentiation and personalization of prognoses amongst patient populations. In her spare time, she volunteers as a Hospital Advocate at the Dallas Area Rape Crisis Center (DARCC), plays the violin and theremin, or caters to the needs of her Russian Wolfhound.'}
             linkedin={'https://www.linkedin.com/in/aliamahama-rodriguez/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-19'>
            <OfficerCard
            name={"Cori Booker"}
            position={"Mentor"}
            image={"photos/member-photos/Placeholder.png"}
            description={'Cori completed her undergraduate work in Cell and Molecular Biology at UT Austin in 2014. After this she went on to complete her PhD at The Scripps Research Institute in Florida where she studied the effects of skeletal disuse on adult bone marrow resident stem cells using a mouse model of microgravity. Following her PhD she returned to Texas to pursue postdoctoral research at UTSW where she studied the effects of injury on local stem cell niche signaling. Presently, she is a Scientist working as a Cell Engineer at Colossal Biosciences where she is aiding in the company’s efforts to de-extinct the Thylacine. In her free time she loves to spend quality time with friends, learn to keep all her houseplants alive, and try new foods/recipes. '}
            linkedin={'https://www.linkedin.com/in/cori-n-booker-b7159484/'}
            font={'1.1'}
             ></OfficerCard>
            </div>


            <div className='item-20'>
            <OfficerCard
             name={"Andrea Ruiz"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Andrea has been a neuroscientist at the University of Texas at Dallas (UTD) for over a decade. Throughout that time her goal has been to enhance patient outcomes of rehabilitative therapy through vagus nerve stimulation (VNS). Her early work focused on studying the effects of VNS as a therapy for stroke rehabilitation, that work was pivotal in the FDA’s recent approval of the therapy for chronic ischemic stroke patients.  Currently, Andrea is focused on completing a PhD in Biomedical Engineering from the same institution. Though she is now studying the effect of VNS on a model of peripheral nerve injury, her goal is still to create an accessible and effective treatment for patients. Andrea’s passion is to  empower others to succeed in STEM by creating diverse and sustainable solutions to the challenges facing our world everyday. '}
             linkedin={'https://www.linkedin.com/in/vyshnavi-nalla/'}  /* cannot find */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-21'>
            <OfficerCard
             name={"Hira Ahmed"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Project manager and Business Excellence Lead at Abbott Diagnostic, have experience leading cross functional team for multiple medical devices as a reliability and quality engineer. '}
             linkedin={'https://www.linkedin.com/in/syeda-hira-ahmed-5340653a/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-22'>
            <OfficerCard
             name={"Jahnavi Mesa"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Hi, I’m Jahnavi! I\'m a Software Engineer with 5+ years of experience in the industry. My expertise lies within back-end web development, and I\'m skilled in Java, Spring Boot, Microsoft Azure cloud. I have a passion for software development, as it enables me to apply my creativity in utilizing technology to find solutions to real-world problems.'}
             linkedin={'https://www.linkedin.com/in/jahnavi-mesa-72b91447/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-23'>
            <OfficerCard
            name={"Janrose Samson"}
            position={"Mentor"}
            image={"photos/member-photos/Placeholder.png"}
            description={'Software Engineer in defense and aerospace breaking into a career in cybersecurity. Passionate about helping young women in STEM pursue their dream careers!'}
            linkedin={'https://www.linkedin.com/in/janrosesamson/'}
            font={'1.1'}
             ></OfficerCard>
            </div>


            <div className='item-24'>
            <OfficerCard
             name={"Katie Baumann"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Hi I\'m Katie Baumann and I am a software engineer for Allstate! I have also interned for Delta Steel technologies and L3Harris during my undergraduate degree. My areas of experience include databases, cloud technologies and software development.  '}
             linkedin={'https://www.linkedin.com/in/katie-baumann-b8877a194/'}  /* cannot find */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-25'>
            <OfficerCard
             name={"Masha Dyachok"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Hi, I\'m Masha- a mechanical engineering alumni from UTD! Super excited to work with students this semester! '}
             linkedin={'https://www.linkedin.com/in/masha-dyachok/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-26'>
            <OfficerCard
             name={"Monica Arellano"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Seasoned IT professional passionate about coaching and mentoring individuals at all levels in the organization.  '}
             linkedin={'https://www.linkedin.com/in/monica-arellano-b287781/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-27'>
            <OfficerCard
             name={"Nargol Payman"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'I am a UTD graduate working in the Bay Area. My background is in computer science, and I currently work on Safari and WebKit. I have been a mentor and a mentee with WMWE before. My hobbies include drawing, ballroom dancing, playing the piano, and reading. Please reach out if I can help you in any way.  '}
             linkedin={'https://www.linkedin.com/in/nargolpayman/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-28'>
            <OfficerCard
             name={"Pragna Subrahmanya"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'My name is Pragna Subrahmanya and I graduated with a Computer Engineering degree from UT Austin. I\'m currently working as a Software Engineer at JP Morgan Chase. I\'m very interested in data science and machine learning. Outside of work, I love going on hikes, doing yoga and listening to podcasts :)  '}
             linkedin={'https://www.linkedin.com/in/pragna-subrahmanya/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-29'>
            <OfficerCard
             name={"Priyanka Das"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'UTD alum and Systems Engineer working for Medtronic excited to help women in STEM.   '}
             linkedin={'https://www.linkedin.com/in/pridas/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-30'>
            <OfficerCard
             name={"Sandhya Shyam Shyam Sundar"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'I am Sandhya Shyam Sundar. Have been working in Computer networking industry for 10 years. Would love to meet people and make new connections!  '}
             linkedin={'https://www.linkedin.com/'}/* cannot find */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-31'>
            <OfficerCard
             name={"Sarah Hanks"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'My name is Sarah Hanks; I’m from Crowley, Louisiana. I graduated from LSU in May 2022 in computer engineering. I’m looking forward to the opportunity to mentor and work with so many talented women.   '}
             linkedin={'https://www.linkedin.com/in/sarahehanks/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-32mentors'>
            <OfficerCard
             name={"Shahrzad Abri"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Shahrzad Abri, Ph.D., is a Scientist of Phenotype Engineering on the Thylacine team. She has her Ph.D. in Chemical and Biomolecular Engineering from The University of Akron, and her M.S. in Biomedical Engineering (Biomaterials) from the University of Tehran. Shahrzad completed her bachelor’s in Biomaterials Engineering from the Islamic Azad University of Tehran. Prior to joining Colossal, she was a Graduate Research Assistant at the University of Akron, Department of Chemical and Biomolecular Engineering. She has diverse research experience in tissue engineering and regenerative medicine as well as developing functional biomaterials for various applications, such as infected wound healing and drug delivery.  '}
             linkedin={'https://www.linkedin.com/in/shahrzad-abri/'}
             font={'1.1'}
             ></OfficerCard>
            </div>



            </section>
             
        </div>
    );
}

export default Members;