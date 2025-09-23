
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
             name="Krutika Shinde"
             position="Mentee"
             image="photos/member-photos/Krutika_Shinde.jpeg"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-2mentees'>
            <OfficerCard
             name="Johana Hernandez"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-3mentees'>
            <OfficerCard
             name="Nabeeha Uddin"
             position="Mentee"
             image="photos/member-photos/PlaceHolder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-4mentees'>
            <OfficerCard
             name="Varsha Shashishekar"
             position="Mentee"
             image="photos/member-photos/Headshot - Varsha Shashishekar.jpg"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-5mentees'>
            <OfficerCard
             name="Mallika Nagarkatti"
             position="Mentee"
             image="photos/member-photos/MallikaN.jpeg"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-6mentees'>
            <OfficerCard
             name="Diya Mathew"
             position="Mentee"
             image="photos/member-photos/DiyaMathew.png"
             description=""
             linkedin="https://www.linkedin.com/in/diya-mathew-1382ba2a8/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-7mentees'>
            <OfficerCard
             name="Krista Caparas"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-8mentees'>
            <OfficerCard
             name="Rachel Mannon"
             position="Mentee"
             image="photos/member-photos/PlaceHolder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-9mentees'>
            <OfficerCard
             name="Sana Dantulwar"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-10mentees'>
            <OfficerCard
             name="Ankita Saha"
             position="Mentee"
             image="photos/member-photos/AnkitaSaha.png"
             description=""
             linkedin="https://www.linkedin.com/in/ankitasaha-ce"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-11mentees'>
            <OfficerCard
             name="Architha TCA"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-12mentees'>
            <OfficerCard
             name="Neha Midatana"
             position="Mentee"
             image="photos/member-photos/PlaceHolder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-13mentees'>
            <OfficerCard
             name="Tasneem Akram"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-14mentees'>
            <OfficerCard
             name="Abigail (Abby) Bazyn"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-15mentees'>
            <OfficerCard
             name="Ciara Gomez"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-16mentees'>
            <OfficerCard
             name="Nidhi Santosh"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/nidhi-santosh-4070682aa"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-17mentees'>
            <OfficerCard
             name="Inaaya Rana"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-18mentees'>
            <OfficerCard
             name="Afra Ibnat"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/afra-ibnat-9621a4263/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-19mentees'>
            <OfficerCard
             name="Pranathi Uppuloori"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-20mentees'>
            <OfficerCard
             name="Michelle Rivas"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-21mentees'>
            <OfficerCard
             name="Sravani Ravipudi"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-22mentees'>
            <OfficerCard
             name="Drashti Shah"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/drashti-shah-08796b325/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-23mentees'>
            <OfficerCard
             name="Zain Alkhatib"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-24mentees'>
            <OfficerCard
             name="Thi My Linh Le"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-25mentees'>
            <OfficerCard
             name="Sarina Iesha Mahmud"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/sarina-mahmud/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-26mentees'>
            <OfficerCard
             name="Poojasri Sundaresan"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/poojasri-sundaresan"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-27mentees'>
            <OfficerCard
             name="Kirsten Mba"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-28mentees'>
            <OfficerCard
             name="Namrata Kulkarni"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-29mentees'>
            <OfficerCard
             name="Reina Rout"
             position="Mentee"
             image="photos/member-photos/PlaceHolder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-30mentees'>
            <OfficerCard
             name="Jayne Srinivas"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-31mentees'>
            <OfficerCard
             name="Srija Vuppala"
             position="Mentee"
             image="photos/member-photos/SrijaVuppala.jpeg"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-32mentees'>
            <OfficerCard
             name="Kinsey Lee Groves"
             position="Mentee"
             image="photos/member-photos/PlaceHolder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-33mentees'>
            <OfficerCard
             name="Melissa Mejia"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-34mentees'>
            <OfficerCard
             name="Arya Rane"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-35mentees'>
            <OfficerCard
             name="Kasish Jain"
             position="Mentee"
             image="photos/member-photos/PlaceHolder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-36mentees'>
            <OfficerCard
             name="Layna Burrow"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-37mentees'>
            <OfficerCard
             name="Swarna Sre Ganesh Shankar"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/swarnasreg"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-38mentees'>
            <OfficerCard
             name="Venkata Sri Pravallika Bysani"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-39mentees'>
            <OfficerCard
             name="Beatriz Ferreira Riccardi"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-40mentees'>
            <OfficerCard
             name="Pragya Singh "
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-41mentees'>
            <OfficerCard
             name="Lana Tran"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-42mentees'>
            <OfficerCard
             name="Ramsha Mazhar"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-43mentees'>
            <OfficerCard
             name="Shreeya Parajuli"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-44mentees'>
            <OfficerCard
             name="Avneet Kaur"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-45mentees'>
            <OfficerCard
             name="Cassidy Pena"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-46mentees'>
            <OfficerCard
             name="Mourede Otchere"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-47mentees'>
            <OfficerCard
             name="Nhi Tran"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-48mentees'>
            <OfficerCard
             name="Roha Fatima"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-49mentees'>
            <OfficerCard
             name="Nandhana Kamalabaskaran"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-50mentees'>
            <OfficerCard
             name="Shahim Panjwani"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-51mentees'>
            <OfficerCard
             name="Tammy Tran"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-52mentees'>
            <OfficerCard
             name="Sammy Pandey"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-53mentees'>
            <OfficerCard
             name="Tamanna Khurana"
             position="Mentee"
             image="photos/member-photos/TamannaKhurana.png"
             description=""
             linkedin="https://www.linkedin.com/in/tamanna-khurana-48a6a1230/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-54mentees'>
            <OfficerCard
             name="Hadeel Hassanien"
             position="Mentee"
             image="photos/member-photos/PlaceHolder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-55mentees'>
            <OfficerCard
             name="Farah Khalil Ahamed Munavary"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-56mentees'>
            <OfficerCard
             name="Vaishnavi Josyula"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/vaishnavi-josyula-4591a5267/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-57mentees'>
            <OfficerCard
             name="Mia Sorola Yoshida"
             position="Mentee"
             image="photos/member-photos/MiaSorola.png"
             description=""
             linkedin="https://www.linkedin.com/in/miasorolayoshida/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-58mentees'>
            <OfficerCard
             name="Enaya Jawed"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-59mentees'>
            <OfficerCard
             name="Lauren Spitz"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-60mentees'>
            <OfficerCard
             name="Shriya Kalyan"
             position="Mentee"
             image="photos/member-photos/ShriyaKalyan.jpg"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div> 

            <div className='item-61mentees'>
            <OfficerCard
             name="Trisha Chalikandi"
             position="Mentee"
             image="photos/member-photos/PlaceHolder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-62mentees'>
            <OfficerCard
             name="Alison Kao"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-63mentees'>
            <OfficerCard
             name="Akshi Biswal"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-64mentees'>
            <OfficerCard
             name="Wenddy He"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-65mentees'>
            <OfficerCard
             name="Hannah Madsen"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/hannah-madsen-141439327/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-66mentees'>
            <OfficerCard
             name="Prakrithi Subha Sai Grandhi"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-67mentees'>
            <OfficerCard
             name="Toluwalase Adeyemi"
             position="Mentee"
             image="photos/member-photos/ToluAdeyemi.jpeg"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-68mentees'>
            <OfficerCard
             name="Aashita Jain"
             position="Mentee"
             image="photos/member-photos/AashitaJain.JPG"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-69mentees'>
            <OfficerCard
             name="Aishwarya Pazhani Kumar Sujatha"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-70mentees'>
            <OfficerCard
             name="Chinmayee Kale"
             position="Mentee"
             image="photos/member-photos/Chinmayee_Kale.jpeg"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-71mentees'>
            <OfficerCard
             name="Vedangi Shah"
             position="Mentee"
             image="photos/member-photos/PlaceHolder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            {/* <div className='item-72mentees'>
            <OfficerCard
             name="Katy Brown"
             position="Mentee"
             image="photos/member-photos/Katy_Brown.jpg"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div> */}

            <div className='item-73mentees'>
            <OfficerCard
             name="Simar Rekhi"
             position="Mentee"
             image="photos/member-photos/SimarRekhi.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-74mentees'>
            <OfficerCard
             name="Purva Patel"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-75mentees'>
            <OfficerCard
             name="Laxmi Akshaya Komaragiri"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-76mentees'>
            <OfficerCard
             name="Charvisree Koripella"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-77mentees'>
            <OfficerCard
             name="Tanmayi Alapati"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-78mentees'>
            <OfficerCard
             name="Sansita Gajavelli"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-79mentees'>
            <OfficerCard
             name="Charitha Sarraju"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-80mentees'>
            <OfficerCard
             name="Maggie Buvanendiran"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-81mentees'>
            <OfficerCard
             name="Nida Rathichith"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            </section>   
        </div>
    );
}

export default Mentees;