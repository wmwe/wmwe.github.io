import React from 'react';
import { OfficerCard } from './Wmwe-ui';
import './Officers.css';
import './Home.css';


function Officers(props) {
    return (
        <div style={{position:'relative'}}>

            <h1 className='header-text'>meet the team.</h1>

             <section className='container'>

            <div className='item-1'>
            <OfficerCard
             name={"Summan Rahman"}
             position={"President"}
             image={"photos/officer-photos/Summan-Rahman.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/summan-rahman/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-2'>
            <OfficerCard
             name={"Vyshnavi Nalla"}
             position={"Vice President"}
             image={"photos/officer-photos/Vyshnavi-Nalla.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/vyshnavi-nalla/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-3'>
            <OfficerCard
             name={"Lillie McMaster"}
             position={"Secretary"}
             image={"photos/officer-photos/Lillie-McMaster.png"}
             description={'I’m Lillie, I go by she/her pronouns. I am a third year Computer Science student. This will be my second year as Secretary of WMWE. I’m super excited for a new way to track M-points through our website. I love to read fantasy and romance books in my free time. I have four fur-babies at home - two dogs and two cats.'}
             linkedin={'https://www.linkedin.com/in/vyshnavi-nalla/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-4'>
            <OfficerCard
             name={"Lac Ngo"}
             position={"Media and Events Chair"}
             image={"photos/officer-photos/Lac-Ngo.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/vyshnavi-nalla/'}
             font={'0.9'}
             ></OfficerCard>
            </div>

            <div className='item-5'>
            <OfficerCard
             name={"Anusha Jain"}
             position={"Events Chair"}
             image={"photos/officer-photos/Anusha-Jain.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/vyshnavi-nalla/'}
             font={'1.1'}
             
             ></OfficerCard>
            </div>
            <div className='item-6'>
            <OfficerCard
             name={"Aiman Rahman"}
             position={"Mentoring Team Coordinator"}
             image={"photos/officer-photos/Aiman-Rahman.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/vyshnavi-nalla/'}
             font={'0.9'}
             ></OfficerCard>
            </div>
            <div className='item-7'>
            <OfficerCard
             name={"Zaina Rida"}
             position={"Mentoring Team Coordinator"}
             image={"photos/officer-photos/Zaina-Rida.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/vyshnavi-nalla/'}
             font={'0.9'}
             ></OfficerCard>
            </div>

            <div className='item-8'>
            <OfficerCard
             name={"Riya Gandhi"}
             position={"Treasurer"}
             image={"photos/officer-photos/Riya-Gandhi.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/vyshnavi-nalla/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-9'>
            <OfficerCard
             name={"Illiana Rodriguez"}
             position={"Treasury Committee Member"}
             image={"photos/officer-photos/Illiana-Rodriguez.png"}
             description={'My name’s Illiana, and it’s my third year as a Mechanical Engineering student. I love being a part of WMWE, and this semester I’ll be helping as part of the treasury committee. I’m an international student from Mexico, have two super cute dogs, and enjoy spending time with my friends. I’m really excited about meeting new people in the organization and seeing our community grow!'}
             linkedin={'https://www.linkedin.com/in/vyshnavi-nalla/'}
             font={'0.9'}
             ></OfficerCard>
            </div>


            <div className='item-10'>
            <OfficerCard
             name={"Sanjana Jadhav"}
             position={"Marketing Chair"}
             image={"photos/officer-photos/Sanjana-Jadhav.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/vyshnavi-nalla/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-11'>
            <OfficerCard
             name={"Manasi Vipat"}
             position={"Marketing Committee Member"}
             image={"photos/officer-photos/Manasi-Vipat.png"}
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
             linkedin={'https://www.linkedin.com/in/vyshnavi-nalla/'}
             font={'0.9'}
             ></OfficerCard>
            </div>

             </section>
             
        </div>
    );
}

export default Officers;