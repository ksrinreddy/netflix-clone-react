import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/images/logo-netflix.png";
import SelectLanguage from "./SelectLanguage";
import SignInLink from "./SignInLink";

const Navbar = () => {
  return (
    <nav className="nav section">
      <div className="nav__center">
        <header className="nav__header">
          <Link to="/">
            <img src={navLogo} alt="NETFLIX" className="nav__logo" />
          </Link>
          <div className="nav__lang-signin">
            <SelectLanguage />
            <SignInLink />
          </div>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
