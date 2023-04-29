import React from "react";
import { BiCheckCircle, BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

const SignUpPlan = () => {
  return (
    <section className="signup-page">
      <div className="signup-page__step-center plan">
        <article className="signup-page__step-content">
          <BiCheckCircle className="signup-page__plan-check-circle" />
          <div className="signup-page__plan-header">
            <p className="signup-page__step-indicator">
              step <span>2</span> of <span>3</span>
            </p>
            <h1 className="signup-page__step-title">Choose your plan</h1>
          </div>
          <ul className="signup-page__plan-desc">
            <li className="signup-page__plan-desc-item">
              <span>
                {" "}
                <BiCheck />{" "}
              </span>{" "}
              <p>No commitments, cancel anytime.</p>
            </li>
            <li className="signup-page__plan-desc-item">
              <span>
                {" "}
                <BiCheck />{" "}
              </span>{" "}
              <p>Everything on Netflix for one low price.</p>
            </li>
            <li className="signup-page__plan-desc-item">
              <span>
                {" "}
                <BiCheck />{" "}
              </span>{" "}
              <p>No ads and no extra fees. Ever.</p>
            </li>
          </ul>
          <Link to="/signup/planForm" className="signup-page__step-btn-next">
            Next
          </Link>
        </article>
      </div>
    </section>
  );
};

export default SignUpPlan;
