import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-family: 'Montserrat', sans-serif;
    flex-flow: column nowrap;
    background-color: #F5FCFF;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
        color: #1B3A5D;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="/About.js">about</a></li>
      <li><a href="/Events.js">events</a></li>
      <li><a href="/Officers.js">officers</a></li>
      <li><a href="/Members.js">members</a></li>
      <li><a href="/Contact.js">contact</a></li>
    </Ul>
  )
}

export default RightNav