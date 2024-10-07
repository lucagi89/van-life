
import './style/App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter >
    <div className='App'>
    <nav>
      <Link to="/" className='vanlife'>#VANLIFE</Link>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
    </nav>
    <div className='hero'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    <Footer />
    </div>
  </BrowserRouter>
  );
}

function Home() {
  return (
  <div className='content-home'>

    <h1>You got the plans, we got the vans</h1>
    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
    <button>Find your Van</button>

  </div>
  )
}

function About() {
  return (
    <div className='content-about'>
        <div className='about-img'></div>
        <div className='about-hero'>
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
              (Hitch costs extra 😉)
              <br/><br/>
              Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className='about-bottom'>
          <p>Your destination is waiting.<br/>
          Your van is ready.</p>
          <button>Explore our Van</button>
        </div>
    </div>
  )
}

function Footer() {
  return <footer>© 2024 VANLIFE</footer>
}



export default App;
