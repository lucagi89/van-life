
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Vans from "./pages/Vans.js"
import VanDetail from "./pages/VanDetail.js"
import './style/App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./server";



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
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
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
