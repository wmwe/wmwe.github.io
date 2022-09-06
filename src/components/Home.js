import React from 'react';
import './Home.css';
import img1 from '../assets/homepage-photo1.png';
import img2 from '../assets/homepage-photo2.png';
import jpmorgan from '../assets/jpmorgan.png'

function Home(props) {
    return (
        <div>
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
                            lorem ipsum dolor sit amet, consectetur adipiscing
                        </h1>
                        <h2 className='body1'>
                            rhoncus eu sem convallis, ultrices scelerisque magna.
                            Ut dapibus eu magna vel bibendum. Vestibulum vitae mauris
                            ac erat hendrerit eleifend nec sed metus.
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
                            rhoncus eu sem convallis, ultrices scelerisque magna.
                            Ut dapibus eu magna vel bibendum. Vestibulum vitae mauris
                            ac erat hendrerit eleifend nec sed metus.
                        </h2>
                    </div>
                </div>

                <div className='layout2'>
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
                </div>



            </div>

        </div>

    );
}

export default Home;