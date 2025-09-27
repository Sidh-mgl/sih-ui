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



const App = () => {

  return (
    <div>
      <Navbar className="sticky" />
      <Hero />
      <Textscroll />
      <About />
      <ScrollVelocity />
      <Login />
    </div>
  )
}

export default App
