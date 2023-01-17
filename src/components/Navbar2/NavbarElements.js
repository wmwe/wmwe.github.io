import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';


export const Nav = styled.nav`
background: #F5FCFF;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const logoBtn = styled(Link)`

`

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
}

`;

// export const Bars = styled(FaBars)`
// display: none;
// color: #808080;
// @media screen and (max-width: 768px) {
// 	display: block;
// 	position: absolute;
// 	top: 0;
// 	right: 0;
// 	transform: translate(-100%, 75%);
// 	font-size: 1.8rem;
// 	cursor: pointer;
// }
// `;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;


export const NavBtnLink = styled(Link)`
border-radius: 4px;
padding: 5px 20px;
color: #00B1F5;
outline-color: #00B1F5;
outline-style: solid;

border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #00B1F5;
	color: #fff;
}
`;
