import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import '../style/App.css';

export default function Layout() {
  return (
      <div className="app">
        <Header />
        <div className='hero'>
          <Outlet />
        </div>
        <Footer />
      </div>
  );
}
