import React, { Component } from 'react'
import Button from '../Button/Button';
import "../Home.css"

export const Banner = ({children, link}) =>  {
    return (
        <div className="banner1">
        <h3 className="banner-text">
          {children}
        </h3>
        <Button
        onClick={(e) => {
          e.preventDefault();
          window.location.href=`${link}`;
          }}
          children={"mentee"}
          buttonColor={"white"}
          textColor={"#00B1F5"}
        ></Button>
        <Button
        onClick={(e) => {
          e.preventDefault();
          window.location.href="https://www.linkedin.com/in/wmweatutd/";
          }}
          children={"mentor"}
          buttonColor={"white"}
          textColor={"#00B1F5"}
        ></Button>
      </div>
    )
  }

  export default Banner