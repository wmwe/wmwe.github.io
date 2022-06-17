import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

//import the pages
import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Home from "./components/Home";
import Login from "./components/Login";
import Members from "./components/Members";
import Officers from "./components/Officers";
import SignUp from "./components/SignUp";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  // return (
  //   <div className="App">
  //     <h1>Hello</h1>
  //     <Router>

  //       <Header></Header>
  //       <div className="container">
  //       <Routes>
  // <Route path="/" element={<Home />} />
  // <Route path="/about" element={<About />} />
  // <Route path="/contact" element={<Contact />} />
  // <Route path="/events" element={<Events />} />
  // <Route path="/login" element={<Login />} />
  // <Route path="/signup" element={<SignUp />} />
  // <Route path="/members" element={<Members />} />
  // <Route path="/officers" element={<Officers />} />
  //       </Routes>
  //       </div>
  //       <Footer></Footer>
  //     </Router>
  //   </div>
  // );
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/members" element={<Members />} />
          <Route path="/officers" element={<Officers />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
