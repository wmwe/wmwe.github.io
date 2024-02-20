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
             name={"Afarin Famili"}
             position={"Mentor"}
             image={"photos/member-photos/AfarinFamili.jpeg"}
             description={'As a Technical Product Manager at PwC, Afarin is passionate about the intersection of Art, Science, and Technology for a Human-Led, Tech-Enabled future. She holds a BS in CS and an MS in BMEN. Afarin is enthusiastic about guiding individuals in fostering personal growth, facilitating networking, and supporting leadership development.'}
             linkedin={'https://www.linkedin.com/in/afarinfamili/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-2'>
            <OfficerCard
             name={"Anusha Jain"}
             position={"Mentor"}
             image={"photos/member-photos/AnushaJain.jpeg"}
             description={'My name is Anusha Jain and I work as a software engineer at JP Morgan Chase! I graduated from UT Dallas with a Computer Engineering degree fall of 2022. During my time at UT Dallas, I joined this organization as a mentee and a mentoring team manager. I enjoyed networking with so many professionals and learning so much about the engineering industry. The semester after, I became the Social Events Coordinator of WMWE. I learned so many useful skills in this organization and I’d like to give back to the org by mentoring!'}
             linkedin={'https://www.linkedin.com/in/anushajain01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-3'>
            <OfficerCard
             name={"Ariel Inman"}
             position={"Mentor"}
             image={"photos/member-photos/ArielInman.jpg"}
             description={'Graduate of Stephen F. Austin State University (SFASU) and Allstate\'s Technology Leadership Development Program (TLDP). I have worked as a Geek Squad agent, an IT consultant at a small startup, an Agile/XP Software Engineer, and a Product Manager. Excited to share what I have learned in my 8+ years of working in the tech industry.'}
             linkedin={'https://www.linkedin.com/in/marlinda-ariel-inman-63816a164?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-4'>
            <OfficerCard
             name={"Ashley Liddiard"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Hi! I am a data science supervisor in the automotive industry. I hold a PhD in Mechanical engineering MSc in Electrical and BSc (Hon) in Mechatronics but I work in AI! '}
             linkedin={'https://www.linkedin.com/in/ashleyliddiard/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-5'>
            <OfficerCard
             name={"Ayesha Ali"}
             position={"Mentor"}
             image={"photos/member-photos/AyeshaAli.jpg"}
             description={'Experienced Senior Information Security Consultant and Architect with a demonstrated history of working in the insurance industry, IT company and Exucation Institute. Skilled in Cloud Security, Secure Coding, DevSecOps, Amazon Web Services (AWS), Microsoft Azure, Generative AI, Data Security, Risk Management and compliance. Strong information technology professional with a Bachelor of Engineering - major Computer Systems Technology'}
             linkedin={'https://www.linkedin.com/in/ayesha-ali-286763198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-6'>
            <OfficerCard
             name={"Ayushi Trivedi"}
             position={"Mentor"}
             image={"photos/member-photos/AyushiTrivedi.jpeg"}
             description={'I am Ayushi Trivedi, a Physical Design Engineer at IBM, pursuing an M.S. in Electrical and Computer Engineering from UT Austin and holds a B.S. in Computer Engineering from UT Dallas. My journey into technology began with a fascination for the logic behind machines, driving my passion for integrated circuits and systems. Throughout my academic and professional journey, I have cultivated expertise in chip design, testing, and automation. I thrive in collaborative environments, where I value diverse perspectives and innovative problem-solving approaches. As a mentor, I am dedicated to empowering others and fostering growth in technical proficiency and collaborative skills. With my experience and passion for technology, I am committed to inspiring and guiding the next generation of engineers on their path to success.'}
             linkedin={'https://www.linkedin.com/in/ayushi-trivedi1/'}
             font={'1.1'}
             ></OfficerCard>
            </div>


            <div className='item-7'>
            <OfficerCard
              name={"Charli Rust"}
              position={"Mentor"}
              image={"photos/member-photos/Placeholder.png"}
              description={'Hi! I\'m Charles Rust, a female engineer (with an unusual name for a female), and I go by Charli. I was named after my father, who is also an engineer. I have been teaching engineering classes at Dallas College for 7 years, and I love teaching, mentoring, and encouraging students. I am a passionate advocate for promoting gender diversity in engineering. I have a B.S. in Architectural Engineering and M.S. in Civil Engineering from the University of Texas at Austin. I have experience in construction materials research, reinforced concrete bridge design, project management, teaching in higher education, resume-building, and service industry. I love traveling, and my most recent excursion was to Rome, Italy. I have two dogs, I live in Dallas, and I love documentary films and documentary series.'}
              //linkedin={''} /* did not provide */
              font={'1.1'}
             ></OfficerCard>
            </div>


            <div className='item-8'>
            <OfficerCard
             name={"Diana Cogan"}
             position={"Mentor"}
             image={"photos/member-photos/DianaCogan.JPG"}
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
             description={'Diana graduated in Electrical Engineering from the University of Toledo, and has worked at Ford Motor Company for the past 30 years in various automotive engineering roles.  She has two children, one a paralegal in Nashville, and the other an engineer in the automotive industry in Michigan.  In addition, she has an MBA from University of Michigan, and an MS in Electrical and Computer Control Systems from Wayne State University.'}
            //  linkedin={'https://www.linkedin.com/in/jborbs/'} /* cannot find */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-10'>
            <OfficerCard
             name={"Dominique Tran"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Hello! My name is Dominique Tran, and I‘ve been a Software Developer at JPMC for 3 years doing backend work. I’m excited to help out and give guidance in whatever way I can! I want to support women in engineering and encourage them to follow their passions!'}
            linkedin={'https://www.linkedin.com/in/dominique-tran'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-11'>
            <OfficerCard
             name={"Dona Maria Jose"}
             position={"Mentor"}
             image={"photos/member-photos/DonaMariaJose.png"}
             description={'Dona Maria Jose is an experienced software engineer with a passion for programming. She has worked at Visa Inc., Microsoft, and currently at Dropbox, contributing to cutting-edge technology solutions. Dona is also an advocate for diversity and inclusion in tech, leading the AnitaB.org Dallas Local Community and participating in women in tech groups. She is committed to mentoring junior engineers and international students, helping them achieve their professional and educational goals.'}
             linkedin={'https://www.linkedin.com/in/donamj/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-12'>
            <OfficerCard
             name={"Ekaterina Lepekhina"}
             position={"Mentor"}
             image={"photos/member-photos/EkaterinaLepekhina.png"}
             description={'I switched industries from law to software, graduated with MS in Computer Science in 2023 and now I am working as a full-stack software engineer in professional audio industry'}
             linkedin={'https://www.linkedin.com/in/ekaterina-lepekhina/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-13'>
            <OfficerCard
             name={"Hui Ouyang"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={''}
             linkedin={'https://www.linkedin.com/in/hui-ouyang-90508420/'}
             font={'1.1'}
             ></OfficerCard>
            </div>


            <div className='item-14'>
            <OfficerCard
             name={"Jeshna Gupta"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Hi!! My name is Jeshna Gupta! I currently work as a frontend developer for Chase Travel at J.P. Morgan Chase & Co. I attended UTD and graduated in Fall 2022! I was in WMWE as a student and was even president! I love this organization so much and am excited to come back as a mentor. '}
             linkedin={'http://linkedin.com/in/jeshna-gupta'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-15'>
            <OfficerCard
             name={"Joanna Borba"}
             position={"Mentor"}
             image={"photos/member-photos/JoannaBorba.jpg"}
             description={'Joanna is currently a Software Engineer at Toyota Connected in Plano, Texas. She graduated from Old Dominion University with a Bachelor of Science in Computer Science. With over 5 years of working experience she is passionate about not only technology but also empowering the next generation of women in STEM!'}
             linkedin={'https://www.linkedin.com/in/jborbs/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-16'>
            <OfficerCard
             name={"Juman Alshraiedeh "}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'I have a master degree in EE and bachelor in Computer Engineering. I am passionate about helping humanity which drives every decision of my day! I am fortunate to be working in Med device companies that drive innovation and help people. As an engineer, I lead teams through complex projects with compassion, data and accountability.'}
             linkedin={'www.linkedin.com/in/juman-alshraiedeh'}
             font={'1.1'}
             ></OfficerCard>
            </div>
            
            <div className='item-17'>
            <OfficerCard
             name={"Katie Myers"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'My passion is teaching. I am truly fortunate to have a fulfilling career doing what I love. As an instructor, I take great pride in seeing my students succeed both in the classroom and in their future endeavors. I am fully committed to the training of the next generation of engineers and scientists by taking an interactive approach to assist students in building a firm foundation in knowledge while inspiring them to be life-long learners.'}
             linkedin={'https://www.linkedin.com/in/kathleenmcneeley'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-18'>
            <OfficerCard
            name={"Katy Brown"}
            position={"Mentor"}
            image={"photos/member-photos/KatyBrown.jpg"}
            description={'Hi! My name is Katy and I am a Software Engineer at Lockheed Martin. This will be my 7th semester mentoring with WMWE. I get so much joy helping women find their path in STEM and I am looking forward to another semester! '}
            linkedin={'https://www.linkedin.com/in/kathryn-brown-362455160'}
            font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-19'>
            <OfficerCard
             name={"Kiara Madeam"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'I am a software developer in the DFW area with mentoring and leadership experience from my time at UTD. I love trying new restaurants and my cat, Sheldon.'}
             linkedin={'https://www.linkedin.com/in/kiara-madeam'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-20'>
            <OfficerCard
             name={"Niruti Dhoble"}
             position={"Mentor"}
             image={"photos/member-photos/NirutiDhoble.jpeg"}
             description={'Hi! My name is Niruti Dhoble. I am a software engineer, at JPMorgan Chase. I graduated from UT Austin in May 2022, with a degree in electrical and computer engineering as well as a minor business. I love to travel and am a big foodie! I love exploring coffee spots and meetings new people! '}
             linkedin={'https://www.linkedin.com/in/niruti-dhoble'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-21'>
            <OfficerCard
            name={"Priyanka Das"}
            position={"Mentor"}
            image={"photos/member-photos/Placeholder.png"}
            description={'I am a UTD alum with a B.S. in Biomedical Engineering and M.S. in Systems Engineering. I worked at the TxBDC within UTD as a research volunteer and eventually as a Research Assistant for nearly the entire 4-6 years at the university. I eventually transitioned to a full time position at a startup company for a few year before gaining an opportunity to work for Medtronic.'}
            linkedin={'www.linkedin.com/in/pridas'}
            font={'1.1'}
             ></OfficerCard>
            </div>


            <div className='item-22'>
            <OfficerCard
             name={"Purvi Dave"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Bachelors in Chemical Engineering with Masters in Orthopedic Regulatory and Clinical Affairs'}
             //linkedin={''}  /* cannot find */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-23'>
            <OfficerCard
             name={"Sabrina Jehanzeb"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Helo! I am currently a Senior Software Engineer at JPMorgan Chase & Co. I work on various applications and platforms, ranging from back-end, front-end, and infrastructure (private / public) as a SME to help teams adopt the best engineering practices. In my free time I like to read too many books. '}
             linkedin={'https://www.linkedin.com/in/sabrina-jehanzeb/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-24'>
            <OfficerCard
             name={"Sanjana Srinath"}
             position={"Mentor"}
             image={"photos/member-photos/SanjanaSrinath.jpg"}
             description={'Hi! I graduated from UT Austin with B.S. and M.S.E. degrees in Biomedical Engineering. I\'m passionate about the intersection between engineering, healthcare, and business and developing innovative and need-based medical solutions that bridge gaps in health equity. In my free time I love cooking, yoga, rewatching my favorite TV shows, and traveling.'}
             linkedin={'https://www.linkedin.com/in/sanjana-srinath/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-25'>
            <OfficerCard
             name={"Sara Akbarzadeh"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'Sara joined UTD in 2017 as a PhD student in Electrical Engineering working in the field of auditory neuroscience, digital signal processing and machine learning. In Summer 2021, she worked with Starkey Hearing as a DSP and ML research intern. After finishing her PhD, she joined FDA as scientific reviewer in August 2022. At the same time, she instructed “Random Process” course at UT Tyler for one semester. She enjoys traveling, reading, baking and playing violin in her free time.'}
             linkedin={'https://www.linkedin.com/in/sara-akbarzadeh-88b1a498?original_referer='}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-26'>
            <OfficerCard
             name={"Sara Santos"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'My name is Sara, and I’m a manufacturing engineer at Medtronic. I graduated from UT Austin with a bachelor’s degree in biomedical engineering. Since then, I have worked in the medical device industry for about 5 years and am passionate about applying engineering skills to improve the lives of others.'}
             linkedin={'https://www.linkedin.com/in/sara-santos-35a161157'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-27'>
            <OfficerCard
             name={"Seemanthini Mahadev"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'15 years IT experience. Built from ground up.'}
             linkedin={'https://www.linkedin.com/in/seemanthini-mahadev-67421212'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-28'>
            <OfficerCard
             name={"Tina Thomas"}
             position={"Mentor"}
             image={"photos/member-photos/TinaThomas.jpg"}
             description={'Upon receiving my MBA from UT Dallas in 2011, I decided to utilize both my engineering and business background to transition into technical sales, because I truly enjoy helping customers solve their problems so they can, in turn, provide competitive solutions and services to their own customers. My passion is helping other young people recognize their own talents and passions within this industry, and thus preparing them for the future.'}
             linkedin={'https://www.linkedin.com/in/tinareneethomas/'}
             font={'1.1'}
             ></OfficerCard>
            </div>



            <div className='item-29'>
            <OfficerCard
             name={"Umaymah Sultana"}
             position={"Mentor"}
             image={"photos/member-photos/UmaymahSultana.JPG"}
             description={'My name is Umaymah, and I\'m currently a Software Engineer at Toyota Connected, and a former CS student at UTD! I love meeting new people and chasing adventures, and if I\'m not at a coffee shop working, I\'m probably somewhere in the mountains watching sunsets with the people I love. For me, one of the best parts of working as a Software Engineer is being able to work alongside other talented engineers, and constantly learn skills (and shortcuts lol) from them. Engineering is all about solving problems and developing new ideas while being creative and having fun, and I hope to be able to share some of my hacks on doing just that :) '}
             linkedin={'https://www.linkedin.com/in/umaymahsultana'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            
            <div className='item-30'>
            <OfficerCard
             name={"Vibha Tyagi"}
             position={"Mentor"}
             image={"photos/member-photos/Placeholder.png"}
             description={'More than two decades of experience.'}
             linkedin={'https://www.linkedin.com/in/vibha-tyagi-8b6794/'}
             font={'1.1'}
             ></OfficerCard>
            </div>
            
            </section>
             
        </div>
    );
}

export default Members;