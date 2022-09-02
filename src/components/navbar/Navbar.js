import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <nav>
      <Link to="home" spy={true} smooth={true} className="logo">
        <h1>Foysol</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link onClick={handleClick} to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>

        <li>
          <Link onClick={handleClick} to="services" spy={true} smooth={true}>
            Services
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="pricing" spy={true} smooth={true}>
            Pricing
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>
        <i onClick={handleClick} class="fa-solid fa-xmark"></i>
      </ul>
      <i onClick={handleClick} class="fa-solid fa-bars"></i>
    </nav>
  );
};

export default Navbar;
