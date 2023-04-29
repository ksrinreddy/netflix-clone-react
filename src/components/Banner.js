import React from "react";
import SignUpForm from "./SignUpForm";

const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner__title">Unlimited movies, TV shows and more.</h1>
      <p className="banner__subtitle">Watch anywhere. Cancel anytime.</p>
      <SignUpForm />
    </div>
  );
};

export default Banner;
