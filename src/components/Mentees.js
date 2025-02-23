
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
             name="Joanna Abraham"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-2mentees'>
            <OfficerCard
             name="Mikaila Meintjes"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-3mentees'>
            <OfficerCard
             name="Charlotte Marasigan"
             position="Mentee"
             image="photos/member-photos/CharlotteMarasigan.png"
             description=""
             linkedin="https://www.linkedin.com/in/charlottemarasigan"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-4mentees'>
            <OfficerCard
             name="Lujain Saleem"
             position="Mentee"
             image="photos/member-photos/LujainJauoosi.png"
             description=""
             linkedin="https://www.linkedin.com/in/lujain-saleem-348271309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-5mentees'>
            <OfficerCard
             name="Tanisha Mazumder"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/tanisha-mazumder-79a51b221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
             name="Layla Imamovic"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/layla-imamovic-042532328/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-8mentees'>
            <OfficerCard
             name="Namyuktha Prakash"
             position="Mentee"
             image="photos/member-photos/NamyukthaPrakash.png"
             description=""
             linkedin="https://www.linkedin.com/in/namyuktha-prakash/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-9mentees'>
            <OfficerCard
             name="Vidhya Yemparala"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/vidhya-y-695580274"
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
             name="Mahalakshmi Pandian"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-12mentees'>
            <OfficerCard
             name="Rachel Prakasham"
             position="Mentee"
             image="photos/member-photos/RachelP.png"
             description=""
             linkedin="https://www.linkedin.com/in/rachelprakasham"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-13mentees'>
            <OfficerCard
             name="Arya Rane"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/arya-rane-a17983284/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-14mentees'>
            <OfficerCard
             name="Sally Duru"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-15mentees'>
            <OfficerCard
             name="Claudia Nguyen"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/claudia-nguyen-6b429a1a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
             name="Nishi Sam Satheesh"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-20mentees'>
            <OfficerCard
             name="Isabella Ran"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-21mentees'>
            <OfficerCard
             name="Marilyn Mathews"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/marilynmathews/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-22mentees'>
            <OfficerCard
             name="Drashti Sha"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/drashti-shah-08796b325/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-23mentees'>
            <OfficerCard
             name="Gayatri Rajesh Mangire"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/gayatri-mangire"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-24mentees'>
            <OfficerCard
             name="Daisy Nguyen"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/daisy-nguyen-688a621a9"
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
             name="Hania Shuaib"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/hania-shuaib-b54258303"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-28mentees'>
            <OfficerCard
             name="Akhila Susarla"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/akhila-susarla-1803b41b6/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-29mentees'>
            <OfficerCard
             name="Nikita Chaudhry"
             position="Mentee"
             image="photos/member-photos/NikitaChaudhry.png"
             description=""
             linkedin="https://www.linkedin.com/in/nikita-chaudhry/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-30mentees'>
            <OfficerCard
             name="Ammara Siddiqui"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/ammara-siddiqui-74b996317/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-31mentees'>
            <OfficerCard
             name="Anahita Rismani"
             position="Mentee"
             image="photos/member-photos/AnahitaRismani.png"
             description=""
             linkedin="https://www.linkedin.com/in/anahita-rismani-0abb80280"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-32mentees'>
            <OfficerCard
             name="Kavimayil P K"
             position="Mentee"
             image="photos/member-photos/KavimayilPK.png"
             description=""
             linkedin="https://www.linkedin.com/in/kavimayilpk"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-33mentees'>
            <OfficerCard
             name="Sanya Oak"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/sanyaoak/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-34mentees'>
            <OfficerCard
             name="Hafsah Navaid"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/hafsah-n-8442832a3"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-35mentees'>
            <OfficerCard
             name="Lakshmi Vyshnavi Ummadisetti"
             position="Mentee"
             image="photos/member-photos/LakshmiVyshnaviUmmadisetti.png"
             description=""
             linkedin="https://www.linkedin.com/in/vyshnavi-ummadisetti176/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-36mentees'>
            <OfficerCard
             name="Reeva Aryal"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/reeva-aryal-84222a23a/"
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
             name="Srinidhi Sivakaminathan"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-39mentees'>
            <OfficerCard
             name="Anusha Patel"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/anushapatel6571/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-40mentees'>
            <OfficerCard
             name="Vaishnavi Boppana"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/vaishnavi-boppana-0ab60729a/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-41mentees'>
            <OfficerCard
             name="Jenna Jan"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/jenna-jan-801ab0251/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-42mentees'>
            <OfficerCard
             name="Kaia Sonoda"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/kaia-sonoda-233618291"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-43mentees'>
            <OfficerCard
             name="Vedanshi Sreeramoju"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/vedanshi-sreeramoju-b26b32215/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-44mentees'>
            <OfficerCard
             name="Srujana Ponduri"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="Srujana Reddy"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-45mentees'>
            <OfficerCard
             name="Linh Nguyen"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/linh-nguyen-885740328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-46mentees'>
            <OfficerCard
             name="Jazmin Gutierrez"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/jazmin-gutierrez-a42559327"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-47mentees'>
            <OfficerCard
             name="Snigdha Tadi"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/snigdha-tadi/253321219/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-48mentees'>
            <OfficerCard
             name="Olivia Anderson"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/olivia-anderson-043172254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-49mentees'>
            <OfficerCard
             name="Cristina Angelica Adame"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/cristina-adame-3b17981ba"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-50mentees'>
            <OfficerCard
             name="Sarah Park"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/sjpsarah/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-51mentees'>
            <OfficerCard
             name="Sanvi Gudipati"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/sanvi-gudipati-57554534a/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-52mentees'>
            <OfficerCard
             name="Neha Senthil Kumar"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/neha-senthil-kumar/"
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
             name="Tulasi Janjanam"
             position="Mentee"
             image="photos/member-photos/HemanthaTulasiJanjanam.png"
             description=""
             linkedin="https://www.linkedin.com/in/tulasi-janjanam123"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-55mentees'>
            <OfficerCard
             name="Janhavi Tamhankar"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/janhavitamhankar/"
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
             name="Aashna Kothari"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/aashna-kothari-461804257"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-59mentees'>
            <OfficerCard
             name="Tanaz Lodi"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/tanazlodi/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-60mentees'>
            <OfficerCard
             name="Stephanie Barnard"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-61mentees'>
            <OfficerCard
             name="Amin Fathima Sadique"
             position="Mentee"
             image="photos/member-photos/AminFathimaSadique.png"
             description=""
             linkedin="https://www.linkedin.com/in/amin-fathima-sadique-121945212/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-62mentees'>
            <OfficerCard
             name="Amber Kaur"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/amber-kaur-377bb1331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-63mentees'>
            <OfficerCard
             name="Samiya Sahu"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://linkedin.com/in/samiya-sahu-a3042824a/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-64mentees'>
            <OfficerCard
             name="Sidrah Rashad"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/sidrah-r-8546842a1/"
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
             name="Andrea Roman"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/andrea-roman-444998313/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-67mentees'>
            <OfficerCard
             name="Toluwalase Adeyemi"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-68mentees'>
            <OfficerCard
             name="Ami Dholakia"
             position="Mentee"
             image="photos/member-photos/AmiDholakia.png"
             description=""
             linkedin="https:/www.linkedin.com/in/ami-dholakia/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-69mentees'>
            <OfficerCard
             name="Sumayyah Hasan"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-70mentees'>
            <OfficerCard
             name="Xochitl Juarez Morgan"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://wwww.linkedin.com/in/xochitl-juarez-morgan/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-71mentees'>
            <OfficerCard
             name="Hongyen Thi Nguyen"
             position="Mentee"
             image="photos/member-photos/HongyenThiNguyen.png"
             description=""
             linkedin="https://www.linkedin.com/in/crmqueen/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-72mentees'>
            <OfficerCard
             name="Rika Bryant"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-73mentees'>
            <OfficerCard
             name="Niloufar Adab"
             position="Mentee"
             image="photos/member-photos/NiloofarAdab.png"
             description=""
             linkedin="Niloufar Adab"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-74mentees'>
            <OfficerCard
             name="Aashika Kishore"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/aashikakishore/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-75mentees'>
            <OfficerCard
             name="Tramanh Trinh"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/tramanhtrinh/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-76mentees'>
            <OfficerCard
             name="Nowsin Anzum Mozumder"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/nowsinanzummozumder/"
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-77mentees'>
            <OfficerCard
             name="Karen Pinedo"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/karen-pinedo/"
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
             name="Madhumita (Maggie) Buvanendiran"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-81mentees'>
            <OfficerCard
             name="Durre Adan"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin=""
             font="1.1"
             ></OfficerCard>
            </div>

            <div className='item-82mentees'>
            <OfficerCard
             name="Hemal Pathak"
             position="Mentee"
             image="photos/member-photos/Placeholder.png"
             description=""
             linkedin="https://www.linkedin.com/in/hemal-pathak/"
             font="1.1"
             ></OfficerCard>
            </div>

            </section>   
        </div>
    );
}

export default Mentees;