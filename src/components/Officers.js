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
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
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
             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante quam, rhoncus eu sem convallis, ultrices scelerisque magna. Ut dapibus eu magna vel bibendum.'}
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
             
             
             <view style={{height:150}}> </view>
            

            
             
             
        </div>
    );
}

export default Officers;