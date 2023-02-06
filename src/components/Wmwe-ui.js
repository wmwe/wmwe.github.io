import React from 'react';
import linkedinNavy from '../assets/linkedin-icon-navy.png';
import './Wmwe-ui.css';

export const OfficerCard = ({name, position, image, description, linkedin, font}) => {
  return (
   
    <div className='officer-card'>

      <img className='image-oc' src={image}></img>

      <h1 className='name-oc'>{name}</h1>

      <div className='position-line-oc'>
      <h1 className='officer-position-oc' style={{fontSize:`${font}rem`}}>{position}</h1>
      <a href={linkedin} className='link-oc'>
        <img src={linkedinNavy} className='linkedin-navy'></img>
      </a>
      
      </div>
      

      <h2 className='description-oc'>{description}</h2>

    </div>
    
  )
}




export default OfficerCard;