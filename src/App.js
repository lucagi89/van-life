
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Vans from "./pages/Vans.js"
import VanDetail from "./pages/VanDetail.js"
// import './style/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./server";
import Layout from "./components/Layout";



function App() {
  return (
    <BrowserRouter >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
          </Route>
        </Routes>
  </BrowserRouter>
  );
}




export default App;
