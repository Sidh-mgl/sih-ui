import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar/Navbar'
// import Cards from './Cards/Cards'
import Hero from './hero/Hero'
// import Texthover from "./components/texthover/texthover"
import About from './About/About'
import AOS from "aos"
import "aos/dist/aos.css"; // Import AOS styles
import Textscroll from './textscroll/Textscroll'
import ScrollVelocity from './scrollvelocity/velocity';
import Login from "./components/login/Login"
import Signup from "./components/register/Signup";
import Quiz from "./Quiz/Quiz";

const App = () => {
  return (
    <Router>
      <Navbar className="sticky" />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Textscroll />
            <About />
            <ScrollVelocity />
            <Quiz />
          </>
        } />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App;
