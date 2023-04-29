import React from "react";
import { useRef } from "react";
import { BsChevronRight } from "react-icons/bs";
import { useSelector } from "react-redux";

const SignUpForm = () => {
  const { signUpEmail } = useSelector((store) => store.signUp);
  const signUpEmailRef = useRef(null);
  return (
    <div className="signup-form">
      <form
        className="signup-form__form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className="signup-form__desc">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="signup-form__info">
          <div className="signup-form__input-wrapper">
            <input
              type="email"
              name="signup-email"
              id="signup-email"
              ref={signUpEmailRef}
              value={signUpEmail}
            />
            <label
              htmlFor="signup-email"
              className={signUpEmail && "filled-state"}
            >
              Email
            </label>
          </div>
          <button type="submit" className="signup-form__btn">
            <p className="signup-form__btn-text">get started</p>
            <BsChevronRight className="signup-form__angle-right" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
