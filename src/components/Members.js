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
             name={"April Strobel"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Manager of Network Engineering in the Core Backbone Engineering team at Frontier since 2015.  I have almost 20 years of experience in the Internet Service Provider industry.  Our team is responsible for the planning, engineering, deployment and overall topology of the backbone and peering routers and their connectivity which provide Internet to Frontier customers.'}
             linkedin={'https://www.linkedin.com/in/aprilstrobel/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-2'>
            <OfficerCard
             name={"Ashley Liddiard"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Hi! My name is Ashley. I have been an engineer and data scientist for the better part of 15 years in both industry and research. As a woman I have spent a good amount of time figuring out how best to balance family and career. I am an advocate for those with imposter syndrome and really enjoy seeing people grow and make decisions that serve their purpose.  '}
             linkedin={'https://www.linkedin.com/in/ashleyliddiard/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-3'>
            <OfficerCard
             name={"Ayesha Gurnani"}
             position={"Mentor"}
             image={"photos/member-photos/AyeshaGurnani.jpg"}
             description={'Hello, my name is Ayesha Gurnani. I am currently working at Microsoft in Azure Compute team. I graduated from UTD in 2020 after doing my Masters in Computer Science. I am super passionate about meeting new people from all sorts of background and love to learn their stories. I enjoy most things outdoors trying out new restaurants or exploring a new city but equally love curling up with a book. '}
             linkedin={'https://www.linkedin.com/in/ayeshagurnani/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-4'>
            <OfficerCard
             name={"Brianne C. Martin"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Brianne C. Martin, also known as The People Engineer® is a servant leader, international speaker, & business owner. Her skillset is harmonizing humans & establishing people processes. She\'s passionate about leadership development with a contagious attitude specializing in People, Process, Performance™ & industrial manufacturing thanks to her background in defense, design, commercial aerospace, & automotive manufacturing industries. Through various leadership roles, she has built over 12 leadership programs, mentored and coached 50+ early career engineers, and led multiple change management initiatives at local, regional, national, & international levels.'}
             linkedin={'https://www.linkedin.com/in/briannecmartin/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-5'>
            <OfficerCard
             name={"Celicia Della-Morrow"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={''}
             linkedin={'https://www.linkedin.com/in/celicia-della-morrow-8642294'}
             font={'1.1'}
             ></OfficerCard>
            </div>
            <div className='item-6'>
            <OfficerCard
              name={"Deepthi Ramesh"}
              position={"Mentor"}
              image={"photos/member-photos/DeepthiRamesh.png"}
              description={'Deepthi Ramesh is the co-founder & CEO of Clinical Academy and is responsible for daily end-to-end operations and strategic marketing for the company. Before founding Clinical Academy, Deepthi was at Integra LifeSciences/ ACell as a Senior Regulatory Affairs Specialist working on Class II medical devices that support wound and surgical reconstruction for their extracellular matrix devices derived from porcine and bovine sources. She was responsible for the regulatory approvals for US and European Union as well as managing engineering change requests for the Boston, MA site. Prior to joining Integra LifeSciences, Deepthi started her Regulatory Affairs career at Abbott Laboratories in Dallas Texas. She supported the global regulatory approvals for Class III medical devices in the Neuromodulation division working on hardware and software changes to the SCS and DBS devices. Deepthi earned her Masters’ in Biomedical Engineering at UTD graduating with a published thesis on the surficial impact of detoxification of titanium dental implants and periimplantitis and a Bachelor’s of Engineering in Biotechnology from P.E.S Institute of Technology, Bangalore India. '}
              linkedin={'https://www.linkedin.com/in/deepthi-ramesh-rac-38662b73/'}
              font={'1.1'}
             ></OfficerCard>
            </div>
            <div className='item-7'>
            <OfficerCard
             name={"Denise Mccullar"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'I am a 2008 UTD graduate with an Electrical Engineering BS degree. I have been at Raytheon for 16 years, having software, firmware and systems engineering background. I have 2 kiddos who keep me busy everyday. My favorite things to do are outdoor activities (swimming, hiking) and finding great food in the area.'}
             linkedin={'https://www.linkedin.com/in/denise-mccullar-532aba15a'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-8'>
            <OfficerCard
             name={"Diana Cogan"}
             position={"Mentor"}
             image={"photos/member-photos/DianaCogan.jpg"}
             description={'Bachelors & Masters from TAMU, 1981 & 1983. E-Systems Garland, 1983 - 1986. Stay-at-home, home-school mom 1986 - 2010. UTD PhD student 2010 - 2016. Part-time UTD Math faculty 2011 - 2015. Full-time ECE faculty 2016 - now.'}
             linkedin={'https://www.linkedin.com/in/diana-cogan-24b58a34'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-9'>
            <OfficerCard
             name={"Diana Glass"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'I have a masters in engineering and I’m business. I’ve raised two kids and love to be active in taekwondo, skiing, boating, and soccer. '}
            //  linkedin={'https://www.linkedin.com/in/jborbs/'} /* cannot find */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-10'>
            <OfficerCard
             name={"Emily Levy"}
             position={"Mentor"}
             image={"photos/member-photos/EmilyLevy.jpg"}
             description={'Emily Levy is a Mechanical Engineer. She earned a PhD specializing in biomechanics at UTD and 8+ years designing aircraft modifications. She loves working on new designs, innovations, and on a collaborative team.'}
             linkedin={'https://www.linkedin.com/in/emily-levy-1866731/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-11'>
            <OfficerCard
             name={"Emily Quintanilla"}
             position={"Mentor"}
             image={"photos/member-photos/EmilyQuintanilla.jpeg"}
             description={'My name is Emily Quintanilla and I am a Software Engineer at JP Morgan Chase! I graduated from Texas Tech University with a degree in Computer Science and a minor in Transmedia in 2021. Shortly after I started full-time at JPMC in the Software Engineer Program!'}
             linkedin={'https://www.linkedin.com/in/emilyequintanilla/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-12'>
            <OfficerCard
             name={"Ilse Gonzalez"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Ilse Gonzalez, I currently work in operations as Production Supervisor for Abbott. I graduated in 2018 BMEN from UTD. Recently my husband and I welcomed our first baby so we are enjoying our sleepless nights! I have been a mentor for about a year internally in Abbott so I am looking forward to this new adventure in the mentorship world.'}
             linkedin={'https://www.linkedin.com/in/ilse-gonzalez-307679121/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-13'>
            <OfficerCard
             name={"Jasmine Hyder"}
             position={"Mentor"}
             image={"photos/member-photos/JasmineHyder.jpg"}
             description={'Hi guys, I\'m Jasmine! I am a software engineer at JP Morgan Chase. I would love to help someone navigate some of the challenges that come with breaking into tech and engineering. I enjoy watching anime, playing video games, nature, and spending time with family and friends.'}
             linkedin={'https://www.linkedin.com/in/jasmine-hyder-430887177'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-14'>
            <OfficerCard
             name={"Jennifer King"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Jennifer currently works at Texas Instruments as a Facilities Project Manager for the Worldwide Projects team with experience in facility expansion projects in AMHS, exhaust, and chem/gas systems.  Prior to TI, she worked at Mustang Engineering/Wood as a Mechanical Facilities Package Engineer and has experience with static and rotating equipment and piping.  She received her Bachelor’s in Mechanical Engineering from the University of Texas at Austin and has been a licensed professional engineer since 2015.  Outside of work, Jennifer enjoys spending time with family, friends and church members, traveling, eating delicious food, and studying other languages.'}
             linkedin={'https://www.linkedin.com/in/jennifer-king-99707527/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-15'>
            <OfficerCard
             name={"Jeshna Gupta"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Hi!! My name is Jeshna Gupta! I currently work as a frontend developer for Chase Travel at J.P. Morgan Chase & Co. I attended UTD and graduated in Fall 2022! I was in WMWE as a student and was even president! I love this organization so much and am excited to come back as a mentor. '}
             linkedin={'http://linkedin.com/in/jeshna-gupta'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-16'>
            <OfficerCard
             name={"Joanna Borba"}
             position={"Mentor"}
             image={"photos/member-photos/JoannaBorba.jpg"}
             description={'Joanna is currently a Software Engineer at Toyota Connected in Plano, Texas. She graduated from Old Dominion University with a Bachelor of Science in Computer Science. With over 5 years of working experience she is passionate about not only technology but also empowering the next generation of women in STEM!'}
             linkedin={'https://www.linkedin.com/in/jborbs/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-17'>
            <OfficerCard
             name={"Julia Mach"}
             position={"Mentor"}
             image={"photos/member-photos/JuliaMach.jpg"}
             description={'I am a design engineer for patient specific implants at 4WEB Medical. I graduated from UTD with my Bachelor\'s in Biomedical Engineering in \'22 and Master\'s in Biomedical Engineering in \'23. I am passionate about supporting young women\'s paths to successful careers!'}
             linkedin={'https://www.linkedin.com/in/juliamach'}
             font={'1.1'}
             ></OfficerCard>
            </div>
            
            <div className='item-18'>
            <OfficerCard
             name={"Katie Myers"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'I have worked at UTD teaching undergraduate courses in biomedical engineering since 2015.  Prior to that, I served as a research engineer in the Neurological Biomaterials and Cancer Therapeutics lab at Georgia Tech.  My research focused on developing nanoparticles for the delivery of chemotherapeutics and diagnostic agents to tumors with the goal of decreasing the side effects of chemotherapy and enabling earlier detection of cancer.'}
             linkedin={'https://www.linkedin.com/in/kathleenmcneeley'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-19'>
            <OfficerCard
            name={"Katy Brown"}
            position={"Mentor"}
            image={"photos/member-photos/KatyBrown.jpg"}
            description={'Hi! My name is Katy. I\'m a software engineer at Lockheed Martin. This is my 6th semester being a mentor for WMWE. I absolutely love mentoring all of the bright and ambitious young women part of this organization and I look forward to the new semester! '}
            linkedin={'https://www.linkedin.com/in/kathryn-brown-362455160'}
            font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-20'>
            <OfficerCard
             name={"Marigrace Seaton"}
             position={"Mentor"}
             image={"photos/member-photos/MarigraceSeaton.jpeg"}
             description={'Hi! My name is MG (short for Marigrace) and I am a backend software developer at JPMorgan Chase. I graduated 2 years ago from UNC Chapel Hill with a BS in Computer Science - go Tar Heels! Outside of work, I love being active and exercising or playing recreational sports like pickleball. I am also obsessed with reading (I talk about books nonstop), playing piano, and most recently I have taken up needlepoint as a hobby. I\'m looking forward to meeting y\'all!'}
             linkedin={'linkedin.com/in/marigraceseaton'}  /* cannot find */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-21'>
            <OfficerCard
             name={"Monica Arellano"}
             position={"Mentor"}
             image={"photos/member-photos/MonicaArellano.jpg"}
             description={'IT Senior Professional with 30+ years of international experience and global scope responsibility. Experience includes positions ranging from technical hands-on and data analysis, IT Project Management, IT Portfolio Management, Strategic IT global staffing among others.'}
             linkedin={'www.linkedin.com/in/monica-arellano-b287781'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-22'>
            <OfficerCard
             name={"Niruti Dhoble"}
             position={"Mentor"}
             image={"photos/member-photos/NirutiDhoble.jpeg"}
             description={'Hi! My name is Niruti Dhoble. I am a software engineer, at JPMorgan Chase. I graduated from UT Austin in May 2022, with a degree in electrical and computer engineering as well as a minor business. I love to travel and am a big foodie! I love exploring coffee spots and meetings new people! '}
             linkedin={'https://www.linkedin.com/in/niruti-dhoble'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-23'>
            <OfficerCard
            name={"Pragna Subrahmanya"}
            position={"Mentor"}
            image={"photos/member-photos/Placeholder.png"}
            description={'Hi! My name is Pragna and I’m a software engineer. I love being able to help/mentor students in whatever way I can. I think it’s always helpful to hear from people who’ve had similar experiences and are willing to share the lessons they’ve learnt along the way. Outside of work, I love doing yoga, going on hikes and spending time with friends and family! '}
            linkedin={'https://www.linkedin.com/in/pragna-subrahmanya'}
            font={'1.1'}
             ></OfficerCard>
            </div>


            <div className='item-24'>
            <OfficerCard
             name={"Preeti Pillai"}
             position={"Mentor"}
             image={"photos/member-photos/PreetiPillai.jpg"}
             description={'Artificial Intelligence specialist with a decade of industrial experience across multiple sectors (automotive, surveillance, residential IoT, logistics automation). I am passionate about mentoring and guiding folks who are in the same shoes as me when I first graduated.'}
             linkedin={'https://www.linkedin.com/in/preetijspllai'}  /* cannot find */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-25'>
            <OfficerCard
             name={"Reshmi Ranjith"}
             position={"Mentor"}
             image={"photos/member-photos/ReshmiRanjith.jpg"}
             description={'I graduated from UTD in Spring 2022 with a BS and MS in Software Engineering and joined Capital One shortly after. During UTD, I was part of various clubs (including WMWE!) and had internships at different companies. At Capital One, I joined their Technology Development Program where I will contribute to two different teams within 2 years.'}
             linkedin={'https://www.linkedin.com/in/reshmi-ranjith/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-26'>
            <OfficerCard
             name={"Roopal Patel"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Highly effective senior Global Digital Technology Director with over 14 years of experience specializing in strategic business leadership, technology expertise and generating revenue growth. Offering an array of skills in business development, implementing new initiatives, customer-centric cultures, logical problem solving, cross-functional collaboration, team leadership, written and verbal communication, strengthening competitive position, stakeholder engagement and talent acquisition. Proven ability in leading organizations and teams to new levels of performance by utilizing business acumen and targeted leadership of highly matrixed environments that drive alignment and achievement of corporate goals. Excels in management of overall program/project planning and delivery activities. '}
             linkedin={'https://www.linkedin.com/in/roopal-patel-90134b6/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-27'>
            <OfficerCard
             name={"Sabrina Jehanzeb"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Helo! I am currently a Senior Software Engineer at JPMorgan Chase & Co. I work on various applications and platforms, ranging from back-end, front-end, and infrastructure (private / public) as a SME to help teams adopt the best engineering practices. In my free time I like to read too many books. '}
             linkedin={'https://www.linkedin.com/in/sabrina-jehanzeb/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-28'>
            <OfficerCard
             name={"Sandhya Rani Dodda"}
             position={"Mentor"}
             image={"photos/member-photos/SandhyaRaniDodda.jpg"}
             description={'I have dual Master\'s degree in Computer Science & Software Engineering with 15+ years of experience in Change & Release Management, Strategy & Operations, Process Improvement, Project & Program Management, Devops, Cloud Security and cloud technologies.'}
             linkedin={'https://www.linkedin.com/in/sandhya-rani-dodda/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-29'>
            <OfficerCard
             name={"Sarah Walker"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'I\'m a Machine Learning Engineer at Toyota Connected where I work on the voice assistant for our multimedia system. I\'ve only been working full time since January, as I just finished my masters in Computer Science. Outside of work, I really enjoy reading mystery books and baking!'}
             linkedin={'https://www.linkedin.com/in/sarah-walker-92ba21175/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-30'>
            <OfficerCard
             name={"Seemanthini Mahadev"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'18 years of professional experience as Java/J2EE developer/architect,  with expertise in requirements analysis, designing prototype, evaluating coding/debugging tools, implementation of multi-tier applications, and deployment. Worked on architecting solutions on AWS cloud. Have Proven ability to grasp new technologies and concepts quickly. Started off as a developer and worked my way up to lead, architect and now a manager. Continually served as mentor to developers on the team.'}
             linkedin={'https://www.linkedin.com/in/seemanthini-mahadev-67421212'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-31'>
            <OfficerCard
             name={"Troi Megan Guichard"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'My name is Troi Megan Guichard and I am a 2022 UTDallas alumni and graduated with a Bachelors in Software Engineering with a focus in Artificial Intelligence. I currently work at JP Morgan Chase in Plano, Texas in the Infrastructure and Platform Services line of business. Outside of work I enjoy playing volleyball and art.'}
             linkedin={'https://www.linkedin.com/in/troimeganguichard/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-32mentors'>
            <OfficerCard
             name={"Umaymah Sultana"}
             position={"Mentor"}
             image={"photos/member-photos/UmaymahSultana.jpg"}
             description={'My name is Umaymah, and I\'m currently a Software Engineer at Toyota Connected, and a former CS student at UTD! I love meeting new people and chasing adventures, and if I\'m not at a coffee shop working, I\'m probably somewhere in the mountains watching sunsets with the people I love. For me, one of the best parts of working as a Software Engineer is being able to work alongside other talented engineers, and constantly learn skills (and shortcuts lol) from them. Engineering is all about solving problems and developing new ideas while being creative and having fun, and I hope to be able to share some of my hacks on doing just that :) '}
             linkedin={'https://www.linkedin.com/in/umaymahsultana'}
             font={'1.1'}
             ></OfficerCard>
            </div>



            </section>
             
        </div>
    );
}

export default Members;