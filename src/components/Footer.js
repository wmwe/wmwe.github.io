import React from 'react';

import './FooterStyle.css'

import wmwelogo from "./wmwelogo.png"
import instagram from "./instagram.png"
import linkedin from "./linkedin.png"
import facebook from "./facebook.png"
import mail from "./mail.png"

function Footer(props) {
    return (
        <div className="footerset">
            <div className="wmwe">
                <img className="logo2" src={wmwelogo}/>
            </div>

            <div className="linkedpages">
                <p><strong>WMWE<br /></strong> 
                <a href="./About">about</a><br /> 
                <a href="./Events">events</a><br /> 
                <a href="./Officers">officers</a><br /> 
                <a href="./Members">members</a><br /> 
                <a href="./Login">member login</a></p>
            </div>

           
            <div className="socials">
                <p><strong>connect with us!</strong></p>
                <div className="socialpics">
                    <img className="instagram" src={instagram}/>
                    <img className="linkedin" src={linkedin}/>
                    <img className="facebook" src={facebook}/>
                </div>
            </div>

            <div className="contact">
                <p><strong>contact us</strong></p>

                <div className="mail_link">
                    <img className="mail" src={mail}/>

                    <p><a className="link" target="blank" href="mailto: wmweatutd@gmail.com">
                    wmweatutd@gmail.com
                    </a></p>
                </div>
            </div>

        </div>
    );
}

export default Footer;