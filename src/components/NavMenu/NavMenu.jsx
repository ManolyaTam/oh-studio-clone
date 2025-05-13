import { useState } from "react";
import "./nav-menu.css";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-wrapper">
      <button
        className={`menu-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span className="bar bar1" />
        <span className="bar bar2" />
      </button>

      <nav className={`nav-items ${isOpen ? "show" : ""}`}>
        <a href="#hero">Home</a>
        <a href="#projects">Work</a>
        <a href="#pricing">Pricing</a>
        <a href="#careers">Careers</a>
      </nav>
    </div>
  );
};

export default NavMenu;
