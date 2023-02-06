import React from 'react';
import './Home.css';
import img1 from '../assets/homepage-photo1.png';
import img2 from '../assets/homepage-photo2.png';
import jpmorgan from '../assets/jpmorgan.png'

function Home(props) {
    return (
        <div className="full-layout">
            <div className='banner1'>
                <h3 className='banner-text'>
                    Mentee applications for Fall 2022 are now open!
                </h3>
                <h3 className='banner-text'>
                    apply today
                </h3>
            </div>
            <div className='format'>

                <div className='layout1'>

                    <div>
                        <h1 className='subheading1'>
                            empowered women empowering women.
                        </h1>
                        <h2 className='body1'>
                        Women Mentoring Women in Engineering is an organization formed at the University of 
                        Texas at Dallas that is focused on helping women in STEM fields do their ultimate best. 
                        We want to help you make connections with people out in the industry.
                        </h2>
                    </div>

                        <div>
                        <img className='homepage-image1' src={img1}></img>
                        </div>
                    

                </div>



                <div className='layout1'>
                    <div><img className='homepage-image2' src={img2}></img></div>
                    
                    <div className='textlayout2'>
                        <h1 className='subheading1'>
                            how to join.
                        </h1>
                        <h2 className='body1'>
                        If you’re interested in becoming a mentor or mentee in upcoming semesters, 
                        please fill out the interest form and you will be contacted once applications open up!
                        </h2>
                    </div>
                </div>

                {/* <div className='layout2'>
                    <h1 className='subheading1'>
                        our sponsors.
                    </h1>

                    <div class="gallery">
                        <figure className='gallery__item gallery__item--1'>
                            <img src={jpmorgan} class="gallery__img" alt="jpmorgan" />
                        </figure>
                        <figure class="gallery__item gallery__item--2">
                            <img src={jpmorgan} class="gallery__img" alt="jpmorgan" />
                        </figure>
                        <figure class="gallery__item gallery__item--3">
                            <img src={jpmorgan} class="gallery__img" alt="jpmorgan" />
                        </figure>
                        <figure class="gallery__item gallery__item--4">
                            <img src={jpmorgan} class="gallery__img" alt="jpmorgan" />
                        </figure>
                        <figure class="gallery__item gallery__item--5">
                            <img src={jpmorgan} class="gallery__img" alt="jpmorgan" />
                        </figure>


                    </div>
                </div> */}



            </div>

        </div>

    );
}

export default Home;