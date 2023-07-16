import React, {useState } from 'react';
import "./Header.css"; 
import wmweLogo from "./wmwelogo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function Header(props) {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    };
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
    const navigateToContact= () => {
        navigate('/contact');
    };
    const navigateToLogin = () => {
        navigate('/login');
    };
    

    const [state, setState] = useState({clicked: false});

    const handleClick = () => {
        setState({ clicked: !state.clicked})
    }
        return(
            <nav className='NavbarItems'>
                <a className='logo-flex' onClick={navigateToHome}>
                    <img className='logo-image' style={{height: "40px", paddingLeft: "10px"}} src={wmweLogo}></img>
                </a>
                

                <div className='menu-icon' onClick={handleClick}>
            
                    {state.clicked ? <FaTimes className='fa-times'></FaTimes>
                    : <FaBars className='fa-bars'></FaBars>}
                </div>

                

                <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            <li>
                                <a className="nav-links" onClick={navigateToAbout}>
                                    about
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" onClick={navigateToEvents}>
                                    events
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" onClick={navigateToOfficers}>
                                    officers
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" onClick={navigateToMembers}>
                                    members
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" onClick={navigateToContact}>
                                    contact
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" onClick={navigateToLogin}>
                                    member login
                                </a>
                            </li>
                </ul>
              
                
            </nav>
        )
}

export default Header;