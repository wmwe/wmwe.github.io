import React from 'react';

import './FooterStyle.css'
import "./Home.css"

import wmwelogo from "./wmwelogo.png"
import instagram from "./instagram.png"
import linkedin from "./linkedin.png"
import facebook from "./facebook.png"
import mail from "./mail.png"
import { useNavigate } from "react-router-dom";

// updated footer
function Footer(props) {

    const navigate = useNavigate();
    const navigateToAbout = () => {
        navigate('/about');
    };
    const navigateToEvents = () => {
        navigate('/events');
    };
    const navigateToOfficers = () => {
        navigate('/officers');
    };
    const navigateToMembers = () => {
        navigate('/members');
    };
    const navigateToContact = () => {
        navigate('/contact');
    };
    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="footerset">
            <div className="wmwe">
                <img className="logo2" src={wmwelogo} />
            </div>

            <div className="linkedpages-footer">
                <h3><strong>WMWE<br /></strong></h3>
                <div className="redirect">
                    <p className='footer-links-container'>
                        <li>
                            <button className="footer-links" onClick={navigateToAbout}>
                                about
                            </button>
                        </li>

                        <li>
                            <button className="footer-links" onClick={navigateToEvents}>
                                events
                            </button>
                        </li>

                        <li>
                            <button className="footer-links" onClick={navigateToOfficers}>
                                officers
                            </button>
                        </li>

                        <li>
                            <button className="footer-links" onClick={navigateToMembers}>
                                members
                            </button>
                        </li>

                        <li>
                            <button className="footer-links" onClick={navigateToContact}>
                                contact
                            </button>
                        </li>

                        <li>
                            <button className="footer-links" onClick={navigateToLogin}>
                                member login
                            </button>
                        </li>
                    </p>
                </div>
            </div>

            <div className="socials-footer">
                <h3><strong>Connect with us</strong></h3>
                <div className="socialpics">
                    <a style={{ padding: 5 }} href="https://www.instagram.com/wmweatutd/" target="_blank"><img className="instagram" src={instagram} /></a>
                    <a style={{ padding: 5 }} href="https://www.linkedin.com/in/wmweatutd/" target="_blank"><img className="linkedin" src={linkedin} /></a>
                    <a style={{ padding: 5 }} href="https://www.facebook.com/wmweatutd/" target="_blank"><img className="facebook" src={facebook} /></a>
                </div>
            </div>


            <div className="contact-footer">
                <h3><strong>Contact us</strong></h3>
                <div className="socialpics">

                    <a href="mailto: wmweatutd@gmail.com" target="_blank"><img className="mail" src={mail} /></a>
                    <a style={{ fontSize: "0.8rem", paddingLeft: 3 }}> wmweatutd@gmail.com</a>
                </div>

            </div>
        </div>
    );
}

export default Footer;