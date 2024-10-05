
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/" className='vanlife'>#VANLIFE</Link>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

function Home() {
  return (
  <div className='home'>
    <h1>Home</h1>
    <p>Welcome to the #vanlife</p>
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
