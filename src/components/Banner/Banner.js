import React, { Component } from 'react'
import Button from '../Button/Button';
import "../Home.css"

export default class Banner extends Component {
  render() {
    return (
        <div className="banner1">
        <h3 className="banner-text" style={{marginRight: "20%", marginLeft:"20%"}}>
          Applications for Spring 2023 are now open!
        </h3>
        <Button
        onClick={(e) => {
          e.preventDefault();
          window.location.href="https://www.linkedin.com/in/wmweatutd/";
          }}
          children={"mentee"}
        ></Button>
        <Button
        onClick={(e) => {
          e.preventDefault();
          window.location.href="https://www.linkedin.com/in/wmweatutd/";
          }}
          children={"mentor"}
        ></Button>
      </div>
    )
  }
}
