import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import footerLinksData from "../assets/data/footerLinks";
import SelectLanguage from "./SelectLanguage";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState(footerLinksData);
  return (
    <footer className="footer">
      <p className="footer__tele-text">
        Questions? Call{" "}
        <Link to="tel:000-800-919-1694" className="footer__tele-no">
          <span className="footer__tele-no-underline">000-800-919-1694</span>
        </Link>
      </p>
      <div className="footer__links-container">
        <ul className="footer__links">
          {footerLinks.map((link) => {
            const { id, name, url } = link;
            return (
              <li key={id} className="footer__list-item">
                <Link to={`/${url}`} className="footer__link">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <SelectLanguage />
      <p className="footer__country">netflix india</p>
    </footer>
  );
};

export default Footer;
