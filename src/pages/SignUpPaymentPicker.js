import React from "react";
import { MdOutlineLock } from "react-icons/md";

const SignUpPaymentPicker = () => {
  return (
    <section className="signup-page">
      <div className="signup-page__step-center payment">
        <article className="signup-page__step-content payment">
          <MdOutlineLock className="signup-page__payment-lock-icon" />
          <div className="signup-page__step-header">
            <p className="signup-page__step-indicator">
              step <span>3</span> of <span>3</span>
            </p>
            <h1 className="signup-page__step-title">Choose how to pay</h1>
          </div>
          <p className="signup-page__step-desc">
            Your payment is encrypted and you can change your payment method at
            any time.
          </p>
          <h4 className="signup-page__step-security-desc">
            Secure for peace of mind. <br /> Cancel easily online.{" "}
          </h4>
        </article>
      </div>
    </section>
  );
};

export default SignUpPaymentPicker;
