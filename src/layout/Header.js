import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";
import { Logo, Search, Cart, Profile, Menuicon } from "../image";

const Header = () => {
  /* -------------------------------------------------------------------------- */
  /*                         Responsive header function                         */
  /* -------------------------------------------------------------------------- */

  const openSidebarMenu = () => {
    console.log("sidebar open")    
  };

  return (
    <header className="header-wrapper">
      <div className="custom-container header-container">
        <div>
          <Link to="/">
            <img src={Logo} className="logo" />
          </Link>
        </div>
        <ul className="header-menu">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/">Products</Link>
        </li>
        <li>
            <Link to="/">Categories</Link>
        </li>
        <li>
            <Link to="/">About</Link>
        </li>
        <li>
            <Link to="/">Contact Us</Link>
        </li>
        </ul>
        <img src={Menuicon} alt="menu-icon" className="menu-icon" onClick={openSidebarMenu}/>

        <ul className="header-menu-icon">
        <li>
            <Link to="/">
            <img src={Search} alt="search" />
            </Link>
        </li>
        <li>
            <Link to="/">
            <img src={Cart} alt="search" />
            </Link>
        </li>
        <li>
            <Link to="/">
            <img src={Profile} alt="search" />
            </Link>
        </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
