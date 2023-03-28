import React from 'react';

import './FooterStyle.css'
import "./Home.css"

import wmwelogo from "./wmwelogo.png"
import instagram from "./instagram.png"
import linkedin from "./linkedin.png"
import facebook from "./facebook.png"
import mail from "./mail.png"

// updated footer
function Footer(props) {
    return (
        <div className="footerset">
            <div className="wmwe">
                <img className="logo2" src={wmwelogo}/>
            </div>

            <div className="linkedpages-footer">
                <p><strong>WMWE<br /></strong></p>
                <div className="redirect">
                <p>
                    <a href="./About">about</a><br /> 
                    <a href="./Events">events</a><br /> 
                    <a href="./Officers">officers</a><br /> 
                    <a href="./Members">members</a><br /> 
                    <a href="./Login">member login</a>
                </p>
                </div>
            </div>

            <div className="socials-footer">
                <p><strong>connect with us!</strong></p>
                <div className="socialpics">
                    <a href="https://www.instagram.com/wmweatutd/" target="_blank"><img className="instagram" src={instagram}/></a>
                    <a href="https://www.linkedin.com/in/wmweatutd/" target="_blank"><img className="linkedin" src={linkedin}/></a>
                    <a href="https://www.facebook.com/wmweatutd/" target="_blank"><img className="facebook" src={facebook}/></a>
                </div>
            </div>

            <div>

            </div>

            <div className="contact-footer">
                <p><strong>contact us</strong></p>
            <div className="socialpics">

                    <a href="mailto: wmweatutd@gmail.com" target="_blank"><img className="mail" src={mail}/></a>
                    <a style={{fontSize: "0.8rem", paddingLeft: 3}}> wmweatutd@gmail.com</a>
                </div>

            </div> 
        </div>
    );
}

export default Footer;