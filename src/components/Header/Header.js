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
    const navigateToMPoints = () => {
        navigate('/m-points');
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

    const [state, setState] = useState({clicked: false});

    const handleClick = () => {
        setState({ clicked: !state.clicked})
    }
        return(
            <nav className='NavbarItems'>
                <button className='logo-flex' onClick={navigateToHome}>
                    <img className='logo-image' style={{height: "40px", paddingLeft: "10px"}} src={wmweLogo}></img>
                </button>
                

                <div className='menu-icon' onClick={handleClick}>
            
                    {state.clicked ? <FaTimes className='fa-times'></FaTimes>
                    : <FaBars className='fa-bars'></FaBars>}
                </div>

                

                <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            <li>
                                <button className="nav-links" onClick={navigateToAbout}>
                                    about
                                </button>
                            </li>

                            <li>
                                <button className="nav-links" onClick={navigateToEvents}>
                                    events
                                </button>
                            </li>

                            <li>
                                <button className="nav-links" onClick={navigateToMPoints}>
                                    m-points
                                </button>
                            </li>

                            <li>
                                <button className="nav-links" onClick={navigateToOfficers}>
                                    officers
                                </button>
                            </li>

                            <li>
                                <button className="nav-links" onClick={navigateToMembers}>
                                    members
                                </button>
                            </li>

                            <li>
                                <button className="nav-links" onClick={navigateToContact}>
                                    contact
                                </button>
                            </li>
                </ul>
              
                
            </nav>
        )
}

export default Header;
