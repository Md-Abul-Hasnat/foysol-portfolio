import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <nav>
      <Link className="logo" to="/">
        <h1>Foysal</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Services</NavLink>
        </li>
        <li>
          <NavLink to="/">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact</NavLink>
        </li>
        <i onClick={handleClick} class="fa-solid fa-xmark"></i>
      </ul>
      <i onClick={handleClick} class="fa-solid fa-bars"></i>
    </nav>
  );
};

export default Navbar;
