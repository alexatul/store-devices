import "./StoreLayout.css";

import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import NavbarResponsive from "../components/NavbarResponsive";

export default function StoreLayout() {
  return (
    <div className="store-layout">
      <div>
        <Navbar />
        {/* <NavbarResponsive /> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
