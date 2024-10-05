
import './App.css';
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
  <div className='home'>
    <div className='content'>
    <h1>You got the travel plans, we got the travel vans</h1>
    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
    <button>Find your Van</button>
    </div>
  </div>
  )
}

function About() {
  return <h1>About</h1>
}

function Footer() {
  return <footer>© 2024 VANLIFE</footer>
}



export default App;
