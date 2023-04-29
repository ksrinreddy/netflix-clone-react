import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setSignUpPassword,
  handleSubmitPassword,
} from "../features/signUp/signUpSlice";

const SignUpRegForm = () => {
  const { signUpEmail, signUpPassword } = useSelector((store) => store.signUp);
  const signUpPasswordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="signup-page">
      <div className="signup-page__step-center regForm-center">
        <article className="signup-page__step-content">
          <p className="signup-page__step-indicator">
            step <span>1</span> of <span>3</span>
          </p>
          <h1 className="signup-page__step-title">
            Create a password to start your membership
          </h1>
          <p className="signup-page__step-desc">
            Just few more steps and you're done! <br /> We hate paperwork, too.
          </p>
          <form
            className="signup-page__reg-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (!signUpPassword) {
                signUpPasswordRef.current.focus();
                signUpPasswordRef.current.style.border = `0.0625rem solid red`;
              }
              if (signUpPassword.length < 6) {
                alert("password should contain minimum 6 characters");
                return;
              }
              dispatch(handleSubmitPassword());
              navigate("/signup/plan");
            }}
          >
            <div className="signup-page__reg-form__input-label-wrapper">
              <input
                type="email"
                name="email"
                id="email"
                value={signUpEmail}
                readOnly
              />
              <label htmlFor="email" className={signUpEmail && "filled-state"}>
                Email
              </label>
            </div>
            <div className="signup-page__reg-form__input-label-wrapper">
              <input
                type="password"
                name="password"
                id="password"
                ref={signUpPasswordRef}
                value={signUpPassword}
                onChange={(e) => {
                  dispatch(setSignUpPassword(e.target.value));
                }}
              />
              <label
                htmlFor="password"
                className={signUpPassword && "filled-state"}
              >
                Password
              </label>
            </div>
            <button
              type="submit"
              className="signup-page__step-btn-next regForm"
            >
              Next
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};

export default SignUpRegForm;
