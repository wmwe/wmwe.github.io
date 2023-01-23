import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

//import the pages
import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Home from "./components/Home";
import Login from "./components/Login";
import Members from "./components/Members";
import Mentees from "./components/Mentees";
import Officers from "./components/Officers";
import SignUp from "./components/SignUp";



import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Navbar2 from './components/Navbar2';


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
        <Navbar2></Navbar2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/members" element={<Members />} />
          <Route path="/mentees" element={<Mentees />} />
          <Route path="/officers" element={<Officers />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );


}

// import firebaseApp from './components/fire';


// class App extends Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       user: null,
//     }
  
//     this.authListener = this.authListener.bind(this);
  
//   }
  
//   // componentDidMount() {
//   //     this.authListener();
//   // }
  
//   authListener() {
//     firebaseApp.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({user});
//       } else {
//         this.setState({user: null});
//       }
//     })
//   };

//   render() {
//     return(
//         <div className="App">
  
    
//           <Router>
//             <Navbar></Navbar>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/events" element={<Events />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<SignUp />} />
//               <Route path="/members" element={<Members />} />
//               <Route path="/officers" element={<Officers />} />
//               <Route path="/resetpassword" element={<ResetPassword />} />
//             </Routes>
//             <Footer></Footer>
//           </Router>
//         </div>
//       );
//   }




// function App() {
//   return(
//     <div className="App">

//       {this.state.user ? (<About />) : (<Login />)}

//       <Router>
//         <Navbar></Navbar>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/members" element={<Members />} />
//           <Route path="/officers" element={<Officers />} />
//           <Route path="/resetpassword" element={<ResetPassword />} />
//         </Routes>
//         <Footer></Footer>
//       </Router>
//     </div>
//   );
// }

export default App;
