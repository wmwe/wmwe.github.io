import React from 'react';
import linkedinNavy from '../assets/linkedin-icon-navy.png';
import './Wmwe-ui.css';

export const OfficerCard = ({name, position, image, description, linkedin, font}) => {
  return (
   
    <div className='officer-card'>

      <img className='image' src={image}></img>

      <h1 className='name'>{name}</h1>

      <div className='position-line'>
      <h1 className='officer-position' style={{fontSize:`${font}rem`}}>{position}</h1>
      <a href={linkedin} className='link'>
        <img src={linkedinNavy} className='linkedin-navy'></img>
      </a>
      
      </div>
      

      <h2 className='description'>{description}</h2>

    </div>
    
  )
}




export default OfficerCard;