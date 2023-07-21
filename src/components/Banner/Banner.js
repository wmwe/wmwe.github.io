import React from 'react';
import Button from '../Button/Button';
import '../Home.css';

const Banner = ({ children, buttons }) => {
  const handleMenteeClick = (e) => {
    e.preventDefault();
    window.open('https://forms.gle/t3MQ2Hy96QMiBVh79', '_blank');
  };

  const handleMentorClick = (e) => {
    e.preventDefault();
    window.open('https://forms.gle/Qxg4JEP6fPNrkPw47', '_blank');
  };

  return (
    <div className="banner1">
      <h3 className="banner-text">
        {children}
      </h3>
      {buttons}
      
      {/* <Button
        onClick={handleMenteeClick}
        buttonColor="white"
        textColor="#00B1F5"
      >
        mentee
      </Button>
      <Button
        onClick={handleMentorClick}
        buttonColor="white"
        textColor="#00B1F5"
      >
        mentor
      </Button> */}
    </div>
  );
};

export default Banner;
