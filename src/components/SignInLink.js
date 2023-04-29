import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../features/signUp/signUpSlice";

const SignInLink = () => {
  const { isSignIn } = useSelector((store) => store.signIn);
  const { isSignUp } = useSelector((store) => store.signUp);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Link
      to="/login"
      className="signin-link"
      onClick={() => {
        if (isSignUp) {
          dispatch(signOut());
          navigate("/login");
        }
      }}
    >
      {isSignIn || isSignUp ? "sign out" : "sign in"}
    </Link>
  );
};

export default SignInLink;
