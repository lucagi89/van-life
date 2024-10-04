
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>
}

function About() {
  return <h1>About</h1>
}



export default App;
