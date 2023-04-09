import React from 'react';
import { OfficerCard } from './Wmwe-ui';
import './Officers.css';
import './Home.css';


function Officers(props) {
    return (
        <div style={{position:'relative'}}>

            <h1 className='header-text'>meet the team.</h1>

             <section className='container2'>

            <div className='item-1'>
            <OfficerCard
             name={"Vyshnavi Nalla"}
             position={"President"}
             image={"photos/officer-photos/Vyshnavi-Nalla.png"}
             description={'Vyshnavi is a junior in Computer Science interested in mobile and web development. She joined WMWE to help the retention of Women in STEM and be part of a community.'}
             linkedin={'https://www.linkedin.com/in/vyshnavi-nalla/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-2'>
            <OfficerCard
             name={"Manasi Vipat"}
             position={"Vice President"}
             image={"photos/officer-photos/Manasi-Vipat.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/manasivipat/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-3'>
            <OfficerCard
             name={"Lillie McMaster"}
             position={"Secretary"}
             image={"photos/officer-photos/Lillie-McMaster.png"}
             description={'I love to read fiction novels and my reading goal is 40 books this year. I also love to travel!'}
             linkedin={'https://www.linkedin.com/in/lillie-mcmaster/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-4'>
            <OfficerCard
             name={"Kacie Yee"}
             position={"Events Chair"}
             image={"photos/officer-photos/Lac-Ngo.png"}
             description={'I joined WMWE as a freshman to connect with fellow women in STEM. A fun fact about me is that I like to rollerblade around campus!'}
             linkedin={'https://www.linkedin.com/in/kacie-yee/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-5'>
            <OfficerCard
             name={"Pooja Cheruku"}
             position={"Events Chair"}
             image={"photos/officer-photos/Anusha-Jain.png"}
             description={'I joined WMWE to form relationships with and learn from students/mentors in the industry! Fun fact, I have a goldendoodle named Chewie like Chewbacca :D'}
             linkedin={'https://www.linkedin.com/in/pooja-cheruku/'}
             font={'1.1'}
             
             ></OfficerCard>
            </div>

            <div className='item-6'>
            <OfficerCard
             name={"Gabrielle Kuruvilla"}
             position={"Outreach Chair"}
             image={"photos/officer-photos/Anusha-Jain.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/gabrielle-kuruvilla-445812229/'}
             font={'1.1'}
             
             ></OfficerCard>
            </div>

            <div className='item-6'>
            <OfficerCard
             name={"Emily Oh"}
             position={"Media Chair"}
             image={"photos/officer-photos/Anusha-Jain.png"}
             description={'I love being involved with fellow STEM students. It keeps me motivated and inspired for my own life and studies.'}
             linkedin={'https://www.linkedin.com/in/emily-oh-a14707221/'}
             font={'1.1'}
             
             ></OfficerCard>
            </div>

            <div className='item-7'>
            <OfficerCard
             name={"Hemal Pathak"}
             position={"Mentoring Team Coordinator"}
             image={"photos/officer-photos/Aiman-Rahman.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/hemal-pathak/'}
             font={'0.9'}
             ></OfficerCard>
            </div>
            <div className='item-8'>
            <OfficerCard
             name={"Clara Conner"}
             position={"Mentoring Team Coordinator"}
             image={"photos/officer-photos/Zaina-Rida.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/clara-conner/'}
             font={'0.9'}
             ></OfficerCard>
            </div>

            <div className='item-9'>
            <OfficerCard
             name={"Illiana Rodriguez"}
             position={"Treasurer"}
             image={"photos/officer-photos/Riya-Gandhi.png"}
             description={'I joined WMWE because I wanted to meet other girls with my major, make connections, and receive mentorship from women in the engineering field!'}
             linkedin={'https://www.linkedin.com/in/illiana-rodriguez/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-10'>
            <OfficerCard
             name={"Devika Amalkar"}
             position={"Treasury Committee Member"}
             image={"photos/officer-photos/Illiana-Rodriguez.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/devika-amalkar26/'}
             font={'0.9'}
             ></OfficerCard>
            </div>


            <div className='item-11'>
            <OfficerCard
             name={"Sanjana Jadhav"}
             position={"Marketing Chair"}
             image={"photos/officer-photos/Sanjana-Jadhav.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/sanjanajadhavv/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-12'>
            <OfficerCard
             name={"Sanjana Kotha"}
             position={"Marketing Committee Member"}
             image={"photos/officer-photos/Manasi-Vipat.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/sanjana-kotha-4b4233220/'}
             font={'0.9'}
             ></OfficerCard>
            </div>

             </section>
             
        </div>
    );
}

export default Officers;