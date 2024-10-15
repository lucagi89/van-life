
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Vans from "./pages/Vans.js"
import VanDetail from "./pages/VanDetail.js"
import Dashboard from "./pages/host/Dashboard.js"
import HostLayout from "./pages/host/HostLayout.js"
import Reviews from "./pages/host/Reviews.js"
import Income from "./pages/host/Income.js"
import HostVans from "./pages/host/HostVans.js"
import HostVanLayout from "./pages/host/HostVanLayout.js"
import HostVanDetails from "./pages/host/HostVanDetails.js"
import HostVanPricing from "./pages/host/HostVanPricing.js"
import HostVanPhotos from "./pages/host/HostVanPhotos.js"
import PageNotFound from "./pages/PageNotFound.js"
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
              <Route path="vans" element={<Vans />} />
              <Route path="vans/:id" element={<VanDetail />} />

            <Route path="host" element={<HostLayout />} >
              <Route index element={<Dashboard />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path='vans/:id' element={<HostVanLayout />} >
                <Route index element={<HostVanDetails />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
              <Route path="income" element={<Income />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
  </BrowserRouter>
  );
}




export default App;
