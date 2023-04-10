import React from 'react';
import './AboutStyle.css'
import eventpic1 from './eventpic1.jpg'
import eventpic2 from './eventpic2.jpg'
import eventpic3 from './eventpic3.jpg'

import supportwithborder from './supportwithborder.jpg'
import empowermentwithborder from './empowermentwithborder.jpg'
import mentorshipwithborder from './mentorshipwithborder.jpg'

function About(props) {
    return (
        <div className= "textbody">
            <h1 className='aboutheader'>about us.</h1>
             <div className= "mission">
             <h2 className='section__header'>our mission.</h2>
             <h3 className='body1' style={{width: "100%"}}>WMWE aims to improve the retention rates of women 
                in tech and STEM fields by giving them a head start 
                on making valuable connections and gaining advice from 
                seasoned professionals who know their way around the industry. 
                We are firm believers in empowered women empowering women!</h3>
             </div>
            
                <div className="missionpics">
                    {/* images for mission */}
                    <img className='pic1' src={eventpic1}/>
                    <img className='pic2' src={eventpic2}/>
                    <img className='pic3' src={eventpic3}/>
                </div>

             <div className="pillars">
             <h2 className='section__header' style={{marginLeft:"0%"}}>our pillars.</h2>
             <h3 className='body1' style={{width: "100%"}}><strong>Support.</strong> <br></br>We strive to provide support for all women through each other. 
                Your mentor, team, and everyone in WMWE is there to help you out 
                whenever you need it. Before we are a University Wide Organization, 
                we are just a group of people that want to help!</h3>

                <h3 className='body1' style={{width: "100%"}}><strong>Empowerment.</strong> <br></br> In the STEM field, women make up only 24% of the entire 
                workforce, with the percentage only decreasing with higher positions.  
                In WMWE, we strive to empower everyone and help make them stronger and more confident 
                in whatever they do. After all, our slogan is “Empowered Women Empowering Women”.</h3>

             <h3 className='body1' style={{width: "100%"}}><strong>Mentorship.</strong> <br></br>By linking you up with a professional 
                woman who is working in the STEM field in a semester long mentorship, 
                you will learn everything you wanted to know. From professionalism in the workplace, 
                to things you can do to upstart your career. In the mentee form, we ask for your major 
                and what fields of that major you are interested in so we can pair you up with a mentor who 
                is doing exactly that. At the end of the semester, you will be walking out with tons of more knowledge!</h3>

             </div>

             <div className='pillarpics'>
                {/* images for pillars */}

                <img className='support' src={supportwithborder}/>
                <img className='empowerment' src={empowermentwithborder}/>
                <img className='mentorship' src={mentorshipwithborder}/>
             </div>

             <div className="history" style={{paddingBottom: "7%"}}>
                <h2 className='section__header' style={{marginLeft:"0%"}}>history.</h2>
                <h3 className='body1' style={{width: "100%"}}>Founded at the University of Texas at Dallas in the summer of 2016, 
                    Women Mentoring Women in Engineering is a mentoring program that fosters 
                    mentorships between students of UTD and working women. Students are paired 
                    up with professional women currently working in the technology industry or in 
                    academia to be mentored for a semester and build a relationship with those 
                    familiar with the working environment.</h3>

             </div>
        </div>
    );
}

export default About;
