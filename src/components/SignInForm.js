import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  handleSignIn,
  setUserEmail,
  setUserPassword,
} from "../features/signIn/signInSlice";

const SignInForm = () => {
  const { email, password } = useSelector((store) => store.signIn.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <aside className="signin-form">
      <div className="signin-form__wrapper">
        <h1 className="signin-form__title">sign in</h1>

        <form
          className="signin-form__form"
          onSubmit={(e) => {
            e.preventDefault();

            if (!email && !password) {
              alert("please enter email and password");
              return;
            }
            if (email && !password) {
              alert("enter password");
              return;
            }
            if (!email && password) {
              alert("enter email");
              return;
            }
            if (password.length < 6) {
              alert("password should be atleast 6 characters length");
              return;
            }
            if (email && !password.length < 6) {
              dispatch(handleSignIn());
              navigate("/account");
            }
          }}
        >
          <div className="signin-form__inputs-wrapper">
            <div className="signin-form__input-label-wrapper">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => dispatch(setUserEmail(e.target.value))}
              />
              <label htmlFor="email" className={email && "filled-state"}>
                Email
              </label>
            </div>
            <div className="signin-form__input-label-wrapper">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  dispatch(setUserPassword(e.target.value));
                }}
              />
              <label htmlFor="password" className={password && "filled-state"}>
                Password
              </label>
            </div>
          </div>
          <div className="signin-form__signin-btn-wrapper">
            {/* SignInBtn */}
            <button type="submit" className="signin-form__signin-submit-btn">
              sign in
            </button>
            <div className="signin-form__remember-help-wrapper">
              <div className="signin-form__remember">
                <input type="checkbox" name="remember" id="remember" />
                <span>Remember me</span>
              </div>
              <Link to="help" className="signin-form__signin-help-link">
                need help?
              </Link>
            </div>
          </div>
        </form>
        <div className="signin-form__other-wrapper">
          <p className="signin-form__signup-text">
            New to Netflix?
            <Link to="/" className="signin-form__signup-link">
              Sign up now<span>.</span>
            </Link>
          </p>
          <p className="signin-form__security-text">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span>
              <Link to="security" className="signin-form__learn-more">
                Learn more.
              </Link>
            </span>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default SignInForm;
