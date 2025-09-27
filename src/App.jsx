import Navbar from './navbar/Navbar'
import Cards from './Cards/Cards'
import Hero from './hero/Hero'
// import Texthover from "./components/texthover/texthover"
import About from './About/About'
import AOS from "aos"
import "aos/dist/aos.css"; // Import AOS styles



const App = () => {
    
  return (
    <div>
      <Navbar className="sticky" />
      <Hero  />
      {/* <Cards /> */}
      {/* <Texthover /> */}
      <About />
    </div>
  )
}

export default App
