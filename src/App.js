
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Vans from "./pages/Vans.js"
import VanDetail from "./pages/VanDetail.js"
import Dashboard from "./pages/host/Dashboard.js"
import HostLayout from "./pages/host/HostLayout.js"
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
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans"  >
              <Route index element={<Vans />} />
              <Route path=":id" element={<VanDetail />} />
            </Route>

            <Route path="host" element={<HostLayout />} >
              <Route index element={<Dashboard />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="income" element={<Income />} />
            </Route>
          </Route>
        </Routes>
  </BrowserRouter>
  );
}




export default App;
