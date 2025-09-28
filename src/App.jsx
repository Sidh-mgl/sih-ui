import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import { Link } from "react-router-dom";
import Navbar from './navbar/Navbar'
// import Cards from './Cards/Cards'
import Hero from './hero/Hero'
// import Texthover from "./components/texthover/texthover"
import About from './About/About'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Textscroll from './textscroll/Textscroll'
import ScrollVelocity from './scrollvelocity/velocity';
import Login from "./components/login/Login"
import Signup from "./components/register/Signup";
import Quiz from "./Quiz/Quiz";
import Contact from "./Contact/Contact";
import Textabout from "./Textabout/Textabout";
import Footer from "./Footer/Footer"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <Router>
      <Navbar className="sticky" />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Textscroll />
            <ScrollVelocity />
            <Quiz />
            <Textabout />
            <div className="container flex justify-center mt-20 ">
              <div className="content justify-center bg-blue-200">
                <h1 className="main-title capitalize">
                  Changes are in <span className="text-pink-500">our hands</span> !!!
                </h1>

                <p className="description">
                  A World supports your journey toward <strong>sustainability and well-being</strong>, turning
                  your stakeholders into true <strong>agents of change</strong>.
                </p>

                <Link to="/contact" className="contact-btn">Contact Us</Link>
              </div>
            </div>
            <Footer />

          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;
