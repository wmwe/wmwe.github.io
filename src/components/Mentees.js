import React from 'react';
import { OfficerCard } from './Wmwe-ui';
import './Members.js'
import './Members.css';
import './Home.css';
import { useNavigate } from 'react-router-dom';


function Mentees(props) {
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
            <button className="navButton" onClick={navigateToMembers}><h2 className='header-text3'>mentors</h2></button>
            <button className="navButton" onClick={navigateToMentees}><h2 className='header-text4'>mentees</h2></button>
            </div>
            <section className='mentees-container'>

            <div className='item-1mentees'>
            <OfficerCard
             name={"Kamya Arora"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/kamya-arora-3a689b211'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-2mentees'>
            <OfficerCard
             name={"Anh Nguyen"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/anh-nguyen-h-n/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-3mentees'>
            <OfficerCard
             name={"Dharshini Mahesh"}
             position={"Mentee"}
             image={"photos/member-photos/DharshiniMahesh.JPG"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/dharshini-mahesh/'}  
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-4mentees'>
            <OfficerCard
             name={"Arya Koirala "}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/'} /* not provided */ 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-5mentees'>
            <OfficerCard
             name={"Timage Abubaker"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/timage-abubaker/'}  
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-6mentees'>
            <OfficerCard
             name={"Tina Nguyen "}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'http://linkedin.com/in/tina-nguyen-665420254'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-7mentees'>
            <OfficerCard
             name={"Toby Estipona"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'http://linkedin.com/in/toby-estipona-97136b270'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-8mentees'>
            <OfficerCard
             name={"Anusha Patel"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/anushapatel6571/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-9mentees'>
            <OfficerCard
             name={"Vivian Phuong Hoang Nguyen"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/vivian-nguyen-38a0b1290/'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-10mentees'>
            <OfficerCard
             name={"Jahnavi Dhulipalla"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/jahnavi-dhulipalla-b60b60166/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-11mentees'>
            <OfficerCard
             name={"Sachi Hansalia"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/sachi-hansalia-a1a725216/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-12mentees'>
            <OfficerCard
             name={"Afiya Syed"}
             position={"Mentee"}
             image={"photos/member-photos/AfiyaSyed.JPG"}
             description={'  '}
             linkedin={'https://linkedin.com/in/afiya-syed-7aa941279/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-13mentees'>
            <OfficerCard
             name={"Waverly Souvannachack"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/wsouvannachack'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-14mentees'>
            <OfficerCard
             name={"Lana Tran"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://linkedin.com/in/lana-tran-pie/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-15mentees'>
            <OfficerCard
             name={"Valeria Gallardo"}
             position={"Mentee"}
             image={"photos/member-photos/ValeriaGallardo.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/valeria-gallardo-617ab820b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-16mentees'>
            <OfficerCard
             name={"Emma Hockett"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/emmahockett'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-17mentees'>
            <OfficerCard
             name={"Parisa Nawar"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/parisanawar/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-18mentees'>
            <OfficerCard
             name={"Sakina Ali"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/sakina-ali36'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-19mentees'>
            <OfficerCard
             name={"Shreya Krishnan"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/shreya-krishnan2004'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-20mentees'>
            <OfficerCard
             name={"Courtney Dickenson"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/courtneyspencer12/'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-21mentees'>
            <OfficerCard
             name={"Rupali Nagendra"}
             position={"Mentee"}
             image={"photos/member-photos/RupaliNagendra.JPG"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/rupalinagendra'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-23mentees'>
            <OfficerCard
             name={"Muskan Dolani"}
             position={"Mentee"}
             image={"photos/member-photos/MuskanDolani.JPG"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/muskandolani/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-24mentees'>
            <OfficerCard
             name={"Medha Saraswathy Govindan"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/'} /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-25mentees'>
            <OfficerCard
             name={"Meenakshi Sundar Rajan"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/meenakshi-s-0902751ab/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-26mentees'>
            <OfficerCard
             name={"Zainab Faisal"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/zainab-faisal-34b292273'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-27mentees'>
            <OfficerCard
             name={"Taylor Beers"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com'} /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-28mentees'>
            <OfficerCard
             name={"Rashika Maheshwari"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com'} /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>


            <div className='item-29mentees'>
            <OfficerCard
             name={"Shelley Nguyen"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/shelley-nguyen-03bb8028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-30mentees'>
            <OfficerCard
             name={"Joyce Dong"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/joyce-dong-328b8628b/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-31mentees'>
            <OfficerCard
             name={"Mahum Rana"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/mahum-rana-3935701aa'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-32mentees'>
            <OfficerCard
             name={"Elizabeth Diaz"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/'}  /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-33mentees'>
            <OfficerCard
             name={"Zoe Lao"}
             position={"Mentee"}
             image={"photos/member-photos/ZoeLao.JPG"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/zoe-lao'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-34mentees'>
            <OfficerCard
             name={"Favour Osuji"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'http://linkedin.com/in/favour-osuji-1a272b231'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-35mentees'>
            <OfficerCard
             name={"Prachi Bohra"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com'} /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-36mentees'>
            <OfficerCard
             name={"Lana Musmar"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/lana-musmar-248a74293'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-37mentees'>
            <OfficerCard
             name={"Brooke Dion"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com'} /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-38mentees'>
            <OfficerCard
             name={"Angela Gonzalez"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com'} /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-40mentees'>
            <OfficerCard
             name={"Moxaben Bhupatbhai Zalawadia"}
             position={"Mentee"}
             image={"photos/member-photos/MoxabenZalawadia.JPG"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/moksha-zalavadiya/'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-41mentees'>
            <OfficerCard
             name={"Nishtha Shukla"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/nishtha-shukla-47940b182/'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-42mentees'>
            <OfficerCard
             name={"Wenting Wang"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com'} /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-43mentees'>
            <OfficerCard
             name={"Vinaya Uttam Bomnale"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/vinayabomnale/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-44mentees'>
            <OfficerCard
             name={"Zongyang Du"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/'} /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-45mentees'>
            <OfficerCard
             name={"Tejaswini Indala"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/tejaswini-indala'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-46mentees'>
            <OfficerCard
             name={"Adithya Pradeep"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/adithya-pradeep-vp24'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-47mentees'>
            <OfficerCard
             name={"Naeeme Modir"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/'} /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-48mentees'>
            <OfficerCard
             name={"Charlotte Marasigan"}
             position={"Mentee"}
             image={"photos/member-photos/CharlotteMarasigan.JPG"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/charlottemarasigan/'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-50mentees'>
            <OfficerCard
             name={"Sharvari More"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/shavari-more/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-51mentees'>
            <OfficerCard
             name={"Laksha Arora"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/laksha-arora-98458a205'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-52mentees'>
            <OfficerCard
             name={"Erin Turgut"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com'} /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-53mentees'>
            <OfficerCard
             name={"Nandini Paidesetty "}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/nandini-paidesetty-9b997220a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-54mentees'>
            <OfficerCard
             name={"Uma Uppuloori"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/uma-uppuloori/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-55mentees'>
            <OfficerCard
             name={"Damini Putti"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'www.linkedin.com/in/damini-putti'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-56mentees'>
            <OfficerCard
             name={"Shelby Vo"}
             position={"Mentee"}
             image={"photos/member-photos/ShelbyVo.JPG"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/shelby-vo/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-57mentees'>
            <OfficerCard
             name={"Stephanie Barnard"}
             position={"Mentee"}
             image={"photos/member-photos/StephanieBarnard.JPG"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/stephanie-barnard/'}
             font={'1.1'}
             ></OfficerCard>
             </div>
            
            <div className='item-58mentees'>
            <OfficerCard
             name={"Awino Odak"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/awino-odak?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BA%2BDtyelhQhqYhD26gv4r6A%3D%3D'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-59mentees'>
            <OfficerCard
             name={"Swathi Kote"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/swathikote/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-60mentees'>
            <OfficerCard
             name={"Shruthi Chittanooru"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/'} /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-61mentees'>
            <OfficerCard
             name={"Queensley Umeh"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/'} /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-62mentees'>
            <OfficerCard
             name={"Sarah Jacob"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/sarah-ann-jacob/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-63mentees'>
            <OfficerCard
             name={"Mytri Nair"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'www.linkedin.com/in/mytrinair'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-64mentees'>
            <OfficerCard
             name={"Ximena Perez"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/me?trk=p_mwlite_wvmp-secondary_nav'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-65mentees'>
            <OfficerCard
             name={"Victoria Vynnychok"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/vvyn/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-66mentees'>
            <OfficerCard
             name={"Paola De La Cruz"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/paola-de-la-cruz-279197263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-67mentees'>
            <OfficerCard
             name={"Tanmayi Akasapu"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/tanmayi-akasapu/'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-68mentees'>
            <OfficerCard
             name={"Sneha Mandal"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/sneha-mandal/'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-69mentees'>
            <OfficerCard
             name={"Leah Kovarnik"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/leah-k-90a636206'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-70mentees'>
            <OfficerCard
             name={"Amal Saeed"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/amal-saeed-9876b92b0'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-71mentees'>
            <OfficerCard
             name={"Mahasin Makki"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'www.linkedin.com/in/mahasin-makki-570744283'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-72mentees'>
            <OfficerCard
             name={"Shraddha Patel"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/spatel510/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-73mentees'>
            <OfficerCard
             name={"Farah Khalil Ahamed Munavary"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'www.linkedin.com/in/farah-khalil-ahamed-munavary-a65baa249'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-74mentees'>
            <OfficerCard
             name={"Shraddha Subash"}
             position={"Mentee"}
             image={"photos/member-photos/ShraddhaSubash.JPG"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/shraddha-subash-53936a1a9/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-75mentees'>
            <OfficerCard
             name={"Cynthia Hernandez"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com'} /* not provided */
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-76mentees'>
            <OfficerCard
             name={"Sandra Luo"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/sandradeluo'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-77mentees'>
            <OfficerCard
             name={"Nihita Soma"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/nihitasoma/'}
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-78mentees'>
            <OfficerCard
             name={"Leena Nur Hussein"}
             position={"Mentee"}
             image={"photos/member-photos/Placeholder.png"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/leena-hussein-ab0a8b166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            <div className='item-79mentees'>
            <OfficerCard
             name={"Sophie Johannesen"}
             position={"Mentee"}
             image={"photos/member-photos/SophieJohannesen.JPG"}
             description={'  '}
             linkedin={'https://www.linkedin.com/in/sophia-johannesen-b5a878238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} 
             font={'1.1'}
             ></OfficerCard>
            </div>

            </section>
             
        </div>
    );
}

export default Mentees;