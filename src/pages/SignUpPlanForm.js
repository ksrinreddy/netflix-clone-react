import React from "react";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

const SignUpPlanForm = () => {
  return (
    <section className="signup-page">
      <div className="signup-page__step-center planForm">
        <article className="signup-page__step-content planForm">
          <div className="signup-page__plan-header">
            <p className="signup-page__step-indicator">
              step <span>2</span> of <span>3</span>
            </p>
            <h1 className="signup-page__step-title">
              Choose the plan that's right for you
            </h1>
          </div>
          <ul className="signup-page__plan-desc">
            <li className="signup-page__plan-desc-item">
              <span>
                {" "}
                <BiCheck />{" "}
              </span>{" "}
              <p>Watch all you want. Ad-free.</p>
            </li>
            <li className="signup-page__plan-desc-item">
              <span>
                {" "}
                <BiCheck />{" "}
              </span>{" "}
              <p>Recommendations just for you.</p>
            </li>
            <li className="signup-page__plan-desc-item">
              <span>
                {" "}
                <BiCheck />{" "}
              </span>{" "}
              <p>Change or cancel your plan any time.</p>
            </li>
          </ul>
          <div className="signup-page__plan-grid">
            <div className="plan-label mobile">Mobile</div>
            <div className="plan-label basic">Basic</div>
            <div className="plan-label standard">Standard</div>
            <div className="plan-label premium">Premeium</div>
          </div>
          <Link
            to="/signup/paymentPicker"
            className="signup-page__step-btn-next planForm"
          >
            Next
          </Link>
        </article>
      </div>
    </section>
  );
};

export default SignUpPlanForm;
