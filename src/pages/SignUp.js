import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineTablet,
  AiOutlineMobile,
  AiOutlineDesktop,
} from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";

const SignUp = () => {
  return (
    <section className="signup-page">
      <div className="signup-page__step-center">
        <article className="signup-page__step-content">
          <div className="signup-page__step-img-wrapper">
            <BsLaptop className="laptop-icon" />
            <AiOutlineDesktop className="desktop-icon" />
            <AiOutlineTablet className="tablet-icon" />
            <AiOutlineMobile className="mobile-icon" />
          </div>
          <p className="signup-page__step-indicator">
            step <span>1</span> of <span>3</span>
          </p>
          <h1 className="signup-page__step-title">
            Finish setting up your <br /> account
          </h1>
          <p className="signup-page__step-desc">
            Netflix is personalised for you. <br /> Create a password to watch
            on any device at any time.
          </p>
          <Link to="regForm" className="signup-page__step-btn-next">
            Next
          </Link>
        </article>
      </div>
    </section>
  );
};

export default SignUp;
