import React, {Component} from 'react';
import "./Header.css"; 
import wmweLogo from "./wmwelogo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

class Header extends Component {

    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className='NavbarItems'>
                <a className='logo-flex' href='/'>
                    <img style={{height: "40px", paddingLeft: "10px"}} src={wmweLogo}></img>
                </a>
                

                <div className='menu-icon' onClick={this.handleClick}>
            
                    {this.state.clicked ? <FaTimes className='fa-times'></FaTimes>
                    : <FaBars className='fa-bars'></FaBars>}
                </div>

                

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            <li>
                                <a className="nav-links" href="/about">
                                    about
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" href="/events">
                                    events
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" href="/officers">
                                    officers
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" href="/members">
                                    members
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" href="/contact">
                                    contact
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" href="/login">
                                    member login
                                </a>
                            </li>
                </ul>
              
                
            </nav>
        )
    }
}

export default Header;