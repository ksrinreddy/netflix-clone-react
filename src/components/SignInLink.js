import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SignInLink = () => {
  const { isSignIn } = useSelector((store) => store.signIn);
  return (
    <Link to="/login" className="signin-link">
      {isSignIn ? "sign out" : "sign in"}
    </Link>
  );
};

export default SignInLink;
