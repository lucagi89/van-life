
import Home from "./pages/Home.js"
import About from "./pages/About.js"
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



function Footer() {
  return <footer>© 2024 VANLIFE</footer>
}



export default App;
