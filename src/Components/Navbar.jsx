import React from "react";
import "./Css/Navbar.css"
import { Link } from "react-router-dom";
import { BsCurrencyExchange } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {

   const openMenu = ()=>{
      let menus = document.querySelector(".navbar");
      menus.classList.add("active2");
   }
   const closeMenu = ()=>{
      let menus = document.querySelector(".navbar");
      menus.classList.remove("active2");
   }

    return (
      <header>
      <a href="#" className="logo">Crypto Verse</a>
      <nav className="navbar">
        <div className="btn">
          <i onClick={closeMenu} className="fas fa-times close-btn"><BiMenu/></i>
        </div>
        <Link to={"/"} className="active">Home</Link>
        <Link to={"/crypto"}>Crypto Currencies</Link>
        <Link to={"/exchange"}>Exchanges</Link>
        <Link to={"/news"}>News</Link>
      </nav>
      <div className="btn">
        <i onClick={openMenu} className="fas fa-bars menu-btn"><BiMenu/></i>
      </div>
    </header>
  );
}
export default Navbar;