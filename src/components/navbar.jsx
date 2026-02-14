import React, { useState } from "react";
import "./navbar.css";
import f_u_logo from "../assets/imgs/f_u_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      {/* LEFT */}
      <div className="nav-left">
        <img src={f_u_logo} alt="FU Logo" className="nav-logo" />
      </div>

      {/* CENTER (DESKTOP) */}
      <ul className={`nav-center ${menuOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Safety & Security</li>
        <li>Privacy Policy</li>
      </ul>

      {/* RIGHT (HAMBURGER) */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
