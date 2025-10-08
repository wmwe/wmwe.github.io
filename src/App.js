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
import MPointTracker from "./components/MPointTracker";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Forgot from "./components/Forgot";
import Members from "./components/Members";
import Mentees from "./components/Mentees";
import Officers from "./components/Officers";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./components/Account";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/m-points" element={<MPointTracker />} />
          <Route path="/members" element={<Members />} />
          <Route path="/mentees" element={<Mentees />} />
          <Route path="/officers" element={<Officers />} />
        </Routes>

        <AuthContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>

        <Footer></Footer>
      </Router>
    </div>
  );
}
export default App;
