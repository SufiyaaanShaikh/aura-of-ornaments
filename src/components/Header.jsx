import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const isLogin = localStorage.getItem("isLogin");

  return (
    <header>
      <div className="logo invert">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/services">Services</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
      <div className="buttons">
        {isLogin === "true" ? (
          <div className="btn">
            <Link to="/profile">Profile</Link>
          </div>
        ) : (
          <>
            <div className="btn">
              <Link to="/login">Login</Link>
            </div>
            <div className="btn">
              <Link to="/signup">SignUp</Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
