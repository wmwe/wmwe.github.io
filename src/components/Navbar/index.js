import React from 'react';
import { Link } from "react-router-dom";

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';

// const Navbar = () => {
//     return (
//         <div>
//             <nav>
//                 <Link to="/">Home</Link> |{" "}
//                 <Link to="about">About</Link> |{" "}
//                 <Link to="events">Events</Link> |{" "}
//                 <Link to="officers">Officers</Link> |{" "}
//                 <Link to="members">Members</Link> |{" "}
//                 <Link to="contact">Contact</Link> |{" "}
//                 <Link to="login">Login</Link>
//             </nav>
//         </div>
//     );
// }

const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
    
          <NavMenu>
          <NavLink to='/' activeStyle>
              wmwelogo
            </NavLink>
            <NavLink to='/about' activeStyle>
              about
            </NavLink>
            <NavLink to='/events' activeStyle>
              events
            </NavLink>
            <NavLink to='/officers' activeStyle>
              officers
            </NavLink>
            <NavLink to='/members' activeStyle>
              members
            </NavLink>
            <NavLink to='/mentees' activeStyle>
              mentees
            </NavLink>
            <NavLink to='/contact' activeStyle>
              contact
            </NavLink>
            {/* Second Nav */}
            <NavBtnLink to='/login'>member login</NavBtnLink>
          </NavMenu>
          
        </Nav>
      </>
    );
  };

export default Navbar;