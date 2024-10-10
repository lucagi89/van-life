
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Vans from "./pages/Vans.js"
import VanDetail from "./pages/VanDetail.js"
import Host from "./pages/host/Host.js"
import Dashboard from "./pages/host/Dashboard.js"
import Reviews from "./pages/host/Reviews.js"
import Income from "./pages/host/Income.js"
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
            <Route path="/host" element={<Host />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/reviews" element={<Reviews />} />
            <Route path="/host/income" element={<Income />} />
          </Route>
        </Routes>
  </BrowserRouter>
  );
}




export default App;
